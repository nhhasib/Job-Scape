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
    for(const id in storedData){
        const jobApp=loadData.find(job=>job.id===parseInt(id));
        savedJobs.push(jobApp);
    }

    return (
        <div>
            <JobBanner text="Applied Jobs"></JobBanner>
            <div className='w-9/12 mx-auto flex gap-6 justify-end mt-10'>
                <button>Remote</button>
                <button>On-site</button>
            </div>
            {
                savedJobs.map(job=><Appliedjob job={job} key={job.id}></Appliedjob>)
            }
        </div>
    );
};

export default AppliedJobs;