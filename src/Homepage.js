import React, { useState, useEffect } from "react";
import BlogList from "./Components/BlogList";

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loadPending, setLoadPending] = useState(true);
  const [errorExist, setErrorExist] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/Blogs")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Oops! Could not fetch the data :( ");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setBlogs(data);
          setLoadPending(false);
        })
        .catch((err) => {
          setLoadPending(false);
          setErrorExist(err.message);
          console.log(err.message);
        });
    }, 0.5);
  }, []);

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
