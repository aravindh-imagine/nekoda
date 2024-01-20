import React, { createContext, useEffect, useState } from "react";

export const cursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBg, setCursorBg] = useState("default");

  useEffect(() => {
    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.addEventListener("mousemove", move);
  });

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#000000",
      transition: {
        delay: 0,
        duration: 0,
      },
    },
    text: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#FFFFFF",
      // color: "#FFF",
      mixBlendMode: "difference",
      width: "80px",
      height: "80px",
      transition: {
        delay: 0,
        duration: 0,
      },
    },
  };

  const mouseEnterHandler = () => {
    // debugger;
    setCursorBg("text");
  };

  const mouseLeaveHandler = () => {
    setCursorBg("default");
  };

  return (
    <cursorContext.Provider
      value={{
        cursorVariants,
        cursorBg,
        mouseEnterHandler,
        mouseLeaveHandler,
      }}>
      {children}
    </cursorContext.Provider>
  );
};

export default CursorProvider;
