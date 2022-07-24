import "./Header.css";
import Cover from "../cover/Cover";
import Navbar from "../navbar/Navbar";

const Header = ({ toggleHamburger, setToggleHamburger }) => {
  const hamburgerClicked = "fa-solid fa-bars";
  const handleClick = (e) => {
    if (e.target.className === hamburgerClicked && !toggleHamburger) {
      setToggleHamburger(true);
    } else {
      setToggleHamburger(false);
    }
  };

  return (
    <div className="header" id="home" onClick={handleClick}>
      <div className="cover-video">
        <Cover />
      </div>
      <div className="navbar">
        <Navbar setToggleHamburger={setToggleHamburger} onClick={handleClick} />
      </div>
      <div className="header-container">
        <div className="header-title">
          <h1>Go Hard Or Go Home.</h1>
          <h5>are you sure you want to go hard?</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
