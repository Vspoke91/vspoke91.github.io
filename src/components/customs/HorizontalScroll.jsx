// Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

// React Imports
import PropTypes from "prop-types";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

export default function Default({ children, className, controlsClassName }) {
  //React Hooks
  const [childrenRender, setChildrenRender] = useState(null);
  const holderRef = useRef(null);
  const [hideControls, setHideControls] = useState(false);

  useEffect(() => {
    const childrenArray = [];

    if (children && children.length) {
      if (children.length > 1) {
        children.map((element, index) =>
          childrenArray.push(
            <li
              key={index}
              className="shrink-0 transition-all grid grid-cols-1 grid-rows-1 items-center justify-items-center group
              scale-90 hover:scale-100 hover:cursor-pointer"
            >
              {element}
              <div className="group-hover:bg-[#0003] row-[1] col-[1] h-full w-full" />
              <FontAwesomeIcon
                icon={faEye}
                className="text-5xl group-hover:block row-[1] col-[1] hidden"
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
    }
  }, [children]);

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
