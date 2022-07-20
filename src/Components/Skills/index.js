import React, { useState } from "react";
import SkillModal from "../SkillModal";
import "./style.css";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whichOne, setWhichOne] = useState("");

  const toggleModal = (thing) => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setWhichOne(thing);
    }
  };

  return (
    <div id="skills">
      <h3 className="resume-title">Resume </h3>
      <SkillModal toggle={toggleModal} isOpen={isOpen} whichOne={whichOne} />
      <div className="flex-container">
        <div
          className="flex-item-left"
          onClick={() => {
            toggleModal("education");
          }}
        >
          <h4 className="skill-title">Education</h4>
          <img
            className="skill-logo"
            src="../Images/education-logo.png"
            alt="education-logo"
          />
        </div>
        <div
          className="flex-item-center"
          onClick={() => {
            toggleModal("experiences");
          }}
          thing="experiences"
        >
          <h4 className="skill-title">Experiences </h4>
          <img
            className="skill-logo"
            src="../Images/experience-logo.jpg"
            alt="experience-logo"
          />
        </div>
        <div
          className="flex-item-right"
          onClick={() => {
            toggleModal("skills");
          }}
          thing="skills"
        >
          <h4 className="skill-title">Skills</h4>
          <img
            className="skill-logo"
            src="../Images/skills-logo.png"
            alt="skills-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
