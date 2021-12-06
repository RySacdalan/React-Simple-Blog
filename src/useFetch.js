import { useState, useEffect } from "react";

const useFetch = () => {
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

  return { blogs, loadPending, errorExist };
};

export default useFetch;
