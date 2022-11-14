
import React from 'react'
import '../styles/app.css'
import { IPost } from '../interfaces'
import { Link } from 'react-router-dom'

type PropsType = {
    post:IPost
}

const Card = ( {post}:PropsType) => {
  return (
    <div className='card'>
      <Link className="link "to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="desc">{post.desc}</p>
        <button className="cardButton">readmore</button>
      </Link>
    </div>
  )
}

export default Card