import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/"> Movie App </Link>
        </div>
        <div className="navbar-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/favourites">Favourites</Link>
        </div>
      </nav>
    );
  };
  export default Navbar;
  