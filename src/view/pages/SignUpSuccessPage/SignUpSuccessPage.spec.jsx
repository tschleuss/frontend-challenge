import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderUI } from 'app/testing/testHelper';
import { SignUpSuccessPage } from './SignUpSuccessPage';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('SignUpSuccessPage', () => {
  it('should load and render correctly', () => {
    renderUI(<SignUpSuccessPage />);

    expect(
      screen.getByRole('heading', { level: 1, name: /Success/i }),
    ).toBeVisible();

    expect(
      screen.getByText('You should receive a confirmation email soon.'),
    ).toBeVisible();

    expect(screen.getByRole('button', { name: /Restart/i })).toBeVisible();
  });

  it('should redirect user to sign up page upon clicking on Restart', async () => {
    renderUI(<SignUpSuccessPage />);

    const user = userEvent.setup();
    await user.click(screen.getByText('Restart'));

    expect(mockUseNavigate).toHaveBeenCalledWith('/');
  });
});
