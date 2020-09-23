import React from "react";
import {Link, NavLink} from 'react-router-dom';
import './Header.css';

class Header extends React.Component{
    render(){
        return <div className='links'>
            <div className='linkBlock'>
            <div className='link'>
            <NavLink classname='menu-link' to="/" activeStyle={{textDecoration: "underline"}}>Home</NavLink>
            </div>
            <div className='link'>
            <NavLink classname='menu-link' to="/my-profile" activeStyle={{textDecoration: "underline"}}>My profile</NavLink>
            </div>
            <div className='link'>
            <NavLink classname='menu-link' to="/about-us" activeStyle={{textDecoration: "underline"}}>About Us</NavLink>
            </div>
            </div>
        </div>
    }
}

export default Header;

