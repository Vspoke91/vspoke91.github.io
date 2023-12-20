// Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJava, faGitAlt } from "@fortawesome/free-brands-svg-icons";

//React Imports
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

//Components Imports
import Display from "./ProjectHubDisplay";

export default function Default({ hideIntroFunc }) {
  const holderRef = useRef(null);

  const [languageSelected, setLanguageSelected] = useState(null);

  useEffect(() => {
    if (languageSelected) {
      hideIntroFunc(true);
    } else {
      hideIntroFunc(false);
    }
  }, [languageSelected, hideIntroFunc]);

  const languageStyles = {
    li: "flex h-[60px] w-[60px] group hover:scale-110 transition-all relative",
    icon: "h-full w-full group-hover:brightness-100 brightness-75",
    iconName:
      "text-lg font-bold whitespace-nowrap font-mono absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-full hidden group-hover:block",
  };

  return (
    <div ref={holderRef} className="group/hub my-auto flex grow gap-10">
      <ul className="grid grid-cols-[repeat(2,30px)] gap-y-[60px]">
        {/* Git */}
        <li
          tabIndex="0"
          role="button"
          className={`${languageStyles.li} row-[1]`}
          onClick={() =>
            setLanguageSelected((prev) => (prev === "git" ? null : "git"))
          }
        >
          <FontAwesomeIcon
            icon={faGitAlt}
            className={`${languageStyles.icon}`}
          />
          <span className={`${languageStyles.iconName}`}>Git</span>
        </li>
        {/* Web */}
        <li
          tabIndex="0"
          role="button"
          className={`${languageStyles.li} col-[2] row-[2]`}
          onClick={() =>
            setLanguageSelected((prev) => (prev === "web" ? null : "web"))
          }
        >
          <img
            src="/images/icons/htmlcssjavascript.svg"
            alt=""
            className={languageStyles.icon}
          />
          <span className={`${languageStyles.iconName}`}>Web</span>
        </li>
        {/* Python */}
        <li
          tabIndex="0"
          role="button"
          className={`${languageStyles.li} col-[-1] row-[3]`}
          onClick={() =>
            setLanguageSelected((prev) => (prev === "python" ? null : "python"))
          }
        >
          <FontAwesomeIcon
            icon={faPython}
            className={`${languageStyles.icon}`}
          />
          <span className={`${languageStyles.iconName}`}>Python</span>
        </li>
        {/* Java */}
        <li
          tabIndex="0"
          role="button"
          className={`${languageStyles.li} col-[2] row-[4]`}
          onClick={() =>
            setLanguageSelected((prev) => (prev === "java" ? null : "java"))
          }
        >
          <FontAwesomeIcon icon={faJava} className={`${languageStyles.icon}`} />
          <span className={`${languageStyles.iconName}`}>Java</span>
        </li>
        {/* C# */}
        <li
          tabIndex="0"
          role="button"
          className={`${languageStyles.li} row-[5]`}
          onClick={() =>
            setLanguageSelected((prev) => (prev === "csharp" ? null : "csharp"))
          }
        >
          <img
            className={`${languageStyles.icon}`}
            src="/images/icons/csharp.svg"
            alt="csharp logo"
          />
          <span className={`${languageStyles.iconName}`}>C-Sharp</span>
        </li>
      </ul>
      <Display currentLanguage={languageSelected} />
    </div>
  );
}
Default.propTypes = {
  hideIntroFunc: PropTypes.func.isRequired,
};
