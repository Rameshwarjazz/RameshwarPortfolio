import React, { useState } from 'react';
import Logo from '../assets/rameshwar-ji-logo.jpg';
import BurgerIcon from '../assets/burger.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='fixed w-full z-20 top-0 bg-orange-100 bg-opacity-80'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2'>
          <img src={Logo} className='h-8 ml-4' alt='logo' />
          <div className='flex md:order-2'>
            <button
              onClick={toggle}
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:ring-2 focus:ring-gray-200 '
            >
              <img src={BurgerIcon} alt='icon' className='text-orange-400 text-lg' />
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 text-xl border cursor-pointer border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
                isOpen ? 'bg-orange-100 bg-opacity-70' : ''
              }`}
            >
              <li>
                <Link to='Home' smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='OverView' smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to='Project' smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to='Contact' smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
