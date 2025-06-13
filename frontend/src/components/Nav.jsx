import React, { useState } from 'react'
import App from '../App'
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const nav = () => {
    const [showSidebar, setshowSidebar] = useState(false);
   
    return (
        <div>

            <nav  className='navbar'>
                <button id='openSidebar' className='menu' onClick={() => setshowSidebar(true)}><MdMenu size={20}/></button>
                <div className='logo'>PALELO</div>
                <div id='navLinks' className='nav-links' style={{display: showSidebar ? 'flex' : 'none'}}>
                <button id='closeSidebar' className='close' onClick={() => setshowSidebar(false)}><IoClose size={40}/></button>
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
