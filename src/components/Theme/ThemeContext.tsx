import { createContext, useContext, useRef } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: React.MutableRefObject<Theme>;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
ThemeContext.displayName = "ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  }
  throw new Error("Component should be placed inside ThemeContextProvider");
};

const useTheme = () => {
  // const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const theme = useRef<Theme>(Theme.LIGHT);

  const toggle = () => {
    if (theme.current === Theme.DARK) {
      // setTheme(Theme.LIGHT);
      theme.current = Theme.LIGHT;
      document.body.classList.remove("dark");
    } else {
      // setTheme(Theme.DARK);
      theme.current = Theme.DARK;
      document.body.classList.add("dark");
    }
  };

  return { theme, toggle };
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};
