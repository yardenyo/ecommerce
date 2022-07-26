import profilePic from "../../media/profilePic.png";
import gitHubBadge from "../../media/badges/github-logo.png";
import nodeJsBadge from "../../media/badges/nodejs.png";
import reactBadge from "../../media/badges/react.png";
import jsBadge from "../../media/badges/js.png";
import bootStrapBadge from "../../media/badges/bootstrap.png";
import html5Badge from "../../media/badges/html-5.png";
import css3Badge from "../../media/badges/css.png";
import gitBadge from "../../media/badges/git.png";
import "./About.css";

function About() {
  return (
    <div className="About">
      <div className="About-title">
        <h1>About Me</h1>
      </div>
      <div className="About-container">
        <div className="About-me-img">
          <img src={profilePic} alt="my profile pic" />
        </div>
        <div className="About-me-box">
          <div className="About-me-header">Yarden Yosef</div>
          <div className="About-me-subHeader">Junior FullStack Developer</div>
          <div className="About-me-text">
            Independent and initiative with "can do" attitude ,excellent
            interpersonal and analytical skills and a problem solver with a
            data-driven and creative approach to challenges. Junior full stack
            developer with a big passion for web development. Creative,
            motivated, self-learning and team player.
          </div>
        </div>
      </div>
      <div className="About-title About-skills">
        <h1>Coding Skills</h1>
      </div>
      <div className="coding-skills-container">
        <div className="coding-skills-badges">
          <div className="badge-wrap">
            <img src={html5Badge} alt="html5 badge" />
            <p className="badge-text">Html5</p>
          </div>
          <div className="badge-wrap">
            <img src={css3Badge} alt="css3 badge" />
            <p className="badge-text">Css3</p>
          </div>
          <div className="badge-wrap">
            <img src={jsBadge} alt="javascript badge" />
            <p className="badge-text">JavaScript</p>
          </div>
          <div className="badge-wrap">
            <img src={reactBadge} alt="React badge" />
            <p className="badge-text">React</p>
          </div>
          <div className="badge-wrap">
            <img src={bootStrapBadge} alt="bootstrap badge" />
            <p className="badge-text">BootStrap</p>
          </div>
          <div className="badge-wrap">
            <img src={nodeJsBadge} alt="nodeJS badge" />
            <p className="badge-text">NodeJS</p>
          </div>
          <div className="badge-wrap">
            <img src={gitHubBadge} alt="github badge" />
            <p className="badge-text">GitHub</p>
          </div>
          <div className="badge-wrap">
            <img src={gitBadge} alt="git badge" />
            <p className="badge-text">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
