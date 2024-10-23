import React from 'react'

const About = () => {
  return (
    <div>

        {/* About Tittle */}

          <div className=" font-aldrich pb-12 flex justify-center items-center mt-24">
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


    </div>
  )
}

export default About