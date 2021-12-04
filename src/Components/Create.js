const Create = () => {
  return (
    <div className="blog-form-container">
      <h1>Create new posts</h1>
      <form className="blog-post-form">
        <label>Title: </label>
        <input type="text" />
        <label>Author: </label>
        <input type="text" />
        <label>Body: </label>
        <textarea></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Create;
