import React, { useEffect, useState } from "react";
import Category from "../category/Category";

const Categories = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("/public/categoriesData.json")
      .then((res) => res.json())
      .then((datas) => setDatas(datas));
  }, []);

  return (
    <div className="w-9/12 mx-auto my-10 text-center">
      <h1 className="text-4xl font-bold py-4">Job Category List</h1>
      <p className="pb-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="grid grid-cols-4 my-4 gap-4">
        {
        datas.map((data) => (<Category data={data} key={data.id}></Category>))
        }
      </div>
    </div>
  );
};

export default Categories;
