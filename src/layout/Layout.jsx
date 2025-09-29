import React from 'react'
import { BrowserRouter as router,Routes,route } from 'react-router-dom'
import Nav from  "../components/Nav.jsx"
i


const Layout = () => {
  return (
    <div>
        <router>
          <Nav/>
            <routes>
                <route Path="/" />
            </routes>
        </router>
      
    </div>
  )
}

export default Layout
