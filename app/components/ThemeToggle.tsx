import React from 'react';
import {WiDaySunny, WiMoonrise} from "react-icons/wi"

import {ThemeContext} from '../context/ThemeContext';

const ThemeToggle = () => {
    const {theme, setTheme} = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {
                theme == "light"
                    ?
                    <WiMoonrise onClick={() => setTheme("dark")}/>
                    :
                    <WiDaySunny onClick={() => setTheme("light")}/>
            }
        </div>
    );
}

export default ThemeToggle;
