import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fff;
`;

const LoginInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  width: 80%;
  max-width: 300px;
`;

const LoginInput = styled.input`
  padding: 10px;
  width: calc(100% - 40px);
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff00ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
  }
`;


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(username, password)) {
        navigate('/app');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <LoginContainer>
      <h1>Rento</h1>
      <p>All-in-1 Rent App</p>
      <ImageContainer>
        <img src="https://www.coastalbusiness.com/media/catalog/product/cache/45eae73ed333c8d53637098fdf4d8594/h/o/home-sweet-home-round-sign-by-shine-green-art-cb-1_1.jpg" alt="Survey" />
      </ImageContainer>
      <LoginInputContainer>
        <FaUser style={{ marginRight: '10px' }} />
        <LoginInput type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </LoginInputContainer>
      <LoginInputContainer>
        <FaLock style={{ marginRight: '10px' }} />
        <LoginInput type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </LoginInputContainer>
      <LoginButton onClick={handleLogin}>Login</LoginButton>
    </LoginContainer>
  );
};

export default Login;
