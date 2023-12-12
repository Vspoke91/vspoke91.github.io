//Components Imports
import Introduction from "./Introduction";
import DecorSVG from "./DecorSVG";
import ProjectHub from "./ProjectHub";

//React Imports
import { useRef } from "react";

export default function Default() {
  const holder = useRef(null);

  function expandHub(value) {
    const style = "!grid-cols-[0%_1fr]";
    if (value) {
      holder.current.classList.add(style);
    } else {
      holder.current.classList.remove(style);
    }
  }

  return (
    <div
      id="home"
      ref={holder}
      className="grid max-w-[1500px] grid-cols-[50%_1fr] grid-rows-1 place-self-center self-center transition-all duration-200"
    >
      <Introduction />
      <div className="bg-main flex">
        <DecorSVG />
        <ProjectHub expandHubFunc={expandHub} />
      </div>
    </div>
  );
}
