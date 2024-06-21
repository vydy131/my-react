import { Header } from "./components/Header";
import { ways, differences } from "../src/data";
import { Text } from "./components/Text";
import { Button } from "./components/Button/Button";
import { useState } from "react";

export default function App() {
  const [content, setContent] = useState(null);

  function handleClick(type) {
    setContent(type);
  }

  let tabContent = null;
  if (content) {
    tabContent = <p>{differences[content]}</p>;
  } else {
    tabContent = "Press a button";
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Text</h3>
          <ul>
            {ways.map((way) => (
              <Text key={way.title} {...way} />
            ))}
          </ul>
        </section>
        <section>
          <h3>Another text</h3>
          <Button
            isActive={content === "way"}
            onClick={() => handleClick("way")}
          >
            Zer
          </Button>
          <Button
            isActive={content === "easy"}
            onClick={() => handleClick("easy")}
          >
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
      </main>
    </div>
  );
}
