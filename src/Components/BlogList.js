import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list-container">
      {blogs.map((blog) => (
        <div className="blog-list-content" key={blog.id}>
          <h2>Title: {blog.title}</h2>
          <h3>Author: {blog.author}</h3>
          <p>
            <Link to={`blog/${blog.id}`}>Read</Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
