import { useState, useEffect } from "react";


export const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: light)").matches;

    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    
    const mqListener = ((e: any) => {
        setIsDarkTheme(e.matches);
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: light)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
}