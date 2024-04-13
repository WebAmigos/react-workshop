import { MouseEventHandler } from "react";
import { useThemeContext } from "./ThemeContext";
import { Button } from "../../ui";

export const ThemeSwitcher = () => {
  const context = useThemeContext();

  const handleClick: MouseEventHandler = () => {
    context.toggle();
  };

  return (
    <div>
      <Button label="Switch Theme" onClick={handleClick} />
    </div>
  );
};
