import React from "react";

import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <main>
      <div className="w-full h-2 bg-red-700" />
      <div className="sticky top-0 z-[100] bg-wmsu-red">
        <Navigation />
      </div>
      <div>{children}</div>
    </main>
  );
}
