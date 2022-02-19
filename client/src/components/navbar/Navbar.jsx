import "./navbar.css";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="home">
        <Link to="/">Home</Link>
      </div>
      <div className="searchBar">
        <Search className="searchIcon" />
        <input placeholder="search employee" />
      </div>
      <div className="userLogin">
        <div className="signup">
          <Link to="/signup">Signup</Link>
        </div>
        <div className="login">
          <Link to="/signin">login</Link>
        </div>
      </div>
    </div>
  );
}
