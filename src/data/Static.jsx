import html from "../assets/langues/HTML.png";
import angular from "../assets/langues/angular.png";
import react from "../assets/langues/react.png";
import django from "../assets/langues/django.png";
import nodejs from "../assets/langues/nodejs.svg";
import mongodb from "../assets/langues/mongodb.svg";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import tailwind from "../assets/langues/tailwind.png";
import js from "../assets/langues/js.png";
import bootstrap from "../assets/langues/bootstrap.png";
import portfolio from "../assets/portfolio.png";

// Array of work objects
export const works = [
  {
    title: "Furniture e-commerce App",
    imgUrl:
      "https://cdn.dribbble.com/users/6870886/screenshots/20051488/media/f16e46c91563fd48d6b80c37b48ac6df.png?compress=1&resize=1000x750&vertical=top",
    tech: ["NodeJS", "React", "Material UI"],
    workUrl:
      "",
    duration: "400",
  },

  {
    title: "Photography Portfolio Website",
    imgUrl:
      "https://cdn.dribbble.com/users/6870886/screenshots/19725277/media/51d626308c85e403aa3e3ab67ba22022.png?compress=1&resize=400x300&vertical=top",
    tech: ["HTML", "CSS", "Bootstrap 5"],
    workUrl:
      "",
    duration: "500",
  },
  {
    title: "Portfolio Maker",
    imgUrl: portfolio,
    tech: ["Django", "CSS", "Boottsrap 5", "Jquery"],
    workUrl: "",
    duration: "600",
  },
  {
    title: "Maklti food app",
    imgUrl:
      "https://cdn.dribbble.com/users/6870886/screenshots/19057557/cover_dribbble.png",
    tech: ["Flutter", "Figma", "Material UI"],
    workUrl:
      "",
    duration: "700",
  },
];

// Array of experience objects
export const experiences = [
  {
    date: "May 2023 - Nov 2024",
    company: "Self employed",
    position: "Full-Stack Developer",
    description: 
      <p>
      - Developed and maintained complex web applications using React, Node.js, and MongoDB, enhancing platform performance by 8%.
      <br />
      - Integrated cloud-based solutions and CI/CD pipelines, reducing deployment times by 13%.
      <br />
      - Mentored junior developers and led a team of 8 engineers to complete projects on schedule with a 97% client satisfaction rate. 
      <br />
      - Spearheaded the implementation of cybersecurity measures, safeguarding client data from potential threats.
      </p>
  },
  {
    date: "January 20 - February 2022",
    company: "Self employed",
    position: "Web application Developer",
    description:
      <p>
        - Built dynamic, user-friendly web applications using Vue.js, Python (Django), increasing user retention by 8%.
        <br />
        - Designed and implemented RESTful APIs to integrate third-party services and enhance functionality.
        <br />
        - Conducted usability testing and optimized UI/UX design for enterprise applications.
        <br />
        - Supported and maintained legacy systems while transitioning clients to modern tech stacks.
        <br />
      </p>,
  },
  {
    date: "January 2020 - Present",
    company: "Ukrposhta",
    position: "Full Stack Developer",
    description:
      <p>
        - Created end-to-end solutions using Apollo and React, improving system scalability and performance.
        <br />
        - Designed and implemented efficient data models to manage large-scale datasets.
        <br />
        - Participated in code reviews and contributed to the standardization of coding practices.
        <br />
        - Collaborated with DevOps teams to deploy applications in AWS environments, achieving 99.9% uptime.
      </p>,
  },
];


// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: react,
    title: "React",
    style: "shadow-sky-500",
  },
  {
    id: 5,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 6,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-teal-600",
  },
  {
    id: 7,
    src: angular,
    title: "Angular",
    style: "shadow-rose-500",
  },
  {
    id: 8,
    src: django,
    title: "Django",
    style: "shadow-emerald-700",
  },
  {
    id: 9,
    src: nodejs,
    title: "NodeJS",
    style: "shadow-green-300",
  },
  {
    id: 10,
    src: mongodb,
    title: "MongoDB",
    style: "shadow-green-600",
  },
  {
    id: 11,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-violet-500",
  }
];
