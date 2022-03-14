import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

test('renders welcome text', () => {
  render(<About />, { wrapper: MemoryRouter });
  const el = screen.getByText(/Who are we[?]/i);
  expect(el).toBeInTheDocument();
});