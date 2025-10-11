import { useEffect, useState } from "react";

export const ToggleSwitch = () => {
    const [theme, setTheme] = useState('white');
    useEffect(() => {
        localStorage.setItem('theme',theme)
        document.body.style.backgroundColor=theme 
         document.body.style.color=theme === 'white' ? 'black' : 'white';
    },[theme])

   const  handelClick = () => {
    setTheme(theme === 'white' ? 'black' : 'white');
   }
    return <div class='my-auto'>
        <h1 style={{color:"Red"}}>Welcome to GitHub projects of Hema M</h1>
        <button onClick={handelClick}>{`Change the theme to ${theme === 'white' ? 'dark' : 'light'}`}</button>
    </div>
}