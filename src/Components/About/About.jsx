import React from 'react'
import '../About/About.css'

const About = () => {
  return (
    <div>

        {/* About Tittle */}

          <div className=" font-aldrich pb-12 flex justify-center items-center  bg-black">
    <div className="about-container">
          {/* Second layer: gray outline */}
          <h1 className="about-text-outline ">
            About Me
          </h1>
    
          {/* First layer: black text */}
          <h1 className="about-text ">
            About Me
          </h1>
    
          {/* Career with gradient fill, overlapping and on top */}
          <h2 className=" text-4xl md:text-6xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#5411ff] to-[#b000c3]  absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
            Career
          </h2>
        </div>
        </div>
          {/* //Tittle end */}

        {/* about Education part  */}
        <div className="bg-black text-white p-4 sm:p-6 md:p-8 font-Aldrich px-[5%]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row  border-gray-600 pb-4 px-4 md:px-20 ">
        <div className="text-xl text-white border-b border-[#a855f7] mb-4 md:mb-0 mr-8 md:mr-8">Education</div>
        <div className="lg:flex space-x-4 md:space-x-8">
          <span className="text-xl cursor-pointer">Experience</span>
          <span className="text-xl cursor-pointer ">Skills</span>
        </div>
      </div>

    

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-between mt-8 px-4 sm:px-8 space-y-8 md:space-y-0 md:space-x-8">
        {/* Education Column */}
        <div className="md:w-1/2 lg:px-12">
        <div className="text-2xl sm:text-3xl lg:mb-6 md:mb-6">Education</div>
          <h3 className="text-base md:text-lg ">
            <span className="text-lg md:text-xl ">
              BSc. & MSc in CS, CCNA, MCP, MCSA, MCSE, <br /> RHCT, RHCSA, RHCE   </span> Has extensive experience in <br /> Cybersecurity, IT Infrastructure, and Technology <br /> Training
          
            
           
          </h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center text-md">
              <span className="h-4 w-4 bg-gradient-to-r   from-[#AC01C6] to-[#5411FF]   mr-2"></span>
              Performed Excellent Result
            </li>
            <li className="flex items-center text-md">
              <span className="h-4 w-4 bg-gradient-to-r   from-[#AC01C6] to-[#5411FF] mr-2"></span>
              Joined in Extra Curricular Activities
            </li>
            <li className="flex items-center text-md">
              <span className="h-4 w-4 bg-gradient-to-r   from-[#AC01C6] to-[#5411FF]  mr-2"></span>
              Wonderful achievement in sports
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 lg:flex   lg:space-x-8 md:space-x-8">
        { /* Passing Years Column */}
        
        
          <div>
          <div className="text-2xl sm:text-3xl mt-4 sm:mt-0 lg:mb-10 md:mb-5">Passing Years</div>
          
            <p className="text-base md:text-lg text-gray-300 underline underline-offset-8  mb-5 ">2000-2002</p>
            <p className="text-base md:text-lg tracking-tighter mb-10">MSc. in Computer Science</p>
            <p className="mt-6 text-base md:text-lg text-gray-300 underline underline-offset-8 mb-5">1994-1996</p>
            <p className="text-base md:text-lg tracking-tighter mb-5">Higher Secondary School Certificate</p>
          </div>
          <div className='  '>
            <p className="text-base md:text-lg text-gray-300 underline underline-offset-8 lg:mt-[70px] md:mt-[50px] lg:mb-5 md:mb-5  ">1995-2000</p>
            <p className="text-base md:text-lg mb-10 md:mb-10 sm:mb-10">BSc. in Computer Science</p>
            <p className="mt-6 text-base md:text-lg text-gray-300 underline underline-offset-8  lg:mt-[30px] md:mt-[30px] lg:mb-5 md:mb-5 ">1992-1994</p>
            <p className="text-base md:text-lg">Secondary School Certificate</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full max-w-lg mx-auto ">
        <div className="relative w-full h-3 bg-white  rounded-full ">
          <div className="absolute h-3  rounded-full bg-gradient-to-r   from-[#AC01C6] to-[#5411FF]" style={{ width: '35%' }}></div>
        </div>
      </div>

      {/* Show Less Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-gradient-to-r from-[#AC01C6] to-[#5411FF] text-white px-6 py-2 rounded-full  transition  ">
          Show Less
        </button>
      </div>
    </div>
    </div>
  )
}

export default About