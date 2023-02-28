import './Home.css'
import { ThemeContext } from "../App";
import { useContext } from "react";

function Home() {
    const themeContext = useContext(ThemeContext);

    return (
        <div className={themeContext.darkTheme ? 'dark' : 'light'}>
            <h1>This is home</h1>
        </div>
    );
}

export default Home;
