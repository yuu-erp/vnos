import { motion } from "framer-motion";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  defaultPos?: { x: number; y: number };
}

export default function WindowWrapper({ children, defaultPos = { x: 100, y: 100 } }: Props) {
  const [position, setPosition] = useState(defaultPos);

  const snapToGrid = (x: number, y: number) => {
    const grid = 50; // size snap
    const snappedX = Math.round(x / grid) * grid;
    const snappedY = Math.round(y / grid) * grid;
    return { x: snappedX, y: snappedY };
  };

  return (
    <motion.div
      className="absolute w-[400px] h-[300px] rounded-xl shadow-xl bg-white/90 backdrop-blur-md overflow-hidden"
      drag
      dragMomentum={false}
      dragConstraints={{ left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight }}
      onDragEnd={(_, info) => {
        const { x, y } = snapToGrid(info.point.x, info.point.y);
        setPosition({ x, y });
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}
