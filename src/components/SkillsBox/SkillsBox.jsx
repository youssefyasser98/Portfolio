import React from "react";
import "./style.css";
const SkillsBox = () => {
  const Skills = {
    WebSkills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Context-api",
      "React-Router-Dom",
      "Node.js",
      "Express",
      "Styled-Components",
      "Spring",
      "Bootstrap",
      "Firebase",
      "GIT and GitHub",
    ],
    CompetetiveSkills: ["C++","Java","JavaScript","C#","Python", "Data Structures", "Algorithms"],
    Extras: ["Selenium","Cucumber","Postman","Automation", "Blender", "VScode", "Vim", "Intelliji","Eclipse","Linux"],
  };

  return (
    <>
      <div className="skills-wrap">
        <div className="skills-colomn-wrap">
          <h3>As Web-Developer</h3>
          <ul>
            {Skills.WebSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>As Software Engineer</h3>
          <ul>
            {Skills.CompetetiveSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>Software Test Engineer</h3>
          <ul>
            {Skills.Extras.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsBox;
