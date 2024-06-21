import React, { useState } from "react";
import logo from "/logo-name.svg";
import "./Header.css";

export function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      {/* <h3>Logo & name</h3> */}
      <img src={logo} alt="Some image here" />
      <span>Time now : {now.toLocaleTimeString()}</span>
    </header>
  );
}
