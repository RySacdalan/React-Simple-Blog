import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };
  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const newBlog = { title, author, body };

    fetch("http://localhost:8000/Blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      console.log("New blog added!");
      history.push("/");
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
          value={author}
          required
        />
        <label>Body: </label>
        <textarea onChange={bodyChangeHandler} value={body} required></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Create;
