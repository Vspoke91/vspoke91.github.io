// Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

// React Imports
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

export default function Default({ children, className, controlsClassName }) {
  //React Hooks
  const [target, setTarget] = useState(null);
  const [childrenRender, setChildrenRender] = useState(null);
  const holderRef = useRef(null);

  useEffect(() => {
    const targetChild = holderRef.current.children[target];
    if (targetChild) {
      targetChild.style.transform = "scale(1)";
    }
  }, [target]);

  useEffect(() => {
    const childrenArray = [];

    if (children && children.length) {
      if (children.length > 1) {
        children.map((element, index) =>
          childrenArray.push(
            <li
              key={index}
              data-index={index}
              className="grw-0 shrink-0 scale-90 transition-all cursor-pointe select-none"
              onClick={(e) => targetClickHandler(e)}
            >
              {element}
              <FontAwesomeIcon icon={faEye} className="hidden" />
            </li>
          )
        );
      } else {
        childrenArray.push(
          <li className="grw-0 shrink-0 scale-90" key={"zero"}>
            {children}
          </li>
        );
      }
      setChildrenRender(childrenArray);
      if (!target) setTarget(0);
    }

    function targetClickHandler(e) {
      const targetChild = holderRef.current.children[target];
      const newTargetIndex = parseInt(e.target.dataset.index);

      if (targetChild && target !== newTargetIndex) {
        targetChild.removeAttribute("style");
      }
      setTarget(newTargetIndex);
    }
  }, [target, children]);

  //scroll functions

  const [isDragging, setIsDragging] = useState(false);
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });

  const dragMouseUpHandler = (e) => {
    holderRef.current.classList.remove("cursor-grab");
    setIsDragging(false);
  };
  const dragMouseMoveHandler = (e) => {
    if (!isDragging) return;
    holderRef.current.scrollLeft += prevPos.x - e.clientX;
    holderRef.current.scrollTop += prevPos.y - e.clientY;
    setPrevPos({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const dragMouseDownHandler = (e) => {
    holderRef.current.classList.add("cursor-grab");
    setIsDragging(true);
    setPrevPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className="relative">
      <div className="absolute w-full flex justify-between px-2 h-full pointer-events-none">
        <button className="pointer-events-auto h-fit my-auto">
          <FontAwesomeIcon icon={faCaretLeft} className={controlsClassName} />
        </button>
        <button className="pointer-events-auto  h-fit my-auto">
          <FontAwesomeIcon icon={faCaretRight} className={controlsClassName} />
        </button>
      </div>
      <ul
        className={className}
        ref={holderRef}
        onMouseDown={(e) => dragMouseDownHandler(e)}
        onMouseMove={(e) => dragMouseMoveHandler(e)}
        onMouseUp={(e) => dragMouseUpHandler(e)}
      >
        {childrenRender}
      </ul>
    </div>
  );
}
Default.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  controlsClassName: PropTypes.string,
};
