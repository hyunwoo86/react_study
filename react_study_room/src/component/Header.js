import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContextName } from "../context/UserContextName";
const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const value01 = useContext(UserContextName);
  console.log("header: " + value01);
  console.log("header: " + isDark);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? true : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>welcome {value01}</h1>
    </header>
  );
};

export default Header;
