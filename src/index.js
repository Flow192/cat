import React from "react";
import { createRoot } from "react-dom/client";
import App from "../src/components/app/app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

/*
function App() {
  {
  return (
  <>
  <p>Test</p>
  </>
)}
}

export default App;
*/
