import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Navigation() {
    const themeContext = useContext(ThemeContext);
    const clickHandler = () => {
        console.log(themeContext.darkTheme);
        themeContext.setDarkTheme(!themeContext.darkTheme);
    };

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
                <button onClick={clickHandler}>Dark Theme</button>
            </header>
        </>
    );
}

export default Navigation;
