
import { Dashboard, Error, Login } from './pages/index'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  //display loading after login
  if (isLoading) {
    return <main>
      <img className='loading-img' src="https://res.cloudinary.com/dljezd6qv/image/upload/v1643160653/1200x1200_ppwqkf.gif" alt="loading" />
    </main>
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
