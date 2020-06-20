import React from 'react'
import { NavLink} from 'react-router-dom';
import './menu.css'
// import Image from '../../shiro.jpg'

function Menu() {
    return (

    //   {  <div className="vertical-menu">
    //         <a href="/Home" className="active">Home</a>
    //         <a href="/Login">Login with your User</a>
    //         <a href="/Kanji">Enter Kanji </a>
    //         <a className="cursor" >About</a>
    //         <img src="/../../shiro.jpg"/>
    // </div>   }

<div className="vertical-menu">
    <NavLink to="/Home" activeClassName="active">Home</NavLink>
    <NavLink to="/Login" activeClassName="active">Login</NavLink>
    <NavLink to="/Kanji" activeClassName="active">Kanji</NavLink>
    <div className="cursor" >About</div>
    <img src="/../../shiro.jpg" alt=''/>
    
</div>

    )
}

export default Menu
