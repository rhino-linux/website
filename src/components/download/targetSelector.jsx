import React, { useState } from "react";
import TargetGeneric from "./targetGeneric";
import TargetPine from "./targetPine";
import TargetRpi from "./targetRpi";

const targets = [
  {
    id: "generic",
    name: "Desktop",
    architecture: "x86_64/ARM64",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "pine",
    name: "Pine64",
    architecture: "PinePhone/PineTab/PineTab2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "rpi",
    name: "Raspberry Pi",
    architecture: "Desktop/Server",
    image: "https://via.placeholder.com/150",
  },
];

const TargetSelector = () => {
  const [target, setTarget] = useState(null);
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const handleButtonClick = (id) => {
    setTarget(id);
    setButtonsVisible(false);
  };

  const renderTarget = () => {
    switch (target) {
      case "generic":
        return <TargetGeneric />;
      case "pine":
        return <TargetPine />;
      case "rpi":
        return <TargetRpi />;
      default:
        return null;
    }
  };

  return (
    <div className="text-center lg:w-[65%] w-[95%] mx-auto mb-16 mt-16">
      {buttonsVisible && (
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-16 my-8">
          {targets.map((target) => (
            <button
              key={target.id}
              onClick={() => handleButtonClick(target.id)}
              className="flex flex-col items-center p-4 md:p-8 rounded-md border-2 border-rhino-purple hover:shadow-bxs hover:scale-105 transition-all"
              style={{ minWidth: "300px" }} // Ensure minimum width for each button
            >
              <img
                src={target.image}
                alt={target.name}
                className="w-full h-32 md:h-40 mb-2 rounded object-cover"
              />
              <span className="text-white text-xl md:text-3xl">{target.name}</span>
              <span className="text-white text-sm md:text-lg">({target.architecture})</span>
            </button>
          ))}
        </div>
      )}
      <div className="mt-8">{renderTarget()}</div>
    </div>
  );
};



export default TargetSelector;
