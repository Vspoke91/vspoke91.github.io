// Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faSquareJs,
  faCss3Alt,
  faPython,
  faJava,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

//React Imports
import { useRef, useState } from "react";
import PropTypes from "prop-types";

//Components Imports
import Display from "./ProjectHubDisplay";

export default function Default({ expandHubFunc }) {
  const [expanded, setExpanded] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(null);
  const holderRef = useRef(null);

  function switchExpand(language) {
    if (languageSelected !== language) {
      setExpanded(true);
      expandHubFunc(true);
    } else {
      setExpanded((prev) => {
        expandHubFunc(!prev);
        return !prev;
      });
    }
    setLanguageSelected(language);
  }

  return (
    <div
      ref={holderRef}
      aria-expanded={expanded}
      className="group/hub relative z-0 flex"
    >
      {/* -Icons Buttons- */}
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

      <Display currentLanguage={languageSelected} hidden={!expanded} />
    </div>
  );
}
Default.propTypes = {
  expandHubFunc: PropTypes.func.isRequired,
};
