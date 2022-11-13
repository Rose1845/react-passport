import React from 'react'
import './app.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Lama App</span>
        <ul className="list">
            <li className="listItem">
                <img src="https://images.pexels.com/photos/7132406/pexels-photo-7132406.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="avatar" />
                <li className="listItem">JOhn Doe</li>
                <li className="listItem">logout</li>
            </li>
        </ul>
    </div>
  )
}

export default Navbar