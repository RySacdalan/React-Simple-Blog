import useFetch from "./useFetch";
import BlogList from "./Components/BlogList";

const Homepage = () => {
  const {
    data: blogs,
    loadPending,
    errorExist,
  } = useFetch("http://localhost:8000/Blogs");

  return (
    <div className="homepage_container">
      <h1>Homepage</h1>

      {BlogList && <BlogList blogs={blogs} />}

      {loadPending && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {errorExist && (
        <div>
          <h2>{errorExist}</h2>
        </div>
      )}
    </div>
  );
};

export default Homepage;
