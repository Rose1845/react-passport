import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/app.css'

type PropsUser = {
  user:{}
}

const Navbar = ({user}:PropsUser) => {
  return (
    <div className='navbar'>
        <span className="logo">
          <Link className='link' to={'/'}>Lama App</Link>
        </span>
        {
          user ? (

            <ul className="list">
            <li className="listItem">
                <img src="https://images.pexels.com/photos/7132406/pexels-photo-7132406.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="avatar" />
                <li className="listItem">John Doe</li>
                <li className="listItem">logout</li>
            </li>
        </ul>

          ):(<Link className="link" to="login">Login</Link>)
        }
    </div>
  );
};

export default Navbar