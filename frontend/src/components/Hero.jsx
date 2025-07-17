import React from 'react'
import Button from "./Button"


const hero = () => {
  return (
    <div className ="hero">
      <div className = "hero-content">
         <div className="searchBox">
        <input id='search' type="text" placeholder="Search for products..." />
        <Button btnName = "Search"/>
      </div>
      <p>Palelo</p>
      <h1>Male Clothes</h1>
      <p>everyone has a style</p>
      <Button btnName = "Shop Now"/>
      </div>
    </div>
  )
}

export default hero
