import "./footer.css";
import linkedinIcon from "../../media/socials/linkedin.png";
import instagramIcon from "../../media/socials/instagram.png";
import twitterIcon from "../../media/socials/twitter.png";
import { Link } from "react-router-dom";

const Footer = ({ click }) => {
  return (
    <div className="footer" id="footer" onClick={click}>
      <div className="custom-shape-divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer-title">Infinite Shop</div>
      <div className="footer-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis
        placeat atque delectus cumque cum commodi odit velit fugit error!
      </div>
      <div className="footer-policy">
        <Link to="/terms">
          <p>Terms of Use</p>
        </Link>
        <Link to="/policy">
          <p className="add-dot">Privacy Policy</p>
        </Link>
      </div>
      <div className="footer-socials">
        <div className="social-wrap">
          <a
            href="https://www.linkedin.com/in/yarden-yosef-b019b2210/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </div>
        <div className="social-wrap">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="instagram" />
          </a>
        </div>
        <div className="social-wrap">
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright ©2022 Yarden Yosef</p>
      </div>
    </div>
  );
};

export default Footer;
