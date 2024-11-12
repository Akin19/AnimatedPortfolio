import "./Portfolio.css";
import { FiFileText, FiUser } from "react-icons/fi";
import PortfolioItem from "./PortfolioItem";
import { useState } from "react";

import graphics1 from "../assets/portfolio/graphics1.jpg";
import graphics2 from "../assets/portfolio/graphics2.jpg";
import graphics3 from "../assets/portfolio/graphics3.jpg";
import graphics4 from "../assets/portfolio/graphics4.jpg";
import graphics5 from "../assets/portfolio/graphics5.jpg";
import graphics6 from "../assets/portfolio/graphics6.jpg";
import graphics7 from "../assets/portfolio/graphics7.jpg";
import graphics8 from "../assets/portfolio/graphics8.jpg";
import graphics9 from "../assets/portfolio/graphics9.jpg";
import graphics10 from "../assets/portfolio/graphics10.jpg";

import seo1 from "../assets/portfolio/seo13.jpg";
import seo2 from "../assets/portfolio/seo14.jpg";
import seo3 from "../assets/portfolio/seo16.jpg";

import seo4 from "../assets/portfolio/seo18.jpg";

import thumbnail1 from "../assets/portfolio/thumbnail1.jpg";
import thumbnail3 from "../assets/portfolio/thumbnail3.jpg";
import thumbnail4 from "../assets/portfolio/thumbnail4.jpg";
import thumbnail5 from "../assets/portfolio/thumbnail5.jpg";
import thumbnail6 from "../assets/portfolio/thumbnail6.jpg";
import thumbnail7 from "../assets/portfolio/thumbnail7.jpg";
import thumbnail8 from "../assets/portfolio/thumbnail8.jpg";
import thumbnail9 from "../assets/portfolio/thumbnail9.jpg";
import thumbnail10 from "../assets/portfolio/thumbnail10.jpg";

export const portfolioData = [
  {
    id: 24,
    img: seo2,
    title: "SEO",
    category: "seo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 25,
    img: seo3,
    title: "SEO",
    category: "seo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 26,
    img: seo4,
    title: "SEO",
    category: "seo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 1,
    img: seo1,
    title: "Youtube SEO",
    category: "seo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "SEO",
      },
      // {
      //   icon: <FaCode />,
      //   title: "Language : ",
      //   desc: "Adobe Photoshop",
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: "Preview : ",
      //   desc: "www.dribble.com",
      // },
    ],
  },

  {
    id: 2,
    img: thumbnail1,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Thumbnail",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Youtube",
      },
      // {
      //   icon: <FaCode />,
      //   title: "Language : ",
      //   desc: "React JS",
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: "Preview : ",
      //   desc: "www.dribble.com",
      // },
    ],
  },

  {
    id: 3,
    img: graphics1,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Graphics",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Graphics",
      },
      // {
      //   icon: <FaCode />,
      //   title: "Language : ",
      //   desc: "Adobe Premium",
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: "Preview : ",
      //   desc: "www.dribble.com",
      // },
    ],
  },

  {
    id: 4,
    img: graphics2,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      // {
      //   icon: <FaCode />,
      //   title: "Language : ",
      //   desc: "Adobe Premium",
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: "Preview : ",
      //   desc: "www.dribble.com",
      // },
    ],
  },

  {
    id: 5,
    img: thumbnail10,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      // {
      //   title: "Language : ",
      //   desc: "React JS, Node JS",
      // },
      // {
      //   title: "Preview : ",
      //   desc: "www.dribble.com",
      // },
    ],
  },

  {
    id: 6,
    img: thumbnail1,
    title: "Photo Editing",
    category: "digitalMarketing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      // {
      //   icon: <FaCode />,
      //   title: "Language : ",
      //   desc: "Adobe Photoshop",
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: "Preview : ",
      //   desc: "www.dibble.com",
      // },
    ],
  },
  {
    id: 7,
    img: thumbnail3,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 8,
    img: thumbnail3,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 9,
    img: thumbnail4,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 10,
    img: thumbnail5,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 11,
    img: thumbnail6,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 12,
    img: thumbnail7,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 13,
    img: thumbnail8,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 14,
    img: thumbnail9,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 15,
    img: graphics2,
    title: "graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 16,
    img: graphics3,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 17,
    img: graphics4,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 18,
    img: graphics5,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 19,
    img: graphics6,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 20,
    img: graphics7,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 21,
    img: graphics8,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 22,
    img: graphics9,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 23,
    img: graphics10,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
];
const Portfolio = () => {
  const [category, setCategory] = useState("all");

  return (
    <section id="work" className="portfolio section">
      <div className="container">
        <h2 className="heading-2 mb-4">
          My <span>Portfolio Highlights</span>
        </h2>
        <div className="button__container">
          <button
            className={`portfolio__button ${
              category === "all" ? "active" : ""
            }`}
            onClick={() => setCategory("all")}
          >
            All
          </button>
          <button
            className={`portfolio__button ${
              category === "digitalMarketing" ? "active" : ""
            }`}
            onClick={() => setCategory("digitalMarketing")}
          >
            Digital Marketing
          </button>
          <button
            className={`portfolio__button ${
              category === "thumbnailDesign" ? "active" : ""
            }`}
            onClick={() => setCategory("thumbnailDesign")}
          >
            Thumbnail Design
          </button>
          <button
            className={`portfolio__button ${
              category === "graphicsDesign" ? "active" : ""
            }`}
            onClick={() => setCategory("graphicsDesign")}
          >
            Graphics Design
          </button>
          <button
            className={`portfolio__button ${
              category === "seo" ? "active" : ""
            }`}
            onClick={() => setCategory("seo")}
          >
            SEO
          </button>
        </div>

        <div className="portfolio__container container grid grid__gap">
          {portfolioData
            .filter((item) => category === "all" || item.category === category)
            .map((item) => (
              <PortfolioItem category={category} key={item.id} {...item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
