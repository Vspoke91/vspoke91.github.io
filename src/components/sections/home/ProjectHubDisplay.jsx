//Components Imports
import HorizontalScroll from "./DisplayHorizontalScroll.jsx";

//React Imports
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

//Data Imports
import infoData from "@Data/KnowledgeDatabase";

//Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faUnity } from "@fortawesome/free-brands-svg-icons";

//Variables
const iconStyles = "hover:scale-125 transition-all h-[70px] w-[70px] inline";
const iconDictionary = {
  reactjs: (
    <img
      title="ReactJS"
      src="/images/icons/reactjs.svg"
      className={`${iconStyles}`}
    />
  ),
  firebase: (
    <img
      title="Firebase"
      src="/images/icons/firebase.svg"
      className={`${iconStyles}`}
    />
  ),
  tailwindcss: (
    <img
      title="TailwindCSS"
      src="/images/icons/tailwindcss.svg"
      className={`${iconStyles}`}
    />
  ),
  javafx: (
    <img
      title="JavaFX"
      src="/images/icons/javafx.svg"
      className={`${iconStyles}`}
    />
  ),
  github: (
    <FontAwesomeIcon title="Github" icon={faGithub} className={iconStyles} />
  ),
  unity: (
    <FontAwesomeIcon title="Unity" icon={faUnity} className={iconStyles} />
  ),
};

const shadowColors = {
  web: "shadow-blue-400",
  git: "shadow-orange-400",
  csharp: "shadow-purple-400",
  java: "shadow-red-400",
  python: "shadow-yellow-400",
};

export default function Default({ currentLanguage, hidden }) {
  return (
    <div className="border-2 border-red-900" hidden={hidden}>
      <h3>{KnowledgeDatabase[currentLanguage]?.name ?? ""}</h3>
      <p>
        <span>Education:</span>
        <span>{KnowledgeDatabase[currentLanguage]?.acquared ?? ""}</span>
      </p>
      <p>
        <span>Experience:</span>
        <span>{KnowledgeDatabase[currentLanguage]?.level ?? ""}</span>
        <span>{` - ${
          KnowledgeDatabase[currentLanguage]?.usedTime ?? ""
        }`}</span>
      </p>
      <div>
        <h4>Project</h4>
        <HorizontalScroll>
          {KnowledgeDatabase[currentLanguage]?.showcase.map(
            (project, index) => {
              return (
                <a
                  key={currentLanguage + project.name + index}
                  href="google.com"
                >
                  <h5 className="text-center font-bold">{project.name}</h5>
                  <img
                    src={project.image}
                    alt={`"${project.name}" Logo`}
                    className="pointer-events-none"
                  />
                </a>
              );
            },
          )}
        </HorizontalScroll>
      </div>
    </div>
  );
}

Default.propTypes = {
  currentLanguage: PropTypes.string,
  hidden: PropTypes.bool.isRequired,
};
