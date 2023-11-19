import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCode,
  faUser,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWindows,
  faFreeCodeCamp,
  faHtml5,
  faSquareJs,
  faCss3Alt,
  faPython,
  faJava,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import csharp from "./assets/csharp.svg";
import spaceman from "./assets/spaceman.svg";

function Home() {
  return (
    <>
      <header className="bg-[rgb(58,58,58)] flex h-[60px] fixed inset-x-0 top-0">
        <h1 className="font-Agbalumo text-3xl ml-[2vw] cursor-default my-auto">
          Victor R.O
        </h1>
        <div className="border-[2px] rounded-lg h-[75%] mx-4 my-auto" />
        <nav className="flex gap-4 h-full">
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
        <button className="bg-green-700 rounded-lg h-fit my-auto mr-[10vh] font-bold py-2 px-3 text-lg font-mono">
          Contact Me
        </button>
      </header>
      <main className="mt-[60px]">
        <div id="home" className="flex justify-center min-h-screen">
          <div className="flex-1">
            <h2>Victor Romero</h2>
            <p>dawdaw daw daw faw f aw fawf aw fawf aw faw f aw fa wf aw </p>
          </div>
          <div className="flex-1">
            <img
              className="h-[auto] w-[30vw]"
              src={spaceman}
              alt="svg of spaceman"
            />
          </div>
          <div className="flex-1">
            <h2>Knowledge Hub</h2>
            <ul>
              <li>
                <i></i>
                <span>HTML, JavaScript, CSS</span>
              </li>
              <li>
                <i></i>
                <span>Python</span>
              </li>
              <li>
                <i></i>
                <span>C#</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="media">Media</div>
        <div id="projects">Projects</div>
        <div id="contact">contact</div>
      </main>
    </>
  );
}

export default Home;
