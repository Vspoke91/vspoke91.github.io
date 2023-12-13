export default function Default() {
  return (
    <div className="my-auto ml-[2vw] flex flex-col gap-4 overflow-hidden">
      {/* -Tittle- */}
      <h2 className="whitespace-nowrap font-libre text-5xl font-light">
        Hello, I&apos;m
        <strong className="block text-6xl font-bold">JUSTIN JUSTING</strong>
      </h2>
      <p className="w-[50ch] cursor-default text-lg">
        I am a dedicated Web and Software Developer passionate about impactful
        software. Proficient in<strong> React.js </strong>and
        <strong> Java</strong>, experienced in<strong> Git </strong>and
        <strong> Github </strong>
        for collaborative development.
      </p>
      <button className="w-fit scale-90 whitespace-nowrap rounded-br-lg rounded-tl-lg border-2 border-white p-2 font-bold transition-all hover:scale-100">
        Download CV
      </button>
      {/* -Achievements- */}
      {/* <div className="flex flex-col items-center">
            <h3 className="mx-auto mt-8 cursor-default font-mono text-xl font-bold">
              Achievements
            </h3>
            <ul className="mt-3 flex gap-4 text-4xl">
              <li title="Windows Learn">
                <a href="">
                  <FontAwesomeIcon icon={faWindows} />
                </a>
              </li>
              <li title="freecodecamp">
                <a href="">
                  <FontAwesomeIcon icon={faFreeCodeCamp} />
                </a>
              </li>
            </ul>
          </div> */}
    </div>
  );
}
