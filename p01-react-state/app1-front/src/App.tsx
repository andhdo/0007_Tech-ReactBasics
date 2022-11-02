import React from "react";
import "./App.css";
import { SampleForUseState } from "./components/01-useState/SampleForUseState";
import { T0UseStateCounter } from "./components/01-useState/T0UseState";
import { T1UseContext } from "./components/02-useContext/T1UseContext";
import TheApp from "./components/03-useDispatch/TheApp";

function App() {
  return (
    <>
      <SampleForUseState />
      <T0UseStateCounter />
      <T1UseContext />
      <TheApp />
    </>
  );
}

export default App;
