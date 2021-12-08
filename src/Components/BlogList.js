import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list-container">
      {blogs.map((blog) => (
        <div className="blog-list-content" key={blog.id}>
          <h1>{blog.title}</h1>
          <h3>Author: {blog.author}</h3>
          <p>
            <Link to={`blog/${blog.id}`}>
              <button>Read</button>
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
