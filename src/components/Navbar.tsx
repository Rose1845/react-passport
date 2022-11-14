import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/app.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">
          <Link className='link' to={'/'}>Lama App</Link>
        </span>
        <ul className="list">
            <li className="listItem">
                <img src="https://images.pexels.com/photos/7132406/pexels-photo-7132406.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="avatar" />
                <li className="listItem">John Doe</li>
                <li className="listItem">logout</li>
            </li>
        </ul>
    </div>
  )
}

export default Navbar