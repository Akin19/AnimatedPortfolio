import avatar1 from "../assets/images/avatar-1.jpg";
import heroBanner from "../assets/images/hero-banner.png";
import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section className="pt-28 lg-pt-36" id="#home">
      <div className="container items-center flex flex-col-reverse md:grid md:grid-cols-2 md:gap-10 lg:grid lg:grid-cols-2 lg:gap-10 ">
        <div className="">
          <div className="flex items-center gap-3">
            {/* <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src={avatar1}
                width={40}
                height={40}
                className="img-cover"
                alt="asad akin"
              />
            </figure> */}

            <figure className="img-box w-9 h-9 md:w-12 md:h-12 rounded-lg">
              <img src={avatar1} className="img-cover" alt="asad akin" />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2
            className="headline-1 max-w-[15ch]
          sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10
          "
          >
            Turning Clicks into Connections, and Connections into Customers.
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="keyboard_double_arrow_down"
            />
          </div>
        </div>

        <div className="lg:block">
          <figure
            className="w-full 
             ml-auto
             max-w-[280px] max-h-[300px] 
              sm:max-w-[280px] sm:max-h-[300px] 
              md:max-w-[400px] md:max-h-[600px] 
              lg:max-w-[480px] lg:max-h-[700px] 
          bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] 
          overflow-hidden"
          >
            <img
              src={heroBanner}
              width={656}
              height={800}
              alt=""
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
