import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import spaceman from "./assets/spaceman.svg";

function Home() {
  return (
    <>
      <header>
        <h1 className="font-Agbalumo">Victor Romero</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">
                <FontAwesomeIcon icon={faHouse} />
                <span>Home</span>
              </a>
              <a href="#projects">
                <FontAwesomeIcon icon={faCode} />
                <span>Projects</span>
              </a>
              <a href="#about">
                <FontAwesomeIcon icon={faUser} />
                <span>About</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div id="home">
          <img
            className="h-[500px] w-[500px]"
            src={spaceman}
            alt="svg of spaceman"
          ></img>
        </div>
        <div id="projects">Projects</div>
        <div id="about">About</div>
      </main>
    </>
  );
}

export default Home;
