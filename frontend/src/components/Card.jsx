import React from 'react'


const Card = ({ title, price, image }) => {
  return (
    <div className='card'>
      <div className='image'><img src={image} alt={title} /></div>
      <div className='card-info'>
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Card
