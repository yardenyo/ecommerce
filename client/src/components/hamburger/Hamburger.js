import "./Hamburger.css";

const Hamburger = ({ show }) => {
  return (
    <div className={show ? "hamburger show" : "hamburger"}>
      <div className="hamburger-links">
        <a href="/">Home</a>
        <a href="/">Women</a>
        <a href="/">Men</a>
        <a href="/">Cart(0)</a>
        <a href="/">About us</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
};

export default Hamburger;
