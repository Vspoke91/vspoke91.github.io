// Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGraduationCap,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWindows,
  faFreeCodeCamp,
  faHtml5,
  faSquareJs,
  faCss3Alt,
  faPython,
  faJava,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

//Components Imports
import HorizontalScroll from "./HomeHorizontalScroll.jsx";

//Data Imports
import KnowledgeDatabase from "../../../data/KnowledgeDatabase.js";

//React Imports
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import PropTypes from "prop-types";

export default function Default() {
  const introductionRef = useRef(null);
  const SVGRef = useRef(null);

  function setExpandHub(value) {
    introductionRef.current.setHide(value);
    SVGRef.current.setReduce(value);
  }

  return (
    <div
      id="home"
      className="grid max-w-[1500px] grid-cols-[2fr_1fr] grid-rows-1 place-self-center self-center"
    >
      <Introduction ref={introductionRef} />
      <div className="flex">
        <SVG ref={SVGRef} />
        <Knowledge setExpandHub={setExpandHub} />
      </div>
    </div>
  );
}

//Introduction//

const Introduction = forwardRef((props, ref) => {
  //React Hooks
  const holderRef = useState(false);

  //Ref object
  useImperativeHandle(ref, () => ({
    setHide: (value) => {
      if (value) holderRef.current.classList.add("");
      else holderRef.current.classList.remove("hidden");
    },
  }));

  return (
    <div className="ml-[2vw] transition-all" ref={holderRef}>
      {/* -Tittle- */}
      <h2 className="block cursor-default">
        <span className="block font-libre text-4xl font-light">
          Hello, My name is
        </span>
        <strong className="font-libre text-5xl">Victor Romero</strong>
      </h2>
      <p className="mt-3 w-[50ch] cursor-default">
        I am a dedicated Web and Software Developer passionate about impactful
        software. Proficient in<strong> React.js </strong>and
        <strong> Java</strong>, experienced in<strong> Git </strong>and
        <strong> Github </strong>
        for collaborative development.
      </p>
      {/* -Media- */}
      <ul className="mt-3 flex w-full gap-4">
        <li>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} className="h-[35px] w-auto" />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faGithub} className="h-[35px] w-auto" />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faEnvelope} className="h-[35px] w-auto" />
          </a>
        </li>
      </ul>
      {/* -Achievements- */}
      <h3 className="mx-auto mt-8 w-fit cursor-default font-mono text-xl font-black">
        Achievements
      </h3>
      <ul className="mt-3 flex justify-center gap-4">
        <li>
          <a href="">
            <FontAwesomeIcon icon={faWindows} className="h-[35px]" />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faFreeCodeCamp} className="h-[35px]" />
          </a>
        </li>
      </ul>
    </div>
  );
});
Introduction.displayName = "Introduction";

//Decoration SVG//
const SVG = forwardRef((props, ref) => {
  const [reduce, setReduce] = useState(false);
  useImperativeHandle(ref, () => ({
    setReduce: (value) => {
      setReduce(value);
    },
  }));

  return (
    <div
      className="pointer-events-none h-inherit flex-1 select-none"
      style={{ flexGrow: reduce ? 0.5 : "" }}
    >
      <img
        className="h-[auto] w-[30vw]"
        src="/images/decor/spaceman.svg"
        alt="svg of spaceman"
      />
    </div>
  );
});
SVG.displayName = "SVG";

//Knowledge Hub
function Knowledge({ setExpandHub }) {
  const [expanded, setExpanded] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(null);

  function switchExpand(language) {
    if (languageSelected !== language) {
      setExpanded(true);
      setExpandHub(true);
    } else {
      setExpanded((prev) => {
        setExpandHub(!prev);
        return !prev;
      });
    }
    setLanguageSelected(language);
  }

  return (
    <div
      className="group/hub relative z-0 flex h-inherit"
      aria-expanded={expanded}
    >
      {/* <h2 className="absolute -top-[10vh] text-2xl">
        <span className="cursor-default font-libre font-bold">
          Knowledge Hub
        </span>
        <FontAwesomeIcon icon={faGraduationCap} className="ml-1" />
      </h2> */}
      <ul className="flex w-fit flex-col gap-[3vw]">
        <li className="group flex w-fit -translate-x-6 items-center text-5xl">
          <button
            className="group peer flex items-center"
            onClick={() => {
              switchExpand("git");
            }}
          >
            <FontAwesomeIcon icon={faGitAlt} />
            <span className="ml-1 hidden text-xl group-hover:block group-focus-visible:block group-aria-expanded/hub:group-hover:hidden group-aria-expanded/hub:group-focus-visible:hidden">
              Git
            </span>
          </button>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="absolute -left-7 hidden text-4xl group-hover:block peer-focus-visible:block"
          />
        </li>
        <li className="group flex w-fit items-center text-3xl">
          <button
            className="group peer flex items-center"
            onClick={() => {
              switchExpand("web");
            }}
          >
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faSquareJs} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <span className="ml-1 hidden text-sm group-hover:block group-focus-visible:block  group-aria-expanded/hub:group-hover:hidden group-aria-expanded/hub:group-focus-visible:hidden">
                HTML / JavaScript / CSS
              </span>
            </div>
          </button>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="absolute -left-7 hidden text-4xl group-hover:block peer-focus-visible:block"
          />
        </li>
        <li className="group flex w-fit translate-x-6 items-center text-5xl">
          <button
            className="group peer flex items-center"
            onClick={() => {
              switchExpand("python");
            }}
          >
            <FontAwesomeIcon icon={faPython} />
            <span className="ml-1 hidden h-full text-xl group-hover:block group-focus-visible:block  group-aria-expanded/hub:group-hover:hidden group-aria-expanded/hub:group-focus-visible:hidden">
              Python
            </span>
          </button>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="absolute -left-7 hidden text-4xl group-hover:block peer-focus-visible:block"
          />
        </li>
        <li className="group flex w-fit items-center text-5xl">
          <button
            className="group peer flex items-center"
            onClick={() => {
              switchExpand("java");
            }}
          >
            <FontAwesomeIcon icon={faJava} />
            <span className="ml-1 hidden text-xl group-hover:block group-focus-visible:block  group-aria-expanded/hub:group-hover:hidden group-aria-expanded/hub:group-focus-visible:hidden">
              Java
            </span>
          </button>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="absolute -left-7 hidden text-4xl group-hover:block peer-focus-visible:block"
          />
        </li>
        <li className="group flex w-fit -translate-x-6 items-center">
          <button
            className="group peer flex items-center"
            onClick={() => {
              switchExpand("csharp");
            }}
          >
            <img
              className="h-[45px]"
              src="/images/icons/csharp.svg"
              alt="csharp logo"
            />
            <span className="ml-1 hidden text-xl group-hover:block group-focus-visible:block  group-aria-expanded/hub:group-hover:hidden group-aria-expanded/hub:group-focus-visible:hidden">
              C-Sharp
            </span>
          </button>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="absolute -left-7 hidden text-4xl group-hover:block peer-focus-visible:block"
          />
        </li>
      </ul>
      <Knowledge_display
        currentLanguage={languageSelected}
        hidden={!expanded}
      />
    </div>
  );
}
Knowledge.propTypes = {
  setExpandHub: PropTypes.func.isRequired,
};

function Knowledge_display({ currentLanguage, hidden }) {
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
Knowledge_display.propTypes = {
  currentLanguage: PropTypes.string,
  hidden: PropTypes.bool.isRequired,
};
