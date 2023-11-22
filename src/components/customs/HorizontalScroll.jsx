// Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

// React Imports
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

export default function Default({
  children,
  className,
  childClassName,
  controlsClassName,
}) {
  //React Hooks
  const [target, setTarget] = useState(null);
  const [childrenRender, setChildren] = useState([]);
  const holderRef = useRef(null);

  useEffect(() => {
    function targetClickHandler(e) {
      console.log(target);
      if (target !== null) {
        holderRef.current.children[target].style.backgroundColor = "";
      }
      setTarget(parseInt(e.target.dataset.index));
      console.log(parseInt(e.target.dataset.index) + " - target");
    }

    const childrenList = [];

    if (children && children.length > 1) {
      children.forEach((child, index) =>
        childrenList.push(
          <li
            key={index}
            data-index={index}
            className={childClassName}
            onClick={targetClickHandler}
          >
            {child}
          </li>
        )
      );
    } else if (children) {
      childrenList.push(<li>{children}</li>);
    }

    if (childrenList.length) {
      setTarget(0);
    }

    setChildren(childrenList);
  }, [childClassName, children, target]);

  useEffect(() => {
    if (target !== null) {
      holderRef.current.children[target].style.backgroundColor = "lightblue";
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
  childClassName: PropTypes.string,
  controlsClassName: PropTypes.string,
};
