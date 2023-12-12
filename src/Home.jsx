import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import HomeSection from "./components/sections/home/HomeSection";

function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-[60px] bg-[rgb(58,58,58)]">
        <h1 className="my-auto ml-[2vw] cursor-default font-Agbalumo text-3xl">
          Victor R.O.
        </h1>
        <div className="mx-4 my-auto h-[75%] rounded-lg border-[2px]" />
        <nav className="flex h-full gap-4">
          <ul className="contents">
            <li className="flex h-full items-center">
              <a href="#home">
                <FontAwesomeIcon icon={faHouse} className="mr-1" />
                <span className="font-bold">Home</span>
              </a>
            </li>
            <li className="flex h-full items-center">
              <a href="#projects">
                <FontAwesomeIcon icon={faCode} className="mr-1" />
                <span className="font-bold">Projects</span>
              </a>
            </li>
            <li className="flex h-full items-center">
              <a href="#about">
                <FontAwesomeIcon icon={faUser} className="mr-1" />
                <span className="font-bold">About</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="grow" />
        <button className="my-auto mr-[10vh] h-fit rounded-lg bg-green-700 px-3 py-2 font-mono text-lg font-bold">
          Contact Me
        </button>
      </header>
      <main className=" auto-rows-screen mt-[60px] grid ">
        {/* [Home] */}
        <HomeSection />
        {/* [Media] */}
        <div id="media">Media</div>
        <div id="projects">Projects</div>
        <div id="contact">contact</div>
      </main>
    </>
  );
}

export default Home;
