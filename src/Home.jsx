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
      <header className="bg-[rgb(58,58,58)] flex h-[60px] fixed inset-x-0 top-0 z-50">
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
        {/* [Home] */}
        <div
          id="home"
          className="flex justify-center min-h-[calc(100vh-60px)] items-center"
        >
          {/* intro */}
          <div className="flex-1 ml-[5vh] mr-[1vh]">
            <h2>
              <span className="block text-3xl font-libre font-light">
                Hello, My name is
              </span>
              <strong className="text-4xl font-libre">Victor Romero</strong>
            </h2>
            <p className="mt-3 w-[90%]">
              I&apos;m a software developer, I love coding and I&apos;m always
              looking forward to learn new things.
            </p>
            {/* -media- */}
            <ul className="flex gap-4 w-full mt-3">
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-[35px] w-auto"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-[35px] w-auto"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-[35px] w-auto"
                  />
                </a>
              </li>
            </ul>
            {/* -achievements- */}
            <h3 className="text-xl font-mono font-black mx-auto w-fit mt-8">
              Achievements
            </h3>
            <ul className="flex justify-center gap-4 mt-3">
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faWindows} className="h-[35px]" />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faFreeCodeCamp} className="h-[35px]" />
                </a>
              </li>
            </ul>
          </div>
          {/* SVG */}
          <div className="flex-1">
            <img
              className="h-[auto] w-[30vw]"
              src={spaceman}
              alt="svg of spaceman"
            />
          </div>
          {/* Knowledge */}
          <div className="flex-1 relative z-0">
            <h2 className="text-2xl absolute -top-[10vh]">
              <span className="font-bold font-libre">Knowledge Hub</span>
              <FontAwesomeIcon icon={faGraduationCap} className="ml-1" />
            </h2>
            <ul className="flex flex-col gap-[3vw] w-fit">
              <li className="flex text-5xl items-center -translate-x-6">
                <button>
                  <FontAwesomeIcon icon={faGitAlt} />
                  <span className="text-xl ml-1 hidden">Git</span>
                </button>
              </li>
              <li className="flex text-3xl items-center">
                <button>
                  <div className="flex gap-1">
                    <FontAwesomeIcon icon={faHtml5} />
                    <FontAwesomeIcon icon={faSquareJs} />
                    <FontAwesomeIcon icon={faCss3Alt} />
                  </div>
                </button>
                <span className="text-xl ml-1 hidden">
                  HTML / JavaScript / CSS
                </span>
              </li>
              <li className="flex text-5xl items-center translate-x-6">
                <button>
                  <FontAwesomeIcon icon={faPython} />
                  <span className="text-xl ml-1 hidden">Python</span>
                </button>
              </li>
              <li className="flex text-5xl items-center">
                <button>
                  <FontAwesomeIcon icon={faJava} />
                  <span className="text-xl ml-1 hidden">Java</span>
                </button>
              </li>
              <li className="flex items-center -translate-x-6">
                <button>
                  <img className="h-[45px]" src={csharp} alt="csharp logo" />
                  <span className="text-xl ml-1 hidden">C-Sharp</span>
                </button>
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
