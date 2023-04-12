import React from 'react';
import { Outlet } from 'react-router-dom';

const JobBanner = ({text}) => {
    return (
        <div className='text-center text-2xl font-bold pt-6 pb-10 bg-slate-100'>
            <h2>{text}</h2>
        </div>
    );
};

export default JobBanner;