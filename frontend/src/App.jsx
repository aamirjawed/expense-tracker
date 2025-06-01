/* eslint-disable no-unused-vars */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Login from './Auth/Login'
import SingUp from './Auth/SingUp'
import Home from './pages/Dashboard/Home'
import Income from './pages/Dashboard/Income'
import Expense from './pages/Dashboard/Expense'
import UserProvider from './context/UserContext'

function App() {


  return (
    <UserProvider>
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/signup' exact element={<SingUp />} />
          <Route path='/dashboard' exact element={<Home />} />
          <Route path='/income' exact element={<Income />} />
          <Route path='/expense' exact element={<Expense />} />
          
        </Routes>
      </Router>
    </div>
    </UserProvider>
  )
}

export default App


const Root = () => {
  //check if token exist in localstorage

  const isAuthenticated = !!localStorage.getItem("token");

  // redirect to dashboard if authenticated, otherwise to login

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) :(
    <Navigate to="/login" />
  )
}
