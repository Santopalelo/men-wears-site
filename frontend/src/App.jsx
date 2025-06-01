import React from 'react'
import Nav from './components/nav.jsx'
import Hero from './components/hero.jsx'
import Products from './components/Products.jsx'
import Blog from './components/Blog.jsx'
import Abouthero from './components/abouthero.jsx'
import Footer from './components/footer.jsx'
import Example from './components/Example.jsx'


const App = () => {
  return (
    <div className='App'>
      <Nav/>
      <Hero/>
      <Abouthero/>
      <Products/>
      <Blog/>
      <Footer/>
    <Example Name = 'Onwe Somto Lawrence' Age= {35} />
    </div>
  )
}

export default App
