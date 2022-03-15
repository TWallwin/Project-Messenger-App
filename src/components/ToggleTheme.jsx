import { useContext } from "react";
import ThemeContext from "../contexts/Theme";

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
  };

  return (
    <button type="button" onClick={toggleTheme} className={`button__${theme}`}>
      Change theme
    </button>
  );
}

export default ToggleTheme;
