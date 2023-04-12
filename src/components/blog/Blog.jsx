import React from "react";
import JobBanner from "../jobBanner/JobBanner";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <JobBanner text="Blogs"></JobBanner>
      <div className="w-9/12 mx-auto my-10">
        <div className="blog p-6">
          <h1 className="font-bold text-2xl">
            When should you use context API?
          </h1>
          <p>
            <span className="font-bold">Ans. </span>
            Context API provides a way to share values without passing a prop through every level of the
            tree.
            <br />
            The React context works basically in a two-way approach. You wrap all components that share similar data within the context provider as a parent component and access the data in the context via a Consumer or useContext hook.

          </p>
        </div>
        <div className="blog my-10 p-6">
          <h1 className="font-bold text-2xl">What is a custom hook?</h1>
          <p>
            <span className="font-bold">Ans. </span>
            A custom hook is JavaScript function that starts with "use" and can be used to call other hook. Custom hooks are created by combining built-in hooks and JavaScript functions. 
          </p>
        </div>
        <div className="blog p-6">
          <h1 className="font-bold text-2xl">What is useRef?</h1>
          <p>
            <span className="font-bold">Ans. </span>
            useRef is a built-in hook in React that provides a way to store mutable values or references to DOM elements in a way that persists across renders of a component.
          </p>
        </div>
        <div className="blog my-10 p-6">
          <h1 className="font-bold text-2xl">What is useMemo?</h1>
          <p>
            <span className="font-bold">Ans. </span>
            React Memo is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings.This improves performance because it memoizes the result and skips rendering to reuse the last rendered result.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
