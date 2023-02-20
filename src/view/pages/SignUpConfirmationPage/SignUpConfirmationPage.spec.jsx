import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  post_submit_error_response,
  post_submit_success_response,
} from 'app/testing/apiMocks/submit';
import { renderUI } from 'app/testing/testHelper';
import { setupServer } from 'msw/lib/node';
import { SignUpConfirmationPage } from './SignUpConfirmationPage';

const mockSignupSate = {
  name: 'John Doe',
  email: 'john_doe@domain.com',
  password: '123456789',
  color: 'black',
  terms: true,
};

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('SignUpConfirmationPage', () => {
  let mswServer = null;

  beforeAll(() => {
    mswServer = setupServer(
      ...[post_submit_success_response, post_submit_error_response],
    );

    mswServer.listen();
  });

  afterEach(() => {
    mswServer.resetHandlers();
  });

  afterAll(() => {
    mswServer.close();
  });

  it('should load and render correctly', () => {
    renderUI(<SignUpConfirmationPage />, {
      reduxState: { signup: mockSignupSate },
    });

    expect(
      screen.getByRole('heading', { level: 1, name: /Confirmation/i }),
    ).toBeVisible();

    expect(screen.getByText('First Name:')).toBeVisible();
    expect(screen.getByText('Password:')).toBeVisible();
    expect(screen.getByText('Favorite Color:')).toBeVisible();
    expect(screen.getByText('Terms and Conditions:')).toBeVisible();
    expect(screen.getByRole('button', { name: /Back/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeVisible();
  });

  it('should display a signup summary data', () => {
    renderUI(<SignUpConfirmationPage />, {
      reduxState: { signup: mockSignupSate },
    });

    expect(screen.getByText('John Doe')).toBeVisible();
    expect(screen.getByText('john_doe@domain.com')).toBeVisible();
    expect(screen.getByText('*********')).toBeVisible();
    expect(screen.getByText('black')).toBeVisible();
    expect(screen.getByText('Agreed')).toBeVisible();
  });

  it('should send user to success page when server returns status 200 OK', async () => {
    mswServer.use(post_submit_success_response);

    renderUI(<SignUpConfirmationPage />, {
      reduxState: { signup: mockSignupSate },
    });

    const user = userEvent.setup();
    await user.click(screen.getByText('Submit'));

    await waitFor(() =>
      expect(mockUseNavigate).toHaveBeenCalledWith('/success'),
    );
  });

  it('should send user to error page when server returns status 400', async () => {
    mswServer.use(post_submit_error_response);

    renderUI(<SignUpConfirmationPage />, {
      reduxState: { signup: mockSignupSate },
    });

    const user = userEvent.setup();
    await user.click(screen.getByText('Submit'));

    await waitFor(() => expect(mockUseNavigate).toHaveBeenCalledWith('/error'));
  });
});
