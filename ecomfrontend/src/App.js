import React from 'react'

//import all components 
import Navbar from './Components/Navbar/Navbar.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Search from '../src/Components/Header/Search'
import Login from '../src/Components/Auth/Login/Login'
import Register from './Components/Auth/Register/Register'
import Cart from '../src/Components/Cart/Cart'

// import all Routes from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Search />
        <Routes>
            <Route exact path ="/" element={<Header/>} />
            <Route  path ="/login" element={<Login/>} />
            <Route  path ="/register" element={<Register/>} />
            <Route  path ="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App