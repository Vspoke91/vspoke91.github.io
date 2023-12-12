//Components Imports
import HorizontalScroll from "./DisplayHorizontalScroll.jsx";

//React Imports
import PropTypes from "prop-types";

//Data Imports
import KnowledgeDatabase from "@Data/KnowledgeDatabase.js";

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
