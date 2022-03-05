import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('renders welcome text', () => {
  render(<Home />, { wrapper: MemoryRouter });
  const el = screen.getByText(/Welcome to the homepage!/i);
  expect(el).toBeInTheDocument();
});
