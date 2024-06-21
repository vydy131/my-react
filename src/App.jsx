import { Header } from "./components/Header";
import { TextView } from "./components/TextView";
import { ButtonSection } from "./components/ButtonSection";
import { IntroSection } from "./components/IntroSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TextView />
        <ButtonSection />
      </main>
    </>
  );
}
