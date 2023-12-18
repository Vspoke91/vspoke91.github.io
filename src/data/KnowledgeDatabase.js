const projects = {
  aiworld: {
    name: "AI World",
    image: "https://aiworld.veltaproject.com/img/logos/AI-World-Large.png",
    link: "www.project1.com",
    githubRepo: "github.com/username/project1",
  },
  veltaproject: {
    name: "Velta Project",
    image: "https://aiworld.veltaproject.com/img/logos/AI-World-Large.png",
    link: "www.project1.com",
    githubRepo: "github.com/username/project1",
  },
  antrat: {
    name: "Ant-RAT",
    image: "https://aiworld.veltaproject.com/img/logos/AI-World-Large.png",
    link: "www.project1.com",
    githubRepo: "github.com/username/project1",
  },
  infinitesurvival: {
    name: "Infinite Survival",
    image: "https://aiworld.veltaproject.com/img/logos/AI-World-Large.png",
    link: "www.project1.com",
    githubRepo: "github.com/username/project1",
  },
};

export default {
  git: {
    name: "Git",
    level: "Proficient",
    usedTime: "1 years",
    technologies: ["github"],
    showcase: [projects.aiworld, projects.veltaproject],
  },
  web: {
    name: "HTML CSS JavaScript",
    level: "Proficient",
    usedTime: "1 year",
    technologies: ["reactjs", "firebase", "tailwindcss"],
    showcase: [projects.aiworld],
  },
  python: {
    name: "Python",
    level: "Novice",
    usedTime: "less than 1 year",
    technologies: [],
    showcase: [],
  },
  java: {
    name: "Java",
    level: "Proficient",
    usedTime: "3 years",
    technologies: ["javafx"],
    showcase: [projects.antrat],
  },
  csharp: {
    name: "C#",
    level: "Competent",
    usedTime: "2 years",
    technologies: ["unity"],
    showcase: [projects.infinitesurvival],
  },
};
