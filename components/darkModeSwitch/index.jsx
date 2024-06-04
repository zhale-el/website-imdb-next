"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="text-2xl cursor-pointer transition-all duration-500 hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="text-2xl cursor-pointer transition-all duration-500 hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
