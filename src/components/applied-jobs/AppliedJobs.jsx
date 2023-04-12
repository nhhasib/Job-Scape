import React from 'react';
import { getShoppingCart } from '../../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';
import Appliedjob from '../appliedJob/Appliedjob';
import JobBanner from '../jobBanner/JobBanner';

const AppliedJobs = () => {
    const loadData=useLoaderData()
    const storedData=getShoppingCart();
    // console.log(storedData);
    // console.log(loadData)
    const savedJobs=[];
    // console.log(savedJobs)
    for(const id in storedData){
        const jobApp=loadData.find(job=>job.id===parseInt(id));
        savedJobs.push(jobApp);
    }

    return (
        <div>
            <JobBanner text="Applied Jobs"></JobBanner>
            {
                savedJobs.map(job=><Appliedjob job={job} key={job.id}></Appliedjob>)
            }
        </div>
    );
};

export default AppliedJobs;