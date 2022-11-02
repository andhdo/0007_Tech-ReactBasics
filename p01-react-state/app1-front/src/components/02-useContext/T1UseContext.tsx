import { createContext, useContext, useState } from "react";
import "./T1UseContext.scss";

const MyThemeContext = createContext(null);
const T1UseContext = () => {
  const [theme, setTheme] = useState("light");
  return (
    <MyThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        Use darkmode
      </label>
    </MyThemeContext.Provider>
  );
};

const Form = () => {
  return (
    <Panel title="Welcome to Blueboard">
      <Button>Signup</Button>
      <Button>Login</Button>
    </Panel>
  );
};

const Panel = ({ title, children }) => {
  const theme = useContext(MyThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

const Button = ({ children }) => {
  const theme = useContext(MyThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
};

export { T1UseContext };
