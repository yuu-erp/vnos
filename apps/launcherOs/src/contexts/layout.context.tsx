import { HEIGHT_DOCK, HEIGHT_STATUSBAR } from "@/constants/setting.constant";
import React, { useState } from "react";

export interface LayoutContentProps {
  heightStatusBar: number;
  heightDock: number;
}

const LayoutContext = React.createContext<LayoutContentProps>(null!);

export interface LayoutContextProviderProps extends React.PropsWithChildren {}
export function LayoutContextProvider({ children }: LayoutContextProviderProps) {
  const [layout, setLayout] = useState<LayoutContentProps>({
    heightStatusBar: HEIGHT_STATUSBAR,
    heightDock: HEIGHT_DOCK,
  });
  return <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>;
}
export function useLayout() {
  return React.useContext(LayoutContext);
}
