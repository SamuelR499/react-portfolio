import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from './themeReducer';


export const ThemeContext = createContext();

const initialThemeStates = {primary: 'color-1', background: 'bg-1'}

export const ThemeProvider = ({children}) => {
    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeStates);

    const themeHandler = (buttonClassName) => {
        dispatchTheme({type: buttonClassName})
    }
    console.log(themeState);

    //save theme settings to local storage
    useEffect(()=>{
        localStorage.setItem('themeSettings',JSON.stringify(themeState))
    },[themeState.primary, themeState.background]);


    return <ThemeContext.Provider value={{themeState, themeHandler}}>{children}</ThemeContext.Provider>
}

// custom hook to use our theme contex wherever we want in our project
export const useThemeContext = () => {
    return useContext(ThemeContext);
}