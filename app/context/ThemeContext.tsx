import React, {useEffect} from "react";

const getInitialTheme = () => {
    if (typeof window != "undefined" && window.localStorage){
        const storedPrefs = window.localStorage.getItem("color-theme");
        if (storedPrefs)
            return storedPrefs;

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches)
            return "light";
    }
    return "dark"
}

export const ThemeContext = React.createContext<any>(null);

export const ThemeProvider = ({ initialTheme, children } : {initialTheme : string, children : any}) => {
    const [theme, setTheme] = React.useState<string>(getInitialTheme());

    const rawSetTheme = (rawTheme : string) => {
        if (typeof window == "undefined") return;

        const root = window.document.documentElement;

        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
