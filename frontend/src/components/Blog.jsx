import React from 'react'
import Card from './Card'

const Blog = () => {
  return (
    <div className='blog-container'>
      <h1>Our blog post</h1>
      <div className='blogcards'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      
      <div/>
    </div>
  )
}

export default Blog
