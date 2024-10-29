import SkillCard from "./SkillCard";
import figmaImg from "../assets/images/figma.svg";
import cssImg from "../assets/images/css3.svg";
import javascriptImg from "../assets/images/javascript.svg";
import nodeImg from "../assets/images/nodejs.svg";
import expressImg from "../assets/images/expressjs.svg";
import reactImg from "../assets/images/react.svg";
import mongoImg from "../assets/images/mongodb.svg";
import tailwindImg from "../assets/images/tailwindcss.svg";

const skillItem = [
  {
    imgSrc: figmaImg,
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: cssImg,
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: javascriptImg,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: nodeImg,
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: expressImg,
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: mongoImg,
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: reactImg,
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: tailwindImg,
    label: "TailwindCSS",
    desc: "User Interface",
  },
];
const Skills = () => {
  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              className="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
