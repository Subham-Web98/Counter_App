import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Try() {
  return <h4>Try</h4>;
}

root.render(
  <div>
    <h1> This is a Counter App</h1>
    
    {/* <Try /> */}
    <App />
  </div>
);
