import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constant/index';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenu = () => {
      setIsOpen(!isOpen)
  }
  
  const [color, setColor] = useState(false)
  const handleBgColor = () => {
    if (window.scrollY >= 100) {
      setColor(true) 
    } else {
        setColor(false); 
    }
  }

  window.addEventListener("scroll", handleBgColor)


  return (
    <div
      className={
        color
          ? `flex justify-between items-center w-full h-[90px] fixed p-4 z-10 bg-black/80`
          : `flex justify-between items-center w-full h-[90px] fixed p-4 z-10`
      }>
      <Link to='/'>
        <h1 className='text-white text-4xl font-semibold'>GLX TRVL</h1>
      </Link>
      <ul className='flex flex-1 justify-end max-md:hidden'>
        {navLinks.map((link) => (
          <li className='text-white px-4 text-[1.2rem] font-[500]'>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className='text-white md:hidden'>
        <button onClick={handleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
      <div
        className={
          isOpen
            ? ` absolute left-0 top-0 h-screen w-full flex justify-center items-center bg-black/90 z-[-1] ease-in-out duration-300 md:hidden `
            : ` absolute left-[-100%] md:hidden`
        }>
        <ul className='flex flex-col justify-center items-center py-4'>
          {navLinks.map((link) => (
            <li className='text-white py-4 text-[1.5rem] font-[500]'>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar