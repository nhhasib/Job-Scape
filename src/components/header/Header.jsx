import React from 'react';
import Nav from '../navigation/Nav';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='bg-slate-100 px-0 m-0 py-6'>
            <div className='md:flex justify-between w-9/12 mx-auto'>
            <h2 className='text-4xl p-2'>JobScape</h2>
            <Nav></Nav>
            <button>Start Applying</button>
            </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;