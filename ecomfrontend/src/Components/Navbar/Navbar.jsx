import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import {  AppRegistrationOutlined, CategoryOutlined, LoginOutlined, ShoppingCartOutlined, StorefrontOutlined } from '@mui/icons-material'

 const Navbar = () => {
   const handleClick =()=>{
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
   }
  return (
  <div className="topnav" id="myTopnav">
      <Link to ="/"><a className="active"> <StorefrontOutlined/></a></Link>
      <Link to ="/login"><a><LoginOutlined/></a></Link>
      <Link to ="/register"><a><AppRegistrationOutlined/></a></Link>
      <Link to ="/cart"><a> <ShoppingCartOutlined/></a></Link>
      <div className="dropdown">
        
       
        
       
    <Link to ="/" ><button className="dropbtn"><CategoryOutlined/>
      <i className="fa fa-caret-down"></i>
      </button></Link>
      <div className="dropdown-content">
      <Link to ="/cart"> <a>Clothes</a></Link>
      <Link to ="/cart"><a>Electronics</a></Link>
      <Link to ="/cart"><a>Grocery</a></Link>
      <Link to ="/cart"><a>Sports</a></Link>
      <Link to ="/cart"><a>Toys</a></Link>
      <Link to ="/cart"><a>Home Appliances</a></Link>
    
    </div>
  </div> 
  <a href="javascript:void(0);" style={{fontSize:15}} onClick={handleClick} className="icon">&#9776;</a>
</div>

  )
}

export default Navbar