import React, { useState } from "react";
import "./style.css";
// why color of div change when you clicked on increment or decrement btn
// change color of div only when you click on increment btn
// don't use any global state or defined any global variable
export default function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const bg = getRandomHexColor();
  return (
<div style={{ color: bg }}>
<h1>Hi click on increment or decrement btn , let see magic </h1>
<button onClick={() => setFirst((k) => k + 1)}> increment </button>
<button onClick={() => setSecond((k) => k - 1)}> decrement </button>
</div>
  );
}
function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, "0")}`;
}
