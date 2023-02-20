import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { get_colors_response } from 'app/testing/apiMocks/colors';
import { renderUI } from 'app/testing/testHelper';
import { setupServer } from 'msw/node';
import { SignUpMoreInfoPage } from '.';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

const mockSignupSate = {
  name: 'John Doe',
  email: 'john_doe@domain.com',
  password: '123456789',
};

describe('SignUpMoreInfoPage', () => {
  let mswServer = null;

  beforeAll(() => {
    mswServer = setupServer(...[get_colors_response]);
    mswServer.listen();
  });

  afterEach(() => {
    mswServer.resetHandlers();
  });

  afterAll(() => {
    mswServer.close();
  });

  it('should load and render correctly', async () => {
    renderUI(<SignUpMoreInfoPage />, {
      reduxState: { signup: mockSignupSate },
    });

    expect(
      screen.getByRole('heading', { level: 1, name: /Additional Info/i }),
    ).toBeVisible();

    expect(await screen.findByText('Select your favorite color')).toBeVisible();
    expect(screen.getByText('I agree to')).toBeVisible();
    expect(screen.getByRole('button', { name: /Back/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Next/i })).toBeVisible();
  });

  it('should prevent submit when required fields are not informed', async () => {
    renderUI(<SignUpMoreInfoPage />, {
      reduxState: { signup: mockSignupSate },
    });

    const user = userEvent.setup();
    await waitFor(() => expect(screen.getByText('Next')).not.toBeDisabled());
    await user.click(screen.getByText('Next'));

    expect(screen.getByText('color is a required field')).toBeVisible();
    expect(screen.getByText('The terms and conditions must be accepted.')).toBeVisible();
    expect(mockUseNavigate).not.toHaveBeenCalled();
  });

  it('should redirect user to confirmation page when all required fields are informed', async () => {
    renderUI(<SignUpMoreInfoPage />, {
      reduxState: { signup: mockSignupSate },
    });

    const user = userEvent.setup();
    await waitFor(() => expect(screen.getByText('Next')).not.toBeDisabled());

    await user.selectOptions(
      screen.getByLabelText('Select your favorite color'),
      ['black'],
    );

    await user.click(screen.getByText('I agree to'));
    await user.click(screen.getByText('Next'));

    expect(mockUseNavigate).toHaveBeenCalledWith('/confirmation');
  });
});
