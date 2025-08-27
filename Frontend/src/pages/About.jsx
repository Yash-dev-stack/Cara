import React from "react";
import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <div className="text-center">
      <div
        className="w-full h-[22vh] sm:h-[40vh] flex items-center flex-col justify-center text-center "
        style={{
          backgroundImage: `url(${assets.banner})`,
        }}
      >
        <h1 className="text-4xl font-semibold text-white">#Know Us</h1>
        <p className="font-normal text-gray-200">
          id est ipsum labore ullamco laborum dolor
        </p>
      </div>

      <div className="sm:mt-14 mt-6 p-5 sm:p-20 w-[90%] flex sm:flex-row flex-col items-start justify-between">
        <div className="sm:w-1/2 w-full">
          <img src={assets.a6} className="w-full rounded-xl" />
        </div>

        <div className="ml-10 mt-5 sm:w-1/2 flex flex-col items-start">
          <h1 className=" text-4xl sm:text-7xl font-bold text-black">
            Who We Are?
          </h1>
          <p className="text-gray-400 font-normal leading-5 mt-4 text-start w-[90%] ">
            Loren Ipsum aute excepteur nostrud qui cupidatat commodo ex pariatur
            minim nulla ad in cupidatat laboris commodo anim ad sunt labore sunt
            magna duis occaecat eu nostrud mollit ex esse aliquip in excepteur
            dolore enim commodo elit cupidatat sit ad anim pariatur amet
            pariatur sunt amet ut commodo ad dolor non irure minim nulla cillum
            labore voluptate sit laborum ea mollit laboris eu sit veniam labore
            cillum sit proident dolore sunt non Lorem amet eiusmod sint proident
            est ipsum aute labore sunt proident est ad occaecat anim laborum ad
            consectetur dolor amet cupidatat consectetur reprehenderit voluptate
            ut incididunt laboris duis sint reprehenderit proident laboris elit
            proident nisi labore anim qui ad ex fugiat occaecat minim eiusmod
            laboris deserunt officia{" "}
          </p>
          <button className=" mt-6 sm:ml-40 px-7 py-4 text-white font-medium text-center bg-tertiary rounded ">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
