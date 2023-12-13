// Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Default() {
  return (
    <>
      <ul className="absolute left-[15px] top-[50%] flex flex-col gap-4 text-4xl text-gray-400">
        <li
          title="Linkedin"
          className="transition-all hover:scale-125 hover:text-white"
        >
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li
          title="Github"
          className="transition-all hover:scale-125 hover:text-white"
        >
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li
          title="Email"
          className="transition-all hover:scale-125 hover:text-white "
        >
          <a href="">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </>
  );
}
