import React from "react";
import Statusbar from "../components/statusbar";
import Dock from "../components/dock";

export default function LauncherPage() {
  return (
    <React.Fragment>
      <main className="w-screen h-screen overflow-hidden">
        <Statusbar />
        LAUNCHER OS | VIETNAM OS.
        <div className="fixed inset-0 -z-10 flex items-center justify-center">
          <img
            src="/background.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <Dock />
      </main>
    </React.Fragment>
  );
}
