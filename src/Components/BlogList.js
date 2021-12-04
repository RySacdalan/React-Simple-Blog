const BlogList = ({ sample }) => {
  return (
    <div>
      {sample.map((blog) => {
        return (
          <div>
            <h2>Title: {blog.title}</h2>
            <p>Content: {blog.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
