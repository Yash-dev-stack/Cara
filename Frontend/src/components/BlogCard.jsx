import React from "react";

const BlogCard = ({ img, text, date }) => {
  return (
    <div className="flex sm:flex-row relative flex-col items-center justify-between mb-28 ">
      <div className="flex flex-col items-center justify-center mr-60 sm:mr-10 ">
        <img
          src={img}
          className="shadow-gray-300 z-10 sm:w-[460px] w-[100vw] h-[300px] rounded-md"
        />
      </div>

      <div className="flex flex-col items-start justify-between w-[600px]  ">
        <h3 className="text-gray-800  font-bold text-xl sm:text-2xl mb-3">
          The cotton jersey and Zip-Up Hoodie
        </h3>
        <p className="mb-3 text-[12px] font-normal sm:w-[600px] w-[360px]  text-gray-400">
          {text}
        </p>
        <div className="flex flex-row   gap-4">
          <p className="text-black font-medium mr-2">Continue reading</p>
          <hr className="w-14 font-extrabold h-6 text-black" />
        </div>
      </div>
      <h1 className="sm:text-7xl text-4xl absolute sm:left-0 top-[-54px] font-bold text-gray-400">
        {date}
      </h1>
    </div>
  );
};

export default BlogCard;
