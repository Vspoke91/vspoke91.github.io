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
import spaceman from "../assets/spaceman.svg";
import csharp from "../assets/csharp.svg";

//Components Imports
import HorizontalScroll from "./customs/HorizontalScroll.jsx";

//Data Imports
import KnowledgeDatabase from "../data/KnowledgeDatabase.js";

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
      className="flex justify-center min-h-[calc(100vh-60px)] items-center max-w-[1500px] mx-auto"
    >
      <Introduction ref={introductionRef} />
      <SVG ref={SVGRef} />
      <Knowledge setExpandHub={setExpandHub} />
    </div>
  );
}

const Introduction = forwardRef((props, ref) => {
  const [hidden, setHidden] = useState(false);

  useImperativeHandle(ref, () => ({
    setHide: (value) => {
      setHidden(value);
    },
  }));

  return (
    <div className="flex-[2] ml-[5vh] mr-[1vh] " hidden={hidden}>
      <h2 className="cursor-default">
        <span className="block text-3xl font-libre font-light">
          Hello, My name is
        </span>
        <strong className="text-4xl font-libre">Victor Romero</strong>
      </h2>
      <p className="mt-3 w-[90%] cursor-default">
        I&apos;m a software developer, I love coding and I&apos;m always looking
        forward to learn new things.
      </p>
      {/* -media- */}
      <ul className="flex gap-4 w-full mt-3">
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
      {/* -achievements- */}
      <h3 className="text-xl font-mono font-black mx-auto w-fit mt-8 cursor-default">
        Achievements
      </h3>
      <ul className="flex justify-center gap-4 mt-3">
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

const SVG = forwardRef((props, ref) => {
  const [reduce, setReduce] = useState(false);
  useImperativeHandle(ref, () => ({
    setReduce: (value) => {
      setReduce(value);
    },
  }));

  return (
    <div
      className="flex-1 pointer-events-none select-none"
      style={{ flexGrow: reduce ? 0.5 : "" }}
    >
      <img className="h-[auto] w-[30vw]" src={spaceman} alt="svg of spaceman" />
    </div>
  );
});
SVG.displayName = "SVG";

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
      className="relative z-0 flex-1 flex group/hub"
      aria-expanded={expanded}
    >
      <h2 className="text-2xl absolute -top-[10vh]">
        <span className="font-bold font-libre cursor-default">
          Knowledge Hub
        </span>
        <FontAwesomeIcon icon={faGraduationCap} className="ml-1" />
      </h2>
      <ul className="flex flex-col gap-[3vw] w-fit">
        <li className="flex text-5xl items-center -translate-x-6 group w-fit">
          <button
            className="peer group flex items-center"
            onClick={() => {
              switchExpand("git");
            }}
          >
            <FontAwesomeIcon icon={faGitAlt} />
            <span className="text-xl ml-1 hidden group-hover:block group-focus-visible:block group-aria-expanded/hub:group-hover:hidden group-aria-expanded/hub:group-focus-visible:hidden">
              Git
            </span>
          </button>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-4xl absolute -left-7 hidden group-hover:block peer-focus-visible:block"
          />
        </li>
        <li className="flex text-3xl items-center group w-fit">
          <button
            className="peer group flex items-center"
            onClick={() => {
              switchExpand("web");
            }}
          >
            <div className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faSquareJs} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <span className="text-sm ml-1 hidden group-hover:block group-focus-visible:block  group-aria-expanded/hub:group-hover:hidden group-aria-expanded/hub:group-focus-visible:hidden">
                HTML / JavaScript / CSS
              </span>
            </div>
          </button>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-4xl absolute -left-7 hidden group-hover:block peer-focus-visible:block"
          />
        </li>
        <li className="flex text-5xl items-center translate-x-6 group w-fit">
          <button
            className="peer group flex items-center"
            onClick={() => {
              switchExpand("python");
            }}
          >
            <FontAwesomeIcon icon={faPython} />
            <span className="text-xl ml-1 h-full hidden group-hover:block group-focus-visible:block  group-aria-expanded/hub:group-hover:hidden group-aria-expanded/hub:group-focus-visible:hidden">
              Python
            </span>
          </button>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-4xl absolute -left-7 hidden group-hover:block peer-focus-visible:block"
          />
        </li>
        <li className="flex text-5xl items-center group w-fit">
          <button
            className="peer group flex items-center"
            onClick={() => {
              switchExpand("java");
            }}
          >
            <FontAwesomeIcon icon={faJava} />
            <span className="text-xl ml-1 hidden group-hover:block group-focus-visible:block  group-aria-expanded/hub:group-hover:hidden group-aria-expanded/hub:group-focus-visible:hidden">
              Java
            </span>
          </button>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-4xl absolute -left-7 hidden group-hover:block peer-focus-visible:block"
          />
        </li>
        <li className="flex items-center -translate-x-6 group w-fit">
          <button
            className="peer group flex items-center"
            onClick={() => {
              switchExpand("csharp");
            }}
          >
            <img className="h-[45px]" src={csharp} alt="csharp logo" />
            <span className="text-xl ml-1 hidden group-hover:block group-focus-visible:block  group-aria-expanded/hub:group-hover:hidden group-aria-expanded/hub:group-focus-visible:hidden">
              C-Sharp
            </span>
          </button>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-4xl absolute -left-7 hidden group-hover:block peer-focus-visible:block"
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
    <div className=" w-full border-2 border-red-900" hidden={hidden}>
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
        <HorizontalScroll
          className="overflow-x-auto flex bg-black py-2"
          controlsClassName="text-5xl"
        >
          {KnowledgeDatabase[currentLanguage]?.showcase.map(
            (project, index) => (
              <a
                key={currentLanguage + project.name + index}
                className="pointer-events-none"
              >
                <h5 className="text-center font-bold">{project.name}</h5>
                <div className="pointer-events-none">
                  <img
                    className="w-[200px] pointer-events-none"
                    src={project.image}
                    alt={`Logo for ${project.name}`}
                  />
                </div>
              </a>
            )
          )}
        </HorizontalScroll>
      </div>
    </div>
  );
}
Knowledge_display.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
};
