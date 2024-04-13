import { MouseEventHandler } from "react";
import { useThemeContext } from "./ThemeContext";

export const ThemeSwitcher = () => {
  const context = useThemeContext();

  const handleClick: MouseEventHandler = () => {
    context.toggle();
  };

  return (
    <div>
      <button onClick={handleClick}>Switch Theme</button>
    </div>
  );
};
