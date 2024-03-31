import React from 'react'
import './NavBar.css'
import Logo from '../../asset/Logo.svg';

function NavBar() {
  return (
    <div className='navContainer bg-black flex flex-space-between'>
        <div className='flex flex-center logo'>
        <img src={Logo} />
        <p className='button-text text-white'>Sphere Tech Labs</p>
        </div>
        <div className='flex flex-space-evenly text-white text menu'>
        <p>Home</p>
        <p>Service</p>
        <p>Technologies</p>
        <p>Industries</p>
        </div>
        <div className='whiteButton button-text'>
         <p>Contact</p>   
        </div>
    </div>
  )
}

export default NavBar