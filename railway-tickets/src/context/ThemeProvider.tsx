import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  type ThemeContextType,
  ThemeContext,
  type Theme,
} from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  const changeTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const contextValue: ThemeContextType = useMemo(
    () => ({ theme, changeTheme }),
    [theme]
  );

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
}

export default ThemeProvider;
