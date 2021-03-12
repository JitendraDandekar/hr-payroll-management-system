import React, { useState } from "react";
import "./App.css";
import Router from "./components/navbar/Router";
import ContextProvider from "./components/API/Context";

function App() {
  return (
    <ContextProvider>
      <Router />
    </ContextProvider>
  );
}

export default App;
