import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo2.png'

const NavBar = () => {
    return (
        <div className='flex justify-between py-3 container items-center mx-auto'>
            <div className="w-40">
                <img className='' src={logo} alt='' />
            </div>
            <div>
                <nav>
                    <ul className='flex items-center'>
                        <li className='mr-3 text-lg font-semibold'><NavLink to='/login'>Login</NavLink></li>
                        <li className='mr-3 text-lg bg-red-600 text-white py-2 px-6 rounded-full'><NavLink to='/signup'>Sign up</NavLink></li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default NavBar;