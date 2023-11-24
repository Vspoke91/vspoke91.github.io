// Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

// React Imports
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

export default function Default({ children, className, controlsClassName }) {
  //React Hooks
  const [target, setTarget] = useState(0);
  const [childrenRender, setChildren] = useState([]);
  const holderRef = useRef(null);

  useEffect(() => {
    // Event Handlers
    function targetClickHandler(e) {
      const targetChild = holderRef.current.children[target];
      const newTargetIndex = parseInt(e.target.dataset.index);

      if (targetChild && target !== newTargetIndex) {
        targetChild.removeAttribute("style");
      }
      setTarget(newTargetIndex);
    }

    // Children Render
    const childrenList = [];

    if (children && children.length > 1) {
      children.forEach((child, index) =>
        childrenList.push(
          <li
            key={index}
            data-index={index}
            className="grw-0 shrink-0 scale-90"
            onClick={targetClickHandler}
          >
            {child}
          </li>
        )
      );
    } else if (children) {
      childrenList.push(<li>{children}</li>);
    }
    setChildren(childrenList);
  }, [children, target]);

  useEffect(() => {
    const targetChild = holderRef.current.children[target];

    if (targetChild) {
      targetChild.style.backgroundColor = "lightblue";
      targetChild.style.transform = "scale(1)";
    }
  }, [target]);

  return (
    <div className="relative bg-slate-200">
      <div className="absolute w-full flex justify-between px-2 h-full pointer-events-none">
        <button className="pointer-events-auto h-fit my-auto">
          <FontAwesomeIcon icon={faCaretLeft} className={controlsClassName} />
        </button>
        <button className="pointer-events-auto  h-fit my-auto">
          <FontAwesomeIcon icon={faCaretRight} className={controlsClassName} />
        </button>
      </div>
      <ul className={className} ref={holderRef}>
        {childrenRender}
      </ul>
    </div>
  );
}
Default.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  controlsClassName: PropTypes.string,
};
