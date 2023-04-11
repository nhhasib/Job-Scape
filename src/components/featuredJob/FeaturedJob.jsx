import React from 'react';
import "./FeaturedJob.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationArrow,faSackDollar} from '@fortawesome/free-solid-svg-icons';

const FeaturedJob = ({data}) => {
const {id,title,company,logo,location,duty_place,type,salary}=data;
    return (
        <div className='job-container w-full p-6 '>
            <img className='py-2' src={logo} alt="" />
            <h2 className='text-xl font-bold py-2'>{title}</h2>
            <p>{company}</p>
            <div className='flex gap-4 py-4 btn'>
            <button>{duty_place}</button>
            <button>{type}</button>
            </div>
            <div className='flex gap-6 py-2'>
                <p><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> {location}</p>
                <p><FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> {salary}</p>
            </div>
            <button className='my-4'>View Details</button>
        </div>
    );
};

export default FeaturedJob;