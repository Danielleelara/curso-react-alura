import { render, screen } from '@testing-library/react';
import App from './App';


test('Saber se aparece o título', () => {
  render(<App />);
  const facaLogin = screen.getByText(/Faça seu login/i);
  expect(facaLogin).toBeInTheDocument();
});

test('Encontrar o botão', () => {
  render(<App />);
  const getButton = screen.getByRole('button', {name:/Enviar/i});
  expect(getButton).toBeInTheDocument();
});

test('Encontrar o input de email', () => {
  render(<App />);
  const getEmail = screen.getByLabelText(/Email/i);
  expect(getEmail).toBeInTheDocument();
});

test('Encontrar o input de nome', () => {
  render(<App />);
  const getSenha = screen.getByLabelText(/Senha/i);
  expect(getSenha).toBeInTheDocument();
});


