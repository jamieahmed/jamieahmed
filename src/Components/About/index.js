import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about-page" id="about">
      {/* left side of about page*/}
      <div className="about-left">
        <h3 className="about-me-title">About Me </h3>
        <img src="../Images/jamie2.jpg" alt="n" className="about-image" />
      </div>
      {/* right side of about page */}
      <div className="about-right">
        {/* quote start here */}
        <blockquote className="jamie-blockquote">
          Love yourself first and everything else falls into line. You really
          have to love yourself to get anything done in this world. Don’t be
          distracted by criticism. Remember — the only taste of success some
          people get is to take a bite out of you. Don’t be distracted by
          criticism. Remember — the only taste of success some people get is to
          take a bite out of you.
          <span>" Jamie Ahmed "</span>
        </blockquote>{" "}
        {/* quote end here */}
        <div className="about-me-description">
          <p>
            Deserunt elit non eiusmod veniam adipisicing consectetur occaecat
            fugiat amet Lorem officia mollit commodo in. Commodo amet Lorem
            laborum non ullamco proident eiusmod elit proident aliqua. Voluptate
            esse excepteur
          </p>
          <p>
            {" "}
            Deserunt elit non eiusmod veniam adipisicing consectetur occaecat
            fugiat amet Lorem officia mollit commodo in. Commodo amet Lorem
          </p>
          <p>
            {" "}
            Deserunt elit non eiusmod veniam adipisicing consectetur occaecat
            fugiat amet Lorem officia mollit commodo in. Commodo amet Lorem
          </p>
          <p>
            {" "}
            what are you waiting for your next project, let's work on it and
            bring your ideas to life. I am just a click away.
            <a href="#ContactMe"> Contact Me</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
