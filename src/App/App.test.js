import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders welcome text', () => {
  render(<App />, { wrapper: MemoryRouter });
  const el = screen.getByText(/Welcome to the homepage!/i);
  expect(el).toBeInTheDocument();
});