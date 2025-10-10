import { createContext, useContext } from "react"

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
    theme: Theme,
    changeTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined!)

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    
    if(context ===  undefined) {
        throw new Error('useTheme должен использоваться внутри ThemeProvider')
    }
    return context;
}



