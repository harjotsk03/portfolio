import React from "react";
import { FaCode, FaPenNib } from "react-icons/fa";

const Switch = ({ occupation, toggleOccupation }) => {
  return (
    <div className="flex items-center hover:cursor-pointer z-30 gap-4">
      <label
        className={`${
          occupation === "designer" ? "opacity-20" : "opacity-100"
        } poppins-semibold text-sm transition duration-500 ease-in-out`}
        htmlFor="occupation"
      >
        Designer
      </label>
      <div
        className={`relative lg:w-16 w-12 h-6 lg:h-8 flex items-center cursor-pointer rounded-full p-1 transition-colors duration-500 ${
          occupation === "developer" ? "bg-purple-400" : "bg-blue-300"
        }`}
        onClick={toggleOccupation}
      >
        <div
          className={`absolute top-0 left-0 w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded-full transition-transform duration-500 ease-in-out ${
            occupation === "developer"
              ? "transform translate-x-0 rotate-0"
              : "transform translate-x-full rotate-180"
          }`}
          style={{
            backgroundColor: occupation === "developer" ? "#6a0dad" : "#007bff",
          }}
        >
          {occupation === "developer" ? (
            <FaPenNib size={12} className="text-white" />
          ) : (
            <FaCode size={12} className="text-white" />
          )}
        </div>
      </div>
      <label
        className={`${
          occupation === "developer" ? "opacity-20" : "opacity-100"
        } poppins-semibold text-sm transition duration-500 ease-in-out`}
        htmlFor="occupation"
      >
        Developer
      </label>
    </div>
  );
};

export default Switch;
