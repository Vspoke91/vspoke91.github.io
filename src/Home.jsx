import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import spaceman from "./assets/spaceman.svg";

function Home() {
  return (
    <>
      <header>
        <h1 className="font-Agbalumo">VJRO</h1>
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
              <li>HTML, Javascript, CSS</li>
              <li>Java</li>
              <li>Python</li>
              <li>C#</li>
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
