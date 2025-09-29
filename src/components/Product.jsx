import React from 'react'
import Card from './Card.jsx'


const Product = () => {
  return (
    <div className='product'>
      <h1>Fresh products</h1>
      <div className='product-container'>
        <Card image="/images/belts.png" title="Belts" price="₦ 2,000" />
        <Card image="/images/brown-brucks.jpg" title="Shoes" price="₦ 5,000" />
        <Card image="/images/shirt.png" title="Shirts" price="₦ 3,000" />
        <Card image="/images/trouser.png" title="Pants" price="₦ 4,000" />
        <Card image="/images/hat.png" title="Hats" price="₦ 1,500" />
        <Card image="/images/watch.png" title="Watches" price="₦ 6,000" />
        <Card image="/images/glassess.png" title="Sunglasses" price="₦ 2,500" />
      </div>
      <h2>All these are available</h2>

    </div>
  )
}

export default Product
