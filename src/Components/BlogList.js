import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list-container">
      {blogs.map((blog) => {
        return (
          <div className="blog-list-content" key={blog.id}>
            <h2>Title: {blog.title}</h2>
            <h3>Author: {blog.author}</h3>
            <p>
              {blog.body.slice(0, 170)}...
              <Link to={`blog/${blog.id}`}>Read more</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
