import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./Components/BlogList";

const Homepage = () => {
  const { blogs, loadPending, errorExist } = useFetch(
    "http://localhost:8000/Blogs"
  );

  return (
    <div>
      <h1>Homepage</h1>
      {loadPending && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {BlogList && <BlogList blogs={blogs} />}
      {errorExist && (
        <div>
          <h2>{errorExist}</h2>
        </div>
      )}
    </div>
  );
};

export default Homepage;
