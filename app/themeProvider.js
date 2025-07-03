"use client";

import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const pathname = usePathname();
  const [isTurnToDark, setIsTurnToDark] = useState(false);
  const themeColors = {
    themeYellow: "#fca311",
    themeGray: "#e5e5e5",
  };

  useEffect(() => {
    if (pathname.includes("/projects")) {
      setIsTurnToDark(true);
    } else {
      setIsTurnToDark(false);
    }
  }, [pathname]);

  return (
    <ThemeContext.Provider
      value={{ isTurnToDark, themeColors, setIsTurnToDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
