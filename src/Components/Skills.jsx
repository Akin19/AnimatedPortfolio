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
    label: "SEO",
    desc: "Design tool",
  },
  {
    imgSrc: cssImg,
    label: "Keyword",
    desc: "Keyword Research",
  },
  {
    imgSrc: javascriptImg,
    label: "Thumbnails",
    desc: "Interaction",
  },
  {
    imgSrc: nodeImg,
    label: "Content",
    desc: "Writing",
  },
  {
    imgSrc: expressImg,
    label: "Facebook ads",
    desc: "Ads strategy",
  },
  {
    imgSrc: mongoImg,
    label: "Insights & analytics",
    desc: "Database",
  },
  {
    imgSrc: reactImg,
    label: "Funnel",
    desc: "Audience control",
  },
  {
    imgSrc: tailwindImg,
    label: "Regular Posting",
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
