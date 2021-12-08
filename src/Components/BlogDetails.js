import { useHistory, useParams } from "react-router";
import useFetch from "../useFetch";
import "./BlogDetails.css";

const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: blogs,
    loadPending,
    errorExist,
  } = useFetch("http://localhost:8000/Blogs/" + id);

  const deleteHandler = () => {
    fetch("http://localhost:8000/Blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
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
      {blogs && (
        <article>
          <h1>{blogs.title}</h1>
          <h3>Written by: {blogs.author}</h3>
          <p>{blogs.body}</p>
          <button onClick={deleteHandler}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
