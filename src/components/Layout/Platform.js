import React from "react";

import { classMerge } from "../../utils/TailwindUtilities";

export default function Platform({ children, className = "" }) {
  return (
    <div className={classMerge("flex flex-col items-center", className)}>
      <div className="w-[90vw] md:w-[75vw] lg:w-[75vw]">{children}</div>
    </div>
  );
}
