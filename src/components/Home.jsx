import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-lg text-gray-50">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
        Vsevolod Khokhlov
        </h1>
        <div>
          <h2 className="flex pt-2 text-2xl font-bold sm:text-4xl text-zinc-50">
            <span className='mr-2'>I am</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Senior Frontend Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Junior Backend Developer")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="py-4 leading-8 text-gray-300">
          With a passion for creating captivating user experiences, I specialize
          in developing web applications using MERN Stack and Vue while incorporating
          appealing design principles. 
          In addtion, I have 5 years of experience in Backend with node.js ,mongodb and mysql.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold">
            View Work{" "}
            <span className="duration-300 group-hover:translate-x-1">
              {" "}
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;