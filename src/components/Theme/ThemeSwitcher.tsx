import { MouseEventHandler, useState } from "react";
import { Theme, useThemeContext } from "./ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import { Button } from "../../ui";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const context = useThemeContext();

  const handleClick: MouseEventHandler = () => {
    context.toggle();
    setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  const icon =
    theme === Theme.DARK ? (
      <SunIcon
        onClick={handleClick}
        className="h-4 w-4 text-slate-300 cursor-pointer"
      />
    ) : (
      <MoonIcon
        onClick={handleClick}
        className="h-4 w-4 text-slate-900 cursor-pointer"
      />
    );

  return <div className="mb-4">{icon}</div>;
};
