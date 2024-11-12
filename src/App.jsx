import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Review from "./Components/Review";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

// Gsap import

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Portfolio from "./Components/Portfolio";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        ease: "power2.out",
      });
    });
  });
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Work /> */}
        <Portfolio />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
