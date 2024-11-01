import React, { useState } from 'react';
import '../About/About.css';
import Experience from './Experience';
import Skills from './Skills';

const About2 = () => {
  const [activeSection, setActiveSection] = useState('education');

  return (
    <div id="about2">
      {/* About Title */}
      <div className="font-aldrich pb-12 flex justify-center items-center bg-black">
        <div className="about-container">
          {/* Second layer: gray outline */}
          <h1 className="about-text-outline">About Me</h1>
          {/* First layer: black text */}
          <h1 className="about-text">About Me</h1>
          {/* Career with gradient fill, overlapping and on top */}
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#5411ff] to-[#b000c3] absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
            Career
          </h2>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-black text-white p-4 sm:p-6 md:p-8 font-Aldrich px-[5%]">
        <div className="flex flex-col md:flex-row border-gray-600 pb-4 px-4 md:px-20">
          <div
            onClick={() => setActiveSection('education')}
            className={`text-xl cursor-pointer ${activeSection === 'education' ? 'border-b-2 border-[#a855f7]' : ''} mb-4 md:mb-0 mr-8`}
          >
            Education
          </div>
          <div
            onClick={() => setActiveSection('experience')}
            className={`text-xl cursor-pointer ${activeSection === 'experience' ? 'border-b-2 border-[#a855f7]' : ''} mb-4 md:mb-0 mr-8`}
          >
            Experience
          </div>
          <div
            onClick={() => setActiveSection('skills')}
            className={`text-xl cursor-pointer ${activeSection === 'skills' ? 'border-b-2 border-[#a855f7]' : ''} mb-4 md:mb-0 mr-8`}
          >
            Skills
          </div>
        </div>

        {/* Conditionally Rendered Content */}
        {activeSection === 'education' && (
          <div>
            {/* Education Content */}
            <div className="flex flex-col md:flex-row justify-between mt-8 px-4 sm:px-8 space-y-8 md:space-y-0 md:space-x-8">
              {/* Education Column */}
              <div className="md:w-1/2 lg:px-12">
                <div className="text-2xl sm:text-3xl lg:mb-6 md:mb-6">Education</div>
                <h3 className="text-base md:text-lg">
                  <span className="text-lg md:text-xl">
                    BSc. & MSc in CS, CCNA, MCP, MCSA, MCSE, <br /> RHCT, RHCSA, RHCE
                  </span>
                  Has extensive experience in <br /> Cybersecurity, IT Infrastructure, and Technology Training
                </h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center text-md">
                    <span className="h-4 w-4 bg-gradient-to-r from-[#AC01C6] to-[#5411FF] mr-2"></span>
                    Performed Excellent Result
                  </li>
                  <li className="flex items-center text-md">
                    <span className="h-4 w-4 bg-gradient-to-r from-[#AC01C6] to-[#5411FF] mr-2"></span>
                    Joined in Extra Curricular Activities
                  </li>
                  <li className="flex items-center text-md">
                    <span className="h-4 w-4 bg-gradient-to-r from-[#AC01C6] to-[#5411FF] mr-2"></span>
                    Wonderful achievement in sports
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'experience' && (
          <div>
            {/* Experience Content */}
            <Experience />
          </div>
        )}

        {activeSection === 'skills' && (
          <div>
            {/* Skills Content */}
            <Skills />
          </div>
        )}
      </div>
    </div>
  );
};

export default About2;
