import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar__main">
      <h2>REACTJS</h2>
      <ul className="navbar__main_list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
