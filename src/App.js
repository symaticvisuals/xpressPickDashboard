import React from "react";

import "./App.css";
import WrapperRouter from "./router/routerWrapper";
const modeProvider = React.createContext();
function App() {
  const [mode, setMode] = React.useState("");
  return (
    <div className={`App ${mode}`}>
      <modeProvider.Provider value={{ mode, setMode }}>
        <WrapperRouter />
      </modeProvider.Provider>
    </div>
  );
}

export { App, modeProvider };
//TODO: whenever dark class is added to the root the dark theme will be applied to the entire app.
