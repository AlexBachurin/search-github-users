
import { Dashboard, Error, Login } from './pages/index'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  //display loading after login
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  //if user exists and authenticated then display dashboard, if not navigate back to login page
  const isUser = isAuthenticated && user;
  return (
    <Router>
      <Routes>
        <Route path="/" element={isUser ? <Dashboard /> : <Navigate to='login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
