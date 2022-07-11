import React, { useState, useEffect } from 'react';
import {useTheme} from 'next-themes'

import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(false);
  const {theme, setTheme} = useTheme();

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
      <nav className="bg-white dark:bg-neutral-900 top-0 w-full border-b border-black dark:border-white sticky z-50 flex items-center flex-wrap px-2 sm:px-12 py-2 mb-8 ease-in-out duration-1000">
        <Link href="/">
          <span className="cursor-pointer inline-flex items-center gap-1 p-1 text-4xl text-black dark:text-white font-normal tracking-wide custom-font">
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              fill="#A1A1A1"
              stroke="currentColor"
              className="h-10 w-10 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={20}
                d="M24 128L76 56 180 200 232 128"
              />
            </svg>
            Blogshot
          </span>
        </Link>
        <button
          className="inline-flex p-3 hover:bg-black ml-auto rounded lg:hidden text-black dark:text-white hover:text-white outline-none"
          onClick={handleClick}
          type="button"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className="hover:cursor-pointer lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}><span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-gray-200 hover:cursor-pointer dark:text-white dark:hover:bg-neutral-700">{category.name}</span></Link>
            ))}
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="px-3 py-2 rounded ease-in-out duration-300 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 lg:transform-none md:relative md:left-0 hover:bg-gray-200 dark:hover:bg-neutral-700"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-6 w-6 text-gray-800 dark:text-white"
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
