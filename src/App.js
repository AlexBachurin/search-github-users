
import { Dashboard, Error, Login } from './pages/index'
import { Routes, Route } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react';

import RequireAuth from './components/RequireAuth'
function App() {
  // const { isAuthenticated, user, isLoading } = useAuth0();
  //display loading after login
  // if (!isLoggedIn) {
  //   return <main>
  //     <img className='loading-img' src="https://res.cloudinary.com/dljezd6qv/image/upload/v1643160653/1200x1200_ppwqkf.gif" alt="loading" />
  //   </main>
  // }
  return (
    // <Router>
    <Routes>
      {/* //if user authenticated we can go to checkout page, if not then redirect to home page */}
      <Route
        path="/"
        element={
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
