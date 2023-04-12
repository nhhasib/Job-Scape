import React from "react";
import JobBanner from "../jobBanner/JobBanner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationArrow,faSackDollar} from '@fortawesome/free-solid-svg-icons';
import "./Appliedjob.css";

const Appliedjob = ({ job }) => {
  const { id, title, company, logo, location, duty_place, type, salary } = job;
  return (
    <div className="w-9/12 mx-auto my-6 flex container gap-10 p-6">
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="job-info">
            <div>
                <h2 className="text-xl font-bold py-2">{title}</h2>
                <p className="py-2">{company}</p>
                <div className="btn flex gap-6">
                    <button>{duty_place}</button>
                    <button>{type}</button>
                </div>
                <div className="flex gap-6 py-4">
                    <p>
                    <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>{" "}
                    {location}
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> {salary}
                    </p>
                </div>
            </div>
          <div>
                <button>View Details</button>
          </div>
        </div>
    </div>
  );
};

export default Appliedjob;
