// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isChecked, onToggle }: { isChecked: boolean; onToggle: () => void; }) => {
  return (
    <div className="">
      <div className="navbar transition-all duration-300 bg-base-300 rounded-md fixed top-4 left-1/2 transform -translate-x-1/2 shadow-lg w-11/12 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="/maids">Maids</Link></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">সহজে পান</a>
        </div>
        <div className="navbar-end">
          {/* toggle dark / light mode */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="hidden"
              id="custom-toggle"
              checked={isChecked}
              onChange={onToggle}
            />
            <label
              htmlFor="custom-toggle"
              className="relative inline-block w-12 h-6 cursor-pointer"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-full transition duration-300"></span>
              <span
                className={`absolute top-0 w-6 h-6 bg-white rounded-full shadow transform transition duration-300 ${isChecked ? 'translate-x-6' : ''}`}
              >
                <FontAwesomeIcon
                  icon={isChecked ? faSun : faMoon}
                  className="absolute inset-0 m-auto w-4 h-4"
                />
              </span>
            </label>
          </div>

          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
