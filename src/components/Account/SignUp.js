import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signUp } from '../../services/API';
import {
  ContainerAccount,
  Title,
  Form,
  Input,
  Button,
  ChangePage,
  Error
} from './ContainerAccount';
import { ButtonLoading } from '../../Loadings';
export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem('user');
    const body = {
      name,
      email,
      password,
      confirmPassword
    };
    if (password !== confirmPassword) {
      setErrorMessage('Senhas diferentes');
      return;
    }
    setIsLoading(true);
    signUp(body)
      .then(() => {
        navigate('/sign-in');
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.status === 409) {
          setErrorMessage('Email já cadastrado');
        } else {
          setErrorMessage('Dados Inválidos');
        }
      });
  }

  return (
    <ContainerAccount>
      <Title>Bem vindo ao Gratibox</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Input
          type="password"
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Error>{errorMessage}</Error>
        <Button type="submit">
          {isLoading ? <ButtonLoading /> : 'Cadastrar'}
        </Button>
      </Form>
      <Link to="/sign-in">
        <ChangePage>Já sou grato</ChangePage>
      </Link>
    </ContainerAccount>
  );
}
