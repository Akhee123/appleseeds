import './About.css'
import { ThemeContext } from "../App";
import { useContext } from "react";

function About() {
    const themeContext = useContext(ThemeContext);

    return (
        <div className={themeContext.darkTheme ? 'dark' : 'light'}>
            <h1>This is about</h1>
        </div>
    );
}

export default About;
