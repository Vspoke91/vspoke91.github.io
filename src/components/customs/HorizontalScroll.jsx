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
  const controlsRef = useRef({ right: null, left: null });

  useEffect(() => {
    const childrenArray = [];

    if (children && children.length) {
      if (children.length > 1) {
        children.map((element, index) =>
          childrenArray.push(itemElement(index, element))
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

    function itemElement(index, content) {
      let isClicking = false;
      let movedPos = 0;
      let startPos = 0;

      const onClickHandler = () => {
        console.log("clicked");
      };
      const clickingLeaveHandler = () => {
        isClicking = false;
      };
      const clickingUpHandler = () => {
        if (movedPos < 20) onClickHandler();
        isClicking = false;
      };
      const clickingMoveHandler = (e) => {
        if (!isClicking) return;
        movedPos += Math.abs(startPos - e.clientX);
      };
      const clickingDownHandler = (e) => {
        isClicking = true;
        movedPos = 0;
        startPos = e.clientX;
      };

      return (
        <li
          key={index}
          className="shrink-0 transition-all grid grid-cols-1 grid-rows-1 items-center justify-items-center group
        scale-90 hover:scale-100 hover:cursor-pointer"
          onMouseDown={(e) => clickingDownHandler(e)}
          onMouseMove={(e) => clickingMoveHandler(e)}
          onMouseUp={(e) => clickingUpHandler(e)}
          onMouseLeave={(e) => clickingLeaveHandler(e)}
        >
          {content}
          <div className="group-hover:bg-[#0003] row-[1] col-[1] h-full w-full" />
          <FontAwesomeIcon
            icon={faEye}
            className="text-5xl group-hover:block row-[1] col-[1] hidden"
          />
        </li>
      );
    }
  }, [children]);

  //scroll functions
  const [isDragging, setIsDragging] = useState(false);
  const [prevXPos, setPrevXPos] = useState(0);

  const dragMouseUpHandler = () => {
    setIsDragging(false);
  };
  const dragMouseMoveHandler = (e) => {
    if (!isDragging) return;
    holderRef.current.scrollLeft += prevXPos - e.clientX;
    setPrevXPos(e.clientX);
  };
  const dragMouseDownHandler = (e) => {
    setIsDragging(true);
    setPrevXPos(e.clientX);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (holderRef.current.scrollWidth > holderRef.current.clientWidth) {
        controlsRef.current.right.classList.remove("hidden");
        controlsRef.current.left.classList.remove("hidden");
      } else {
        controlsRef.current.left.classList.add("hidden");
        controlsRef.current.right.classList.add("hidden");
      }
    });
    resizeObserver.observe(holderRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  function controlClickHandler(direction) {
    const scrollAmount = 200;
    if (direction === "left")
      holderRef.current.scrollTo({
        left:
          Math.round(holderRef.current.scrollLeft / scrollAmount) *
            scrollAmount -
          scrollAmount,
        behavior: "smooth",
      });
    else
      holderRef.current.scrollTo({
        left:
          Math.round(holderRef.current.scrollLeft / scrollAmount) *
            scrollAmount +
          scrollAmount,
        behavior: "smooth",
      });
  }

  return (
    <div className="grid grid-cols-[auto_1fr_auto] grid-rows-1 bg-black">
      <button
        className="h-full bg-black p-1 hidden"
        ref={(ref) => (controlsRef.current.left = ref)}
        onClick={() => {
          controlClickHandler("left");
        }}
      >
        <FontAwesomeIcon icon={faCaretLeft} className={controlsClassName} />
      </button>
      <ul
        className={`${className} scroll-m-0 no-scrollbar select-none`}
        ref={holderRef}
        onMouseDown={(e) => dragMouseDownHandler(e)}
        onMouseMove={(e) => dragMouseMoveHandler(e)}
        onMouseUp={(e) => dragMouseUpHandler(e)}
        onMouseLeave={(e) => dragMouseUpHandler(e)}
      >
        {childrenRender}
      </ul>
      <button
        className="h-full bg-black p-1 hidden"
        ref={(ref) => (controlsRef.current.right = ref)}
        onClick={() => {
          controlClickHandler("right");
        }}
      >
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
