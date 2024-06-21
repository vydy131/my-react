import { Button } from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export function ButtonSection() {
  const [content, setContent] = useState(null);

  function handleClick(type) {
    setContent(type);
  }
  return (
    <section>
      <h3>Another text</h3>
      <Button isActive={content === "way"} onClick={() => handleClick("way")}>
        Zer
      </Button>
      <Button isActive={content === "easy"} onClick={() => handleClick("easy")}>
        One
      </Button>
      <Button
        isActive={content === "program"}
        onClick={() => handleClick("program")}
      >
        Two
      </Button>
      {!content && <p>Press a button</p>}
      {content && <p>{differences[content]}</p>}
    </section>
  );
}
