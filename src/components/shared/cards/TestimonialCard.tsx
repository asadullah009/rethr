import React from "react";

const TestimonialCard = () => {
  return (
    <div className=" p-5 bg-white border  rounded-lg shadow-md hover:shadow-xl hover:bg-background-tertiary transition-all duration-500 ease-in-out ">
      <div className="flex justify-satrt items-center py-5">
        <img
          className="rounded-full h-24 w-24"
          src="http://skyviewphysio.ca/img/ser-01.jpg"
          alt=""
        />
      </div>

      <div className="">
        <h2 className="mb-2 text-lg font-bold text-content-primary py-2.5">
          &ldquo;Amazing services&rdquo;
        </h2>
        <p className="mb-3 text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          maiores. Natus dolorem eos pariatur quia beatae repellat a dolorum
          minus.
        </p>
        <p className=" items-center px-1 py-1 text-lg font-medium text-background-primary">
          john Deo
        </p>
        <p className=" items-center px-1  text-md font-medium text-content-primary">
          john Deo
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
