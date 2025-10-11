import react, { useContext, useEffect } from 'react';
import { ThemeContext } from './UseContextHook';



export const ThemeData = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    useEffect(() => {
        theme === 'light' ? document.body.style.backgroundColor="white" : document.body.style.backgroundColor= "black"
    },[theme])
    return <>
        <h1>{theme.theme}</h1>
        {
            theme === 'light' ? <button onClick={() => setTheme("Dark")}>Click for Dark Theme</button> : <button onClick={() => setTheme('light')}>Click for Light Theme</button>
        }
    </>
}