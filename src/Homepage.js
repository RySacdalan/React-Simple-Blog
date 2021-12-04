import BlogList from "./Components/BlogList";

const Homepage = ({ blogs }) => {
  return (
    <div>
      <h1>Homepage</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Homepage;
