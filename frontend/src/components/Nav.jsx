import React, { useState } from 'react'
import App from '../App'
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";



const nav = () => {
    const [showSidebar, setshowSidebar] = useState(false);
   
    return (
        <div>

            <nav  className='navbar'>
                <button id='openSidebar' className='menu' onClick={() => setshowSidebar(true)}><MdMenu size={20}/></button>
                <div className='logo'><a href="/">PALELO</a></div>
                <div id='navLinks' className='nav-links' style={{display: showSidebar ? 'flex' : 'none'}}>
                <button id='closeSidebar' className='close' onClick={() => setshowSidebar(false)}><IoClose size={40}/></button>
                <a href="">home</a>
                <a href="">home</a>
                <a href="">home</a>
                <a href="">home</a>
                </div>
                <div></div>
                <div className='search'><a href="/search"><FaSearch size={20}/></a> <span className='cartIcon'><a href="/cart"><FaShoppingCart /></a></span></div>
            </nav>
        </div>
  )
}

export default nav
