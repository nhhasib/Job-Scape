import React from "react";
import { useLoaderData } from "react-router-dom";
import JobBanner from "../jobBanner/JobBanner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar,faSackDollar,faLocation,faVoicemail,faPhone} from '@fortawesome/free-solid-svg-icons';
import "./DetailsJob.css"

const DetailsJob = () => {
  const dataArray = useLoaderData();
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
      <div className="grid grid-cols-3 w-9/12 mx-auto mt-6">
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
        <div className="m-4 box-container">
            <div className="bg-slate-300 p-6 rounded-xl">
            <h2>Job Details</h2>
            <hr />
            <p><FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> <span className="font-bold">Salary</span>{salary}</p>
            <p><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon><span className="font-bold">Job Title: </span>{title}</p>
            <h2>Contact Information</h2>
            <hr />
            <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phone:{phone}</p>
            <p><FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon>Email:{email}</p>
            <p><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>Address{address}</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsJob;
