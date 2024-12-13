import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { experiences } from "../data/Static";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name="experience"
      className="min-h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-32"
    >
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto text-white">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
            Experience
          </h1>
          <p className="py-6 text-xl">
            Experienced professional with a proven track record of success
          </p>
        </div>
        <div className="w-full mt-5 sm:w-full md:w-12/12">
          {/* Map over the experiences array and render each experience */}
          {experiences.map((data, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-3.5 border-white md:border-b-4 border-l-4 md:items-start `}   data-aos= {`${index % 2 === 0 ? "fade-up" : "fade-left"}`}
              data-aos-duration="900"
            >
              {/* Date */}
              <h1
                className={`absolute top-0 bg-white w-max p-2.5 text-[#3A1078] dark:text-[#21073C] shadow-2xl text-2xl left-0`}
              >
                {data.date}
              </h1>
              {/* Company */}
              <h1 className="text-3xl font-bold pt-14">{data.company}</h1>
              {/* Position */}
              <h2 className="text-xl font-bold text-[#00FFCA] py-1">
                {data.position}
              </h2>
              {/* Description */}
              <p className="mt-1 mb-1 text-lg leading-8">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;