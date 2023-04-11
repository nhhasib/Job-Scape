import React from 'react';
import Nav from '../navigation/Nav';

const Header = () => {
    return (
        <div className=' bg-slate-300 p-0 m-0'>
            <div className='flex justify-between w-9/12 mx-auto'>
            <h2 className='text-4xl p-2'>JobScape</h2>
            <Nav></Nav>
            <button>Start Applying</button>
        </div>
        </div>
    );
};

export default Header;