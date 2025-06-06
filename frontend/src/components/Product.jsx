import React from 'react'
import Card from './Card.jsx'


const Product = () => {
  return (
    <div className='product'>
      <h1>Fresh products</h1>
      <div className='product-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h2>All these are available</h2>

    </div>
  )
}

export default Product
