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

  return (
    <div>
      <Header />

      <main>
        <section>
          <h3>Text</h3>
          <ul>
            <Text {...ways[0]} />
            <Text {...ways[1]} />
            <Text {...ways[2]} />
            <Text {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Another text</h3>
          <Button onClick={() => handleClick("way")}>Zer</Button>
          <Button onClick={() => handleClick("easy")}>One</Button>
          <Button onClick={() => handleClick("program")}>Two</Button>

          {!content && <p>Press a button</p>}
          {content && <p>{differences[content]}</p>}
        </section>
      </main>
    </div>
  );
}
