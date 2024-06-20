import { Header } from "./components/Header";
import { ways } from "../src/data";
import { Text } from "./components/Text";
import { Button } from "./components/Button/Button";

export default function App() {
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
          <Button>Zer</Button>
          <Button>One</Button>
          <Button>Two</Button>
        </section>
      </main>
    </div>
  );
}
