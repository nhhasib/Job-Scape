import React from "react";

const Banner = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex w-9/12 mx-auto justify-between pt-10">
        <div className="w-1/2 my-auto">
          <h1 className="font-bold my-6">
            One Step Closer <br /> To Your <br />{" "}
            <span className="text-orange-500">Dream Job</span>
          </h1>
          <p className="my-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button>Get Started</button>
        </div>
        <div className="w-1/2">
          <img src="/src/image/person.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
