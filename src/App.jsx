import './App.css'
import CustomerList from './Customers/CustomerList'
import Laskuri from './Laskuri'
import { useState, useEffect } from 'react'
import Message from './Message'
import UserList from './Users/UserList'

// Navigointi ja Bootstrap importit
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login'


function App() {

  // Messageen liittyvät statet
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const [isPositive, setIsPositive] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("username") != null) {
      setLoggedIn(true)
    }
  },[])

// Logout metodi
const logout = () => {
  localStorage.clear()
  setLoggedIn(false)
}



  return (
      <div>
      <Router>      
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
            <Nav.Link href='/customers'>Customers</Nav.Link>
            <Nav.Link href='/users'>Users</Nav.Link>
            <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
            {loggedIn && <button onClick={() => logout()}>Log out</button>}
        </Nav>
      </Navbar>

        <h2>Northwind Corporation</h2>

       {showMessage && <Message message={message} isPositive={isPositive} />}

       {!loggedIn && <Login setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} setLoggedIn={setLoggedIn} />}

       <Routes>
          <Route path="/customers"
          element={<CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>

          <Route path="/users"
          element={<UserList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>
          
          <Route path="/laskuri" 
          element={<Laskuri otsikko={"Laskuri"} />}>
        </Route>
        
        </Routes>
      </Router>
      </div>
  )
}

export default App
