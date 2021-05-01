import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className='bg-red-400 text-white'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex mx-auto'>
          <NavLink
            to='/'
            exact
            className='inline-flex items-center py-3 px-3 my-6 rounded bold text-lg'
          >
            PROJECTS
          </NavLink>
          <NavLink
            to='/post'
            className='inline-flex items-center py-3 px-3 my-6 rounded bold text-lg'
          >
            POSTS
          </NavLink>
          <NavLink
            to='/about'
            className='inline-flex items-center py-3 px-3 my-6 rounded bold text-lg'
          >
            ABOUT ME
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
