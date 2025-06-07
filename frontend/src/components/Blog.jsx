import React from 'react'
import Card from './Card'

const Blog = () => {
  return (
    <div className='blog-container'>
      <h1>Our blog post</h1>
      <div className='blogcards'>
      <Card image="/images/blacksuit.webp" title="suit"  />
      <Card image="/images/ash-suit.webp" title="suit"  />
      <Card image="/images/men-suit.webp" title="suit"  />
      </div>
      
      <div/>
    </div>
  )
}

export default Blog
