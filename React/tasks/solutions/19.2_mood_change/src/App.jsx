import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';

export const ThemeContext = createContext();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ]
  }
]);

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
