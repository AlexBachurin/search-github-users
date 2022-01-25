import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context'
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-btwsyq8u.eu.auth0.com'
      clientId='7dzYDVQnfZEAZuFafOuJSoqqFAeaI6Dp'
      redirectUri={window.location.origin}
    >
      <AppProvider>
        <App />
      </AppProvider>
    </Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


