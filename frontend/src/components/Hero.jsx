import React from 'react'


const hero = () => {
  return (
    <div className ="hero">
      <div className = "hero-content">
         <div className="searchBox">
        <input id='search' type="text" placeholder="Search for products..." />
        <button className='searchButton'>Search</button>
      </div>
      <p>Palelo</p>
      <h1>Male Clothes</h1>
      <p>everyone has a style</p>
      <button className='shopNowButton'>Shop Now</button>
      </div>
    </div>
  )
}

export default hero
