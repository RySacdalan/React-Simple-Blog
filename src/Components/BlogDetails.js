import { useParams } from "react-router";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blogs,
    loadPending,
    errorExist,
  } = useFetch("http://localhost:8000/Blogs/" + id);

  return (
    <div>
      {loadPending && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {blogs && (
        <article>
          <h1>{blogs.title}</h1>
          <h3>Author: {blogs.author}</h3>
          <p>{blogs.body}</p>
          <button>Delete</button>
        </article>
      )}
      {errorExist && (
        <div>
          <h2>{errorExist}</h2>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
