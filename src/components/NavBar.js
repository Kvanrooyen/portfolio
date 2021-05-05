import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center h-12 bg-red-400 text-black relative'>
      <Link to='/' className='pl-4'>
        Keagan van Rooyen
      </Link>
      <div className='px-4 cursor-pointer md:hidden'>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block hidden'>
        <Link className='p-4' to='/'>
          PROJECTS
        </Link>
        <Link className='p-4' to='/post'>
          POSTS
        </Link>
        <Link className='p-4' to='/about'>
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
