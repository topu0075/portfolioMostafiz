import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='bg-base-100 flex justify-end flex-row-reverse md:flex-row md:justify-around my-5 md:my-10'>
        <div className='mx-auto md:mx-0'>
          <a className='btn btn-ghost normal-case text-xl'>Logo</a>
        </div>
        <div className='flex justify-center'>
          <div className='flex-none hidden md:flex'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <NavLink to='/'>Homepage</NavLink>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div class='w-3/12 md:hidden'>
            <div class='dropdown'>
              <label tabindex='0' class='btn btn-ghost btn-circle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h7'
                  />
                </svg>
              </label>
              <ul
                tabindex='0'
                class='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
