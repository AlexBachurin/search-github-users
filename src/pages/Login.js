import React from 'react';
import styled from 'styled-components';
// import { useAuth0 } from '@auth0/auth0-react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  // Auth0 is not working in Ru anymore
  // const { loginWithRedirect } = useAuth0();
  ///Sing in functionality
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        console.log(error);
      });

  }
  return <Wrapper>
    <div className="container">
      <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1642692791/login-image-impr.jpg" alt="login_image" />
      <h1>Github Users</h1>
      <button onClick={signIn} className="btn">Log In/Sign In</button>
    </div>
  </Wrapper>
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
