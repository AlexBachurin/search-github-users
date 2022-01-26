import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return <Wrapper>
    <div className="container">
      <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1642692791/login-image-impr.jpg" alt="login_image" />
      <h1>Github User</h1>
      <button onClick={loginWithRedirect} className="btn">Log In/Sign In</button>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    border-radius: 20px;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;
