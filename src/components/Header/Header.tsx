import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  });
  return (
    <header>
      <h1>My website</h1>
      <span>{now.toLocaleTimeString()}</span>
    </header>
  );
}
