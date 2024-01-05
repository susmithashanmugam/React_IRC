import { render, screen } from '@testing-library/react';
import App from './App';

test('App-test_1', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('App-test_2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello !/i);
  expect(linkElement).toBeInTheDocument();
});
