import React from "react";
import { useLoaderData } from "react-router-dom";
import JobBanner from "../jobBanner/JobBanner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTasks,faSackDollar,faLocation,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { addToDb } from "../../utilities/fakeDb";

const DetailsJob = () => {
  const dataArray = useLoaderData();
  const handleApply=id=>{
    addToDb(id);
  }
  const {
    id,
    title,
    company,
    logo,
    description,
    duty_place,
    experience,
    requirements,
    location,
    salary,
    type,
    responsibilities,
    email,
    phone,
    address
  } = dataArray[0];

  return (
    <div>
      <JobBanner text="Job Details"></JobBanner>
      <div className="grid grid-cols-3 gap-4 w-9/12 mx-auto my-10">
        <div className="col-span-2">
          <p>
            <span className="font-bold">Job Description: </span>
            {description}
          </p>
          <br />
          <p>
            <span className="font-bold">Job Responsibility: </span>
            {responsibilities}
          </p>
          <br />
          <p>
            <span className="font-bold">Educational Requirements: </span>
            {requirements}
          </p>
          <p>
            <span className="font-bold">Experiences: </span>
            {experience}
          </p>
        </div>
        <div className="m-4 py-6 box-container">
            <div className="bg-slate-300 px-6 py-8 rounded-xl">
            <h2 className="text-xl font-bold">Job Details</h2>
            <hr />
            <p className="py-2"><FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon><span className="font-bold"> Salary: </span>{salary}</p>
            <p><FontAwesomeIcon icon={faTasks}></FontAwesomeIcon><span className="font-bold"> Job Title: </span>{title}</p>
            <h2 className="pt-6 text-xl font-bold">Contact Information</h2>
            <hr />
            <p className="py-2"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phone:{phone}</p>
            <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email:{email}</p>
            <p className="py-2"><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Address{address}</p>
            </div>
            <button className="mt-4 w-full" onClick={()=>handleApply(id)}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsJob;
