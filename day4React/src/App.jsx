import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Learning from "./Learning";
import MsgBox from "./MsgBox";

function App() {
  return (
    <div>
      <MsgBox userName="Ajay" textColor="red" />
      <MsgBox userName="Ajay" textColor="red" />
      <MsgBox userName="Arun" textColor="yellow" />
      <MsgBox userName="Mona" textColor="pink" />
      <MsgBox userName="Teena" textColor="blue" />
      <MsgBox userName="Radha" textColor="green" />
      <Learning title="hey" />;
    </div>
  );
}

export default App;
