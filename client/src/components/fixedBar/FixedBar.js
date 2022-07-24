import "./FixedBar.css";
import { useState, useEffect } from "react";

const FixedBar = () => {
  const [active, setActive] = useState("#home");
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      console.log(e.target.documentElement.scrollTop);
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    if (scrollTop < 130) {
      setActive("#home");
    } else if (scrollTop > 830 && scrollTop < 1600) {
      setActive("#about");
    } else if (scrollTop > 1600 && scrollTop < 2700) {
      setActive("#women");
    } else if (scrollTop > 2700 && scrollTop < 3400) {
      setActive("#men");
    } else if (scrollTop > 3400) {
      setActive("#contact");
    }
  }, [scrollTop, active]);

  return (
    <div className="fixed-bar">
      <div className="fixed-bar-container">
        <a href="#home" onClick={() => setActive("#home")}>
          <i
            className={
              active === "#home"
                ? "fa-solid fa-house active"
                : "fa-solid fa-house"
            }
          ></i>
        </a>
        <a href="#about" onClick={() => setActive("#about")}>
          <i
            className={
              active === "#about"
                ? "fa-solid fa-address-card active"
                : "fa-solid fa-address-card"
            }
          ></i>
        </a>
        <a href="#women" onClick={() => setActive("#women")}>
          <i
            className={
              active === "#women"
                ? "fa-solid fa-person-dress active"
                : "fa-solid fa-person-dress"
            }
          ></i>
        </a>
        <a href="#men" onClick={() => setActive("#men")}>
          <i
            className={
              active === "#men"
                ? "fa-solid fa-person active"
                : "fa-solid fa-person"
            }
          ></i>
        </a>
        <a href="#contact" onClick={() => setActive("#contact")}>
          <i
            className={
              active === "#contact"
                ? "fa-solid fa-comment-dots active"
                : "fa-solid fa-comment-dots"
            }
          ></i>
        </a>
      </div>
    </div>
  );
};

export default FixedBar;
