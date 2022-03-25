import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context'
// import { Auth0Provider } from "@auth0/auth0-react";
import { AuthProvider } from './AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


