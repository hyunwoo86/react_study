import { useContext, useState } from "react";
import "./App.css";
import Page from "./component/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContextName } from "./context/UserContextName";

function App() {
  const [isDark, setIsDark] = useState(false);
  const value_data = useContext(UserContextName);
  console.log("use: " + value_data);
  return (
    <UserContextName.Provider value={value_data}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page></Page>;
      </ThemeContext.Provider>
    </UserContextName.Provider>
  );
}

export default App;
