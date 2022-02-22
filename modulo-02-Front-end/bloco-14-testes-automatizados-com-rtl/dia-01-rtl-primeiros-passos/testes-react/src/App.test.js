import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testes React', () => {
  test('Verifica se há um `input` na tela', () => {
    render(<App />);

    const input = screen.queryByLabelText(/email/i);

    expect(input).toBeInTheDocument()
  });

  test('Verifica se há um `button` na tela', () => {
    render(<App />);
    const button = screen.queryByRole('button')
    expect(button).toBeInTheDocument();
  });
});
