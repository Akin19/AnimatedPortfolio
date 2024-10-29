// import { useState } from "react";

// import logo from "../assets/logo.svg";

// const Header = () => {
//   const Links = [
//     { href: "#", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#work", label: "Work" },
//     { href: "#review", label: "Review" },
//     { href: "#contact", label: "Contact" },
//   ];
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLinkClicked = () => {
//     setMenuOpen(false);
//   };
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">
//       <div
//         className="flex justify-between items-center max-w-full mx-auto
//     md:my-2 bg-stone-950/50 p-4 md:rounded-xl backdrop-blur-lg"
//       >
//         <div className="text-white font-semibold text-lg uppercase">
//           <h1>
//             <a href="/" className="logo">
//               <img src={logo} alt="logo" width={40} height={40} />
//             </a>
//           </h1>
//         </div>
//         <div className="hidden md:flex space-x-8">
//           {Links.map((link, index) => (
//             <a
//               href={link.href}
//               key={index}
//               className="text-white hover:text-stone-400 transition duration-300"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>

//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             <span className="material-symbols-rounded">
//               {menuOpen ? "close" : "menu"}
//             </span>
//           </button>
//         </div>
//       </div>

//       {menuOpen && (
//         <div
//           className="md:hidden p-2 bg-stone-900 backdrop-blur-lg
//       rounded-xl flex flex-col space-y-4 w-2/4 max-w-6xl ml-auto h-screen"
//         >
//           {Links.map((link, index) => (
//             <a
//               href={link.href}
//               key={index}
//               className="text-stone-50
//             hover:text-stone-400 transition duration-300"
//               onClick={handleLinkClicked}
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;

import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import { ButtonPrimary } from "./Button";

const Header = () => {
  const Links = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#review", label: "Review" },
    // { href: "#contact", label: "Contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // To track the menu element
  const buttonRef = useRef(null); // To track the button element

  // Close menu when clicking outside of it (except the button)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside both the menu and button, close the menu
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  const handleLinkClicked = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-full mx-auto p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/" className="logo">
            <img src={logo} alt="logo" width={40} height={40} />
          </a>
        </div>

        {/* Links for desktop view */}
        <div className="hidden md:flex space-x-8">
          {Links.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white hover:text-stone-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-white hidden lg:block ">
          <ButtonPrimary
            href="#contact"
            label="Contact"
            icon="chevron_right"
            className="reveal-up"
          />
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button ref={buttonRef} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-rounded">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef} // Reference to track menu clicks
          className="md:hidden p-2 bg-stone-900 backdrop-blur-lg rounded-xl flex flex-col space-y-4 w-[40%] max-w-6xl ml-auto h-screen"
        >
          {Links.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-stone-50 hover:text-stone-400 transition duration-300"
              onClick={handleLinkClicked}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
