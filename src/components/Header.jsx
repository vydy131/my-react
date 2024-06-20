import React from "react";
import logo from '/logo-name.svg'

export function Header(){
  const now = new Date()
    return (
      <header>
        {/* <h3>Logo & name</h3> */}
        <img src={logo} alt="Some image here" />
        <span>Time now : {now.toLocaleTimeString()}</span>
      </header>
    )
  }