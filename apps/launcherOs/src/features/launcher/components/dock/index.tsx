import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/components/ui/tooltip";
import React from "react";

const apps = [
  { icon: "/icon_512x512.png", name: "Finder" },
  { icon: "/Bitmap.png", name: "Photos" },
  { icon: "/safari_512x512.png", name: "Safari" },
  { icon: "/message_512x512.png", name: "Messages" },
];

function Dock() {
  return (
    <nav className="h-17.5 fixed left-0 right-0 bottom-0 flex justify-center">
      <div className="docks-app h-[65px] bg-[#4A4A4A]/40 backdrop-blur-2xl rounded-2xl px-1 flex-row shadow">
        {apps.map((app, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <div className="h-full flex flex-col items-center justify-center cursor-pointer group">
                <div className="size-14 rounded-2xl overflow-hidden">
                  <img src={app.icon} alt={app.name} />
                </div>
                <span className="size-1 bg-white rounded-full mt-1"></span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="docks-app bg-[#4A4A4A]/40 backdrop-blur-2xl">
              <span className="font-semibold text-sm">{app.name}</span>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </nav>
  );
}

export default React.memo(Dock);
