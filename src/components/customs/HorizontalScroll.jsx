// Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

// React Imports
import PropTypes from "prop-types";
import { useEffect, useState, useRef, useMemo } from "react";

export default function Default({ children, className, controlsClassName }) {
  //React Hooks
  const [target, setTarget] = useState(null);
  const [childrenRender, setChildrenRender] = useState(null);
  const holderRef = useRef(null);
  //Style Variables
  const targetStyle = useMemo(
    () => ({
      active: "scale-100 cursor-pointer group",
      default: "scale-90",
    }),
    []
  );

  useEffect(() => {
    const childrenArray = [];

    if (children && children.length) {
      if (children.length > 1) {
        children.map((element, index) =>
          childrenArray.push(
            <li
              key={index}
              data-index={index}
              className={`grw-0 shrink-0 transition-all select-none ${targetStyle.default}`}
              onMouseEnter={(e) => targetClickHandler(e.target, target)}
            >
              {element}
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#0003] pointer-events-none" />
              <FontAwesomeIcon
                icon={faEye}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl 
                group-hover:block hidden transition-all pointer-events-none"
              />
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
    function targetClickHandler(clickedTarget, currentTargetIndex) {
      const currentTarget = holderRef.current.children[currentTargetIndex];

      //Check if the clicked target is the same as the current target
      //and if current target exists
      if (currentTarget && currentTargetIndex !== clickedTarget.dataset.index) {
        currentTarget.classList.remove(...targetStyle.active.split(" "));
        currentTarget.classList.add(...targetStyle.default.split(" "));
      }

      clickedTarget.classList.remove(...targetStyle.default.split(" "));
      clickedTarget.classList.add(...targetStyle.active.split(" "));
      setTarget(clickedTarget.dataset.index);
    }
  }, [target, children, targetStyle]);

  //scroll functions
  const [isDragging, setIsDragging] = useState(false);
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });

  const dragMouseUpHandler = () => {
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
    setIsDragging(true);
    setPrevPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className="grid grid-cols-[auto_1fr_auto] grid-rows-1">
      <button className="h-full bg-black my-auto">
        <FontAwesomeIcon icon={faCaretLeft} className={controlsClassName} />
      </button>
      <ul
        className={`${className} scroll-m-0 no-scrollbar`}
        ref={holderRef}
        onMouseDown={(e) => dragMouseDownHandler(e)}
        onMouseMove={(e) => dragMouseMoveHandler(e)}
        onMouseUp={(e) => dragMouseUpHandler(e)}
      >
        {childrenRender}
      </ul>
      <button className="h-full bg-black">
        <FontAwesomeIcon icon={faCaretRight} className={controlsClassName} />
      </button>
    </div>
  );
}
Default.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  controlsClassName: PropTypes.string,
};
