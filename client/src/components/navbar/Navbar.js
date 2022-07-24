import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setToggleHamburger }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">
          <h2 className="title">Infinite</h2>
        </Link>
      </div>

      <ul className="navbar-links">
        <Link to="/women">
          <li className="navbar-li">Women</li>
        </Link>
        <Link to="/men">
          <li className="navbar-li">Men</li>
        </Link>
        <Link to="/cart">
          <li className="navbar-li">Cart(0)</li>
        </Link>
        <Link to="/about">
          <li className="navbar-li">About us</li>
        </Link>
        <Link to="/contact">
          <li className="navbar-li">Contact</li>
        </Link>
      </ul>
      <div className="navbar-hamburger">
        <i
          className="fa-solid fa-bars"
          onClick={() => setToggleHamburger((prevState) => !prevState)}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
