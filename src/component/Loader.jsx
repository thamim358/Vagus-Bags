import React from "react";
import { grid } from "ldrs";
grid.register();

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        {/* Your loader animation */}
        <l-grid size="100" speed="1.5" color="#ff5c2a"></l-grid>
      </div>
    </div>
  );
};

export default Loader;
