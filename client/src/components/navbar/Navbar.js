import "./Navbar.css";

const Navbar = ({ setToggleHamburger }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h2 className="title">Infinite</h2>
      </div>

      <ul className="navbar-links">
        <li className="navbar-li">Women</li>
        <li className="navbar-li">Men</li>
        <li className="navbar-li">Cart(0)</li>
        <li className="navbar-li">About us</li>
        <li className="navbar-li">Contact</li>
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
