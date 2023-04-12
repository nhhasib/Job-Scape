import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCogs,
  faBolt,
  faHardHat,
} from "@fortawesome/free-solid-svg-icons";
import "./Category.css";

const Category = ({ data }) => {
  const { name, jobs, icons } = data;
  const iconsList = { faCode, faCogs, faBolt, faHardHat };
  return (
    <div className="category p-6">
      <h3 className="text-4xl text-orange-400 font-thin py-2">
        <FontAwesomeIcon icon={iconsList[icons]}></FontAwesomeIcon>
      </h3>
      <h2 className="font-bold py-2">{name}</h2>
      <p>{jobs} Jobs Available </p>
    </div>
  );
};

export default Category;
