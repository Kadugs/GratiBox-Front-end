import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { signIn } from '../../services/API';
import {
  ContainerAccount,
  Title,
  Form,
  Input,
  Button,
  ChangePage,
  Error
} from './ContainerAccount';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('user'));
    if (!!localData?.token) {
      navigate('/plans');
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email) {
      setErrorMessage('Por favor, insira seu email');
      return;
    }
    if (!password) {
      setErrorMessage('Por favor, insira sua senha');
      return;
    }
    const body = {
      email,
      password
    };
    signIn(body)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        navigate('/plans');
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          setErrorMessage('Dados inválidos');
        } else if (
          err.response?.status === 404 ||
          err.response?.status === 401
        ) {
          setErrorMessage('Email ou senha incorretos');
        } else {
          setErrorMessage('Erro no servidor');
        }
      });
  }

  return (
    <ContainerAccount>
      <Title>Bem vindo ao Gratibox</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button screen="login">Login</Button>
      </Form>
      <Error>{errorMessage}</Error>
      <Link to="/sign-up">
        <ChangePage>Ain não sou grato</ChangePage>
      </Link>
    </ContainerAccount>
  );
}
