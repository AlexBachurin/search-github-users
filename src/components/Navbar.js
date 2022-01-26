import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
const Navbar = () => {
    const { isAuthenticated, logout, user } = useAuth0();
    const { name, picture } = user;
    const isUser = isAuthenticated && user;
    return <Wrapper>
        {/* if we have user authenticated then display welcoming message, if not display nothing
        but this is not necessary since we wont show dashboard to not authenticated user */}
        {isUser ? <>
            <img src={picture} alt={name}></img>
            <h4>Welcome, {name.toUpperCase()}</h4>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </> : null}

    </Wrapper>;
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
