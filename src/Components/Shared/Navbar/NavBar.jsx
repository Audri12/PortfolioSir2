import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <div>
        <ul className="flex space-x-5 md:space-x-12 justify-center font-aldrich text-white p-4 px-8 border rounded-lg bg-white bg-opacity-30">
          <li
            className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
              activeIndex === 0 ? "text-white" : ""
            }`}
            onClick={() => setActiveIndex(0)}
          >
            <Link to="/">Home</Link>
            <span
              className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
                activeIndex === 0
                  ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                  : "bg-transparent"
              }`}
            ></span>
          </li>
          <li
            className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
              activeIndex === 1 ? "text-white" : ""
            }`}
            onClick={() => setActiveIndex(1)}
          >
            <Link to="#about">About Me</Link>
            <span
              className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
                activeIndex === 1
                  ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                  : "bg-transparent"
              }`}
            ></span>
          </li>
          <li
            className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
              activeIndex === 2 ? "text-white" : ""
            }`}
            onClick={() => setActiveIndex(2)}
          >
            <Link to="/events">Events</Link>
            <span
              className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
                activeIndex === 2
                  ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                  : "bg-transparent"
              }`}
            ></span>
          </li>
          <li
            className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
              activeIndex === 3 ? "text-white" : ""
            }`}
            onClick={() => setActiveIndex(3)}
          >
            <Link to="/contact">Contact</Link>
            <span
              className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
                activeIndex === 3
                  ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                  : "bg-transparent"
              }`}
            ></span>
          </li>
          <li
            className={`relative h-full transition-all duration-200 ease-linear cursor-pointer hover:text-[#5411ff] ${
              activeIndex === 4 ? "text-white" : ""
            }`}
            onClick={() => setActiveIndex(4)}
          >
            <Link to="/blog">Blog</Link>
            <span
              className={`absolute left-[-10px] right-[-10px] bottom-0 h-0.5 transition-all duration-300 ease-in-out ${
                activeIndex === 4
                  ? "bg-gradient-to-r from-[#5411ff] to-[#b000c3]"
                  : "bg-transparent"
              }`}
            ></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
