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

export default function Default({ children }) {
  //React Hooks
  const [childrenRender, setChildrenRender] = useState(null);
  const scrollHolderRef = useRef(null);
  const holderRef = useRef(null);
  const controlsRef = useRef({ left: null, right: null });

  //create li elements from children
  useEffect(() => {
    //create li elements
    if (children && children.length) {
      const elementChildrenArray = [];

      children.map((childElement, index) =>
        elementChildrenArray.push(createLiElement(index, childElement)),
      );
      setChildrenRender(elementChildrenArray);
    } else {
      setChildrenRender(<></>);
    }
    function createLiElement(index, element) {
      return (
        <li
          key={index}
          className="group/item grid w-[200px] shrink-0 snap-start grid-cols-1 grid-rows-1
        items-center justify-items-center hover:cursor-pointer"
        >
          <div className="z-0 col-[1] row-[1] scale-90 transition-all group-hover/item:scale-100 group-hover/item:brightness-75">
            {element}
          </div>
          <FontAwesomeIcon
            icon={faEye}
            className="pointer-events-none z-[2] col-[1] row-[1] scale-0 text-5xl transition-all group-hover/item:block group-hover/item:scale-100"
          />
        </li>
      );
    }
  }, [children]);

  //add resize obcerver to scrollHolderRef
  useEffect(() => {
    //keeping a reference to the current scrollHolderRef
    const currentScrollHolderRef = scrollHolderRef.current;

    const resizeObserver = new ResizeObserver(() => {
      const scrollWidth = currentScrollHolderRef.clientWidth;
      const contentWidth = currentScrollHolderRef.scrollWidth;

      const styleGroup = "group/holder";

      if (contentWidth > scrollWidth) {
        holderRef.current.classList.add(styleGroup);
      } else {
        holderRef.current.classList.remove(styleGroup);
      }
    });
    resizeObserver.observe(currentScrollHolderRef);
    return () => {
      resizeObserver.unobserve(currentScrollHolderRef);
    };
  }, []);

  function updateScrollControlsVisibility(scrollElement, controlsElementRef) {
    //position is on the left of scroll and equals 0 in the start
    const scrollPosition = scrollElement.scrollLeft;
    const scrollWidth = scrollElement.clientWidth;
    const contentWidth = scrollElement.scrollWidth;

    const style = "group-hover/holder:translate-x-0";

    //scroll is at the start
    if (scrollPosition <= 0) {
      controlsElementRef.left.classList.remove(style);
    } else {
      controlsElementRef.left.classList.add(style);
    }
    //scroll is at the end
    if (Math.ceil(scrollPosition) + scrollWidth >= contentWidth) {
      controlsElementRef.right.classList.remove(style);
    } else {
      controlsElementRef.right.classList.add(style);
    }
  }

  return (
    <div
      className="grid grid-cols-1 grid-rows-1 items-center overflow-hidden bg-black "
      ref={holderRef}
      onMouseEnter={() => {
        if (
          scrollHolderRef.current.scrollWidth >
          scrollHolderRef.current.clientWidth
        ) {
          holderRef.current.classList.add("group/holder");
        }
        updateScrollControlsVisibility(
          scrollHolderRef.current,
          controlsRef.current,
        );
      }}
      onMouseLeave={() => {
        holderRef.current.classList.remove("group/holder");
      }}
    >
      <Controls myRef={controlsRef} scrollHolder={scrollHolderRef}>
        <ul
          className="scroll-no-style z-[0] col-[1] row-[1] flex select-none snap-x snap-mandatory overflow-x-auto scroll-smooth"
          ref={scrollHolderRef}
          onScroll={(e) => {
            updateScrollControlsVisibility(e.target, controlsRef.current);
          }}
        >
          {childrenRender}
        </ul>
      </Controls>
    </div>
  );
}
Default.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  controlsClassName: PropTypes.string,
  onClick: PropTypes.func,
};

function Controls({ children, scrollHolder, myRef }) {
  const controlsStyle =
    "text-5xl px-2 col-[1] row-[1] z-[1] self-center bg-[#00000050] h-full hover:bg-[#00000090] transition-all";

  return (
    <>
      <button
        ref={(ref) => (myRef.current.left = ref)}
        className={`${controlsStyle} -translate-x-full place-self-start`}
        onClick={() => {
          scrollHolder.current.scrollBy(-1, 0);
        }}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      {children}
      <button
        ref={(ref) => (myRef.current.right = ref)}
        className={`${controlsStyle} translate-x-full place-self-end group-hover/holder:translate-x-0`}
        onClick={() => {
          scrollHolder.current.scrollBy(1, 0);
        }}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </>
  );
}

Controls.propTypes = {
  children: PropTypes.element,
  scrollHolder: PropTypes.object,
  myRef: PropTypes.object,
};
