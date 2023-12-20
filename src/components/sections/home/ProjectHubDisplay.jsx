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

export default function Default({ currentLanguage }) {
  //local language is used for transition to delay the change of language
  const [localLanguage, setLocalLanguage] = useState(null);
  const lastLanguage = useRef(null);
  const holderRef = useRef(null);

  //animations variables used for transition
  const cutInAnimation = `animate-[cutIn_200ms_ease-out]`;
  const cutOutAnimation = `animate-[cutOut_200ms_ease-out_forwards]`;

  //timeoutRefs is used to stop the timeout when changing language before transition is done and for cleanup
  const timeoutId = useRef(null);
  const timerIdTwo = useRef(null);

  //shadow style
  const shadowStyle = "shadow-lg-around";

  //transition
  useEffect(() => {
    //if current language is null and last language is not null do transition
    if (!lastLanguage.current && currentLanguage) {
      setLocalLanguage(currentLanguage);
    }

    //if current language is not null and last language is not null do transition
    if (currentLanguage && lastLanguage.current) {
      //clear timeouts to stop any ongoing transition
      if (timeoutId) clearTimeout(timeoutId.current);
      if (timerIdTwo) clearTimeout(timerIdTwo.current);

      //remove cutIn transition to be able to trigger again and remove shadow (looks better)
      holderRef.current.classList.remove(cutInAnimation, shadowStyle);
      //start cutOut transition
      holderRef.current.classList.add(cutOutAnimation);

      //set timeout to change language and start cutIn transition
      timeoutId.current = setTimeout(() => {
        setLocalLanguage(currentLanguage);
        holderRef.current.classList.remove(cutOutAnimation);
        //start cutIn transition
        holderRef.current.classList.add(cutInAnimation);
      }, 200);
      //set timeout to add shadow after all transition are done
      timerIdTwo.current = setTimeout(() => {
        holderRef.current.classList.add(shadowStyle);
      }, 400); //400ms is the duration of cutIn and cutOut transition

      //cleanup
      return () => clearTimeout(timeoutId, timerIdTwo);
    }

    //set last language to current language
    lastLanguage.current = currentLanguage;
  }, [currentLanguage, cutInAnimation, cutOutAnimation]);

  return (
    <div
      ref={holderRef}
      className={`${shadowStyle} ${
        shadowColors[currentLanguage]
      } flex w-0 flex-1 flex-col overflow-hidden rounded-lg bg-black transition-all ${
        !currentLanguage && "hidden"
      }`}
    >
      <h3 className="my-3 text-center font-mono text-3xl font-bold">
        {infoData[localLanguage]?.name ?? ""}{" "}
      </h3>
      <p className="self-center text-lg">
        {infoData[localLanguage]?.level ?? ""} with{" "}
        {infoData[localLanguage]?.usedTime ?? ""} of experience
      </p>
      <div>
        <h4 className="pl-4 text-center text-2xl font-bold">Tech Stack</h4>

        <ul className="my-5 flex items-center justify-center gap-3">
          {infoData[localLanguage]?.technologies.map((item, index) => (
            <li key={index} className="contents">
              {iconDictionary[item]}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="pl-4 text-center text-2xl font-bold">
          Check out my projects
        </h4>
        <HorizontalScroll>
          {infoData[localLanguage]?.showcase.map((project, index) => {
            return (
              <button key={localLanguage + project.name + index}>
                <h5 className="text-center font-bold">{project.name}</h5>
                <img
                  src={project.image}
                  alt={`"${project.name}" Logo`}
                  className="pointer-events-none"
                />
              </button>
            );
          })}
        </HorizontalScroll>
      </div>
    </div>
  );
}

Default.propTypes = {
  currentLanguage: PropTypes.string,
};
