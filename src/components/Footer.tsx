import React from 'react'
import Link from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <p>made by nyaugenya</p>
            {new Date().getFullYear()}
            {'.'}
    </div>
  )
}

export default Footer