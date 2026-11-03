import React from 'react'
import logo from '../assets/logo.png'
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa'
import { SlBasket } from 'react-icons/sl'

const links = ['Home', 'Contact', 'About', 'Sign up']

const Header = ({ search, setSearch, cartCount }) => {
    return (
        <header className='border-b border-gray-200'>
            <div className='flex flex-wrap justify-between items-center gap-4 px-5 py-4 max-w-7xl mx-auto'>
                <img src={logo} alt='logo' className='w-24' />

                <nav>
                    <ul className='flex items-center gap-5'>
                        {links.map((link) => (
                            <li key={link}>
                                <a href='#' className='hover:text-blue-700 transition'>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='flex items-center gap-5'>
                    <div className='relative'>
                        <input
                            type='text'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search...'
                            className='w-52 pl-4 pr-10 py-2 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300'
                        />
                        <FaSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500' />
                    </div>

                    <button aria-label='Wishlist' className='hover:text-red-500 transition'>
                        <FaHeart />
                    </button>

                    <button aria-label='Cart' className='relative hover:text-blue-700 transition'>
                        <SlBasket />
                        {cartCount > 0 && (
                            <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs min-w-5 h-5 px-1 rounded-full flex items-center justify-center'>
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button aria-label='Profile' className='hover:text-blue-700 transition'>
                        <FaUser />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header