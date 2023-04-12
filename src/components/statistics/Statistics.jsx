import React from 'react';
import JobBanner from '../jobBanner/JobBanner';
import Chart from './chart/chart';

const Statistics = () => {
    return (
        <div>
            <JobBanner text="Statistics of 8 Assignments"></JobBanner>
            <div className='my-10 py-10 mx-auto w-9/12'>
            <Chart></Chart>
            </div>
        </div>
    );
};

export default Statistics;