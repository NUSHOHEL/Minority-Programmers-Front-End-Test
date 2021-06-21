/* eslint-disable react/jsx-no-target-blank */
import React,{useState} from 'react';
// import { Nav,Navbar } from 'react-bootstrap';
import logo from '../../logo.svg'
// import { Link } from 'react-router-dom';
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faBars} from '@fortawesome/free-solid-svg-icons'





const NavBar = () => {
  const [click, setClick] = useState(false);
  console.log(click)
  const handleClick = ()=>{
    setClick(!click)
  }
  // const navMenu=`${click? "nav-menu active":"nav-menu"}`;
    return (
    <nav className='navbar'>
      <div className="nav-container">
        <NavLink exact to='/' activeClassName='active' className='nav-logo'>
          <img src={logo} alt="" style={{width:'80px'}} />
        </NavLink>
        <ul className={(click? "nav-menu active" : "nav-menu")}>
          <li className='nav-item'>
          <NavLink exact to='/home' activeClassName='active'className='nav-links' onClick={handleClick}>
          Home
        </NavLink>
          </li>
          <li className='nav-item'>
          <NavLink exact to='/incubator' activeClassName='active'className='nav-links' onClick={handleClick}>
          Incubator
        </NavLink>
          </li>
          <li className='nav-item'>
          <NavLink exact to='/learn' className='nav-links' activeClassName='active' onClick={handleClick}>
          Learn
        </NavLink>
          </li>
        </ul>
        <div className="nav-icon"  onClick={handleClick}>
        <FontAwesomeIcon icon={click ? faTimes: faBars}/>
        </div>
      </div>

    </nav>

    );
};

export default NavBar;