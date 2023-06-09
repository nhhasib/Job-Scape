import React, { useEffect, useState } from "react";
import FeaturedJob from "../featuredJob/FeaturedJob";

const FeaturedJobs = ({data}) => {

  const datasSlice=data.slice(0,4);

  return (
    <div className="w-9/12 mx-auto py-6">
      <div className="text-center py-4">
      <h1 className="text-4xl font-bold py-4">Featured Jobs</h1>
      <p className="pb-6">
      Explore thousands of job opportunities with all the information you need. Its your future
      </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 justify-between">
        {
            datasSlice.map(data=><FeaturedJob data={data} key={data.id}></FeaturedJob>)
        }
      </div>
      <div className="text-center">
         <button className="my-6">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
