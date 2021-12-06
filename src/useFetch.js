import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loadPending, setLoadPending] = useState(true);
  const [errorExist, setErrorExist] = useState(null);

  useEffect(() => {
    const abortLink = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortLink.signal })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Oops! Could not fetch the data :( ");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setData(data);
          setLoadPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setLoadPending(false);
            setErrorExist(err.message);
          }
        });
    }, 0.5);

    return () => abortLink.abort();
  }, [url]);

  return { data, loadPending, errorExist };
};

export default useFetch;
