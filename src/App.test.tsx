import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  const portfolioElement = screen.getByText(/DreamX/i);
  expect(portfolioElement).toBeInTheDocument();
});
