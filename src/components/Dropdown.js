import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-3 text-center items-center bg-red-400"
          : "hidden"
      }
      onClick={toggle}
    >
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
  );
};

export default Dropdown;
