import React from "react";
import { featureData } from "../assets/assets.js";

const FeatureCards = () => {
  // Background color classes array
  const bgColor = [
    "bg-red-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-pink-100",
  ];

  return (
    <div className="flex items-center justify-between flex-wrap p-[21px] sm:p-[40px] space-y-[15px]">
      {featureData && featureData.length > 0 ? (
        featureData.map((elem, index) => (
          <div
            key={elem.id}
            className="sm:w-[180px] w-[160px] p-[18px] sm:p-[25px] text-center rounded-[5px] border border-borderColor shadow-box hover:shadow-hoverShadow"
          >
            <img
              className="w-full mb-2"
              src={elem.image}
              alt={`Feature ${index + 1}`}
            />

            <h6 className="font-[600] text-[12px] sm:text-[14px] text-secondary leading-tight p-0.5 mt-0.5 rounded-[4px]">
              <span
                className={`${
                  bgColor[index % bgColor.length]
                } inline-block p-1 mx-1 rounded`}
              >
                {elem.text}
              </span>
            </h6>
          </div>
        ))
      ) : (
        <p>No feature data available</p>
      )}
    </div>
  );
};

export default FeatureCards;
