//Components Imports
import Introduction from "./Introduction";
import DecorSVG from "./DecorSVG";
import ProjectHub from "./ProjectHub";
import MediaBar from "./MediaBar";

//React Imports
import { useRef } from "react";

export default function Default() {
  const holder = useRef(null);

  function hideIntroFunc(value) {
    const style = "!grid-cols-[0%_1fr]";

    if (value) {
      holder.current.classList.add(style);
      holder.current.classList.remove("place-self-center");
    } else {
      holder.current.classList.remove(style);
      holder.current.classList.add("place-self-center");
    }
  }

  return (
    <div
      id="home"
      ref={holder}
      className="grid grid-cols-[50%_1fr] grid-rows-1 place-self-center self-center transition-all duration-200 [@media(max-width:1815px)]:pl-[60px]"
    >
      <MediaBar />
      <Introduction />
      <div className="bg-main flex items-center">
        <DecorSVG />
        <ProjectHub hideIntroFunc={hideIntroFunc} />
      </div>
    </div>
  );
}
