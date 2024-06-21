import { Text } from "./Text";
import { ways } from "../data";

export function TextView() {
  return (
    <section>
      <h3>Text</h3>
      <ul>
        {ways.map((way) => (
          <Text key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}
