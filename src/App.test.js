import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Ethera home page and contact navigation', () => {
  render(<App />);

  expect(screen.getByText(/build smarter digital experiences/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
});
