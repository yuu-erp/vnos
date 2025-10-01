import React from "react";

function Dock() {
  return (
    <React.Fragment>
      <nav className="h-17.5 fixed left-0 right-0 bottom-0 flex justify-center">
        <div className="docks-app h-[65px] bg-[#4A4A4A]/40 backdrop-blur-2xl rounded-2xl px-1 flex-row shadow">
          <div className="h-full items-center">
            <div className="size-14 rounded-2xl">
              <img src="/icon_512x512.png" alt="" />
            </div>
            <span className="size-1 bg-white rounded-full"></span>
          </div>
          <div className="h-full items-center">
            <div className="size-14 rounded-2xl">
              <img src="/Bitmap.png" alt="" />
            </div>
            <span className="size-1 bg-white rounded-full"></span>
          </div>
          <div className="h-full items-center">
            <div className="size-14 rounded-2xl">
              <img src="/safari_512x512.png" alt="" />
            </div>
            <span className="size-1 bg-white rounded-full"></span>
          </div>
          <div className="h-full items-center">
            <div className="size-14 rounded-2xl">
              <img src="/message_512x512.png" alt="" />
            </div>
            <span className="size-1 bg-white rounded-full"></span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default React.memo(Dock);
