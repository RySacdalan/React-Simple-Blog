import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogBody, setBlogBody] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const authorChangeHandler = (e) => {
    setBlogAuthor(e.target.value);
  };
  const bodyChangeHandler = (e) => {
    setBlogBody(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const newBlog = { title, blogAuthor, blogBody };

    fetch("http://localhost:8000/Blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBlog),
    });
  };

  return (
    <div className="blog-form-container">
      <h1>Create new posts</h1>
      <form className="blog-post-form" onSubmit={submitFormHandler}>
        <label>Title: </label>
        <input
          type="text"
          onChange={titleChangeHandler}
          value={title}
          required
        />
        <label>Author: </label>
        <input
          type="text"
          onChange={authorChangeHandler}
          value={blogAuthor}
          required
        />
        <label>Body: </label>
        <textarea
          onChange={bodyChangeHandler}
          value={blogBody}
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Create;
