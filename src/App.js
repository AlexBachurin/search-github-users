
import { Dashboard, Error, Login } from './pages/index'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react';
import { useAuthContext } from './AuthContext';
import RequireAuth from './components/RequireAuth'
function App() {
  // const { isAuthenticated, user, isLoading } = useAuth0();
  const { isLoggedIn } = useAuthContext();
  //display loading after login
  // if (!isLoggedIn) {
  //   return <main>
  //     <img className='loading-img' src="https://res.cloudinary.com/dljezd6qv/image/upload/v1643160653/1200x1200_ppwqkf.gif" alt="loading" />
  //   </main>
  // }
  //if user exists and authenticated then display dashboard, if not navigate back to login page
  // const isUser = isAuthenticated && user;
  // const { user, isLoggedIn } = useAuthContext();
  // const isAuthenticated = user && isLoggedIn;
  return (
    // <Router>
    <Routes>
      {/* //if user authenticated we can go to checkout page, if not then redirect to home page */}
      <Route
        path="/"
        element={
          // Good! Do your composition here instead of wrapping <Route>.
          // This is really just inverting the wrapping, but it's a lot
          // more clear which components expect which props.
          <RequireAuth redirectTo="/login">
            <Dashboard />
          </RequireAuth>
        }
      />
      {/* <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to='login' />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Error />} />
    </Routes>
    // </Router>
  );
}

export default App;
