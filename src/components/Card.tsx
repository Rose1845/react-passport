import React from 'react'
import '../styles/app.css'
import { IPost } from '../interfaces'

type PropsType = {
    post:IPost
}

const Card = ( {post}:PropsType) => {
  return (
    <div className='card'>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="desc">{post.desc}</p>
        <button className="cardButton">readmore</button>
    </div>
  )
}

export default Card