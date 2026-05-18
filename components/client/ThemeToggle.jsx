"use client";

import {useState, useEffect} from "react";

const ThemeToggle = () =>{
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() =>{
        const savedTheme = localStorage.getItem("theme");

        if(savedTheme === "dark"){
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, [])

    function toggleTheme(){
        const newTheme = !darkMode;

        setDarkMode(newTheme);

        if(newTheme){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }
    
    return(
        <button
            onClick={toggleTheme}
            aria-label = "Theme Toggle"
            className = "ThemeToggle"
        >
            {darkMode ? "☀️" : "🌙"}
        </button>
    )
}

export default ThemeToggle