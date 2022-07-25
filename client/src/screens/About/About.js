import profilePic from "../../media/profilePic.png";
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
    </div>
  );
}

export default About;
