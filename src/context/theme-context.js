import { createContext, useContext, useReducer,useEffect } from "react";
import { themeReducer } from "./themeReducer";

export const ThemeContext = createContext();

const initialThemeStates = {primary: 'color-1', background: 'bg-1'}

export const ThemeProvider = ({children}) => {
    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeStates);

    const themeHandler = (buttonClassName) => {
        dispatchTheme({type: buttonClassName})
    }

    return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}