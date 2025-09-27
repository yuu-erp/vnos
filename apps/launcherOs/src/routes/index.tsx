import { useLayout } from "@/contexts/layout.context";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { Atom, EggFried, Search, Wifi } from "lucide-react";
import React from "react";

export const Route = createFileRoute("/")({
  component: LauncherOs,
});

const LIST_STATUSBAR = ["Finder", "File", "Edit", "View", "Go", "Help"];
function LauncherOs() {
  const layout = useLayout();
  return (
    <React.Fragment>
      <div className="w-screen h-screen flex items-stretch flex-col basis-auto shrink-0 relative z-0 overflow-hidden">
        <header
          className="fixed left-0 right-0 bg-black/[18] backdrop-blur-2xl z-10 px-1 item-center justify-between flex-row"
          style={{ height: `${layout.heightStatusBar}px` }}
        >
          <div className="justify-center flex-row">
            <button className="h-full px-[10px] hover:bg-white/20 rounded-[6px]">
              <Atom className="size-[20px] text-white" />
            </button>
            {LIST_STATUSBAR.map((item, idx) => (
              <button
                key={item}
                className={cn(
                  "h-full px-[10px] text-sm text-white hover:bg-white/20 rounded-[6px]",
                  idx === 0 ? "font-bold" : "font-semibold",
                )}
              >
                <span>{item}</span>
              </button>
            ))}
          </div>
          <div className="flex-row">
            <button className="h-full px-[10px] hover:bg-white/20 rounded-[6px]">
              <Wifi className="size-[20px] text-white" />
            </button>
            <button className="h-full px-[10px] hover:bg-white/20 rounded-[6px]">
              <Search className="size-[20px] text-white" />
            </button>
            <button className="h-full px-[10px] hover:bg-white/20 rounded-[6px]">
              <EggFried className="size-[20px] text-white" />
            </button>
            <div className="flex-row gap-2 px-[10px] text-sm text-white font-semibold">
              <span>Sat Sep 27</span>
              <span>10:11 PM</span>
            </div>
          </div>
        </header>
        <main
          className="w-full h-full justify-center items-center"
          style={{
            paddingTop: `${layout.heightStatusBar}px`,
            paddingBottom: "70px",
          }}
        >
          <div className="fixed inset-0 -z-10 flex items-center justify-center">
            <img
              src="/background.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          LAUNCHER OS | METANODE CO.
        </main>
        <div className="w-full h-[70px] items-center fixed bottom-0 left-1/2 -translate-x-1/2">
          <div
            className="bg-[#4A4A4A]/30 backdrop-blur-[30px] w-[80%] rounded-2xl"
            style={{
              height: `${layout.heightDock}px`,
            }}
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
}
