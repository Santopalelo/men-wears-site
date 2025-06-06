import React from 'react'
import App from '../App'
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const nav = () => {
    return (
        <div>

            <nav className='navbar'>
                <div className='menu'><MdMenu size={20}/></div>
                <div className='logo'>PALELO</div>
                <div className='nav-links'>
                <a href="">home</a>
                <a href="">home</a>
                <a href="">home</a>
                <a href="">home</a>
                <a href="">home</a>
                </div>
                <div className='search'><FaSearch size={20}/></div>
            </nav>
        </div>
  )
}

export default nav
