import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className=" p-5 bg-white  rounded-lg shadow-md hover:shadow-xl  hover:bg-background-tertiary transition-all duration-500 ease-in-out ">
      <div className="flex justify-center items-center">
        <img
          className="rounded-lg"
          src="http://skyviewphysio.ca/img/ser-01.jpg"
          alt=""
        />
      </div>

      <div className="">
        <a href="#">
          <h2 className="mb-2 text-xl font-bold text-background-primary py-2.5">
            Noteworthy Technology
          </h2>
        </a>
        <p className="mb-3 text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so far
        </p>
        <a
          href="#"
          className="inline-flex items-center px-1 py-2 text-sm font-medium text-background-primary"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12M9 1l4 4-4 4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
