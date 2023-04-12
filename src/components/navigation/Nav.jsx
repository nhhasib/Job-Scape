import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='flex flex-col md:flex-row gap-6 p-4'>
           <Link to="/">Home</Link>
           <Link to="/statistics">Statistics</Link>
           <Link to="/AppliedJobs">Applied-Jobs</Link>
           <Link to="/blog">Blog</Link>
        </nav>
    );
};

export default Nav;