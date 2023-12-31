import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary border-b-2 border-b-secondary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* ADDS LOGO TO HEADER IF NEEDED */}
          {/* <img src={logo} alt="logo" className='w-9 h-9 object-contain rounded-full' /> */}
          <p className='text-secondary text-[18px] font-bold cursor-pointer flex'>
            Martin's Construction Company
          </p>
        </Link>
        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                ? 'text-white'
                : 'text-secondary'
                } 'hover:text-white text-[18px]
                 font-light cursor-pointer uppercase`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-beige absolute 
            top-20 right-0 mx-4 my-2 min-w[140px] z-10`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                    ? 'text-stone-500'
                    : 'text-secondary'
                    } 'font-poppins text-[16px]
                    font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle);
                  }
                  }
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar