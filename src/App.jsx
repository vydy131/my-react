import { Header } from "./components/Header";
import { TextView } from "./components/TextView";
import { ButtonSection } from "./components/ButtonSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <TextView />
        <ButtonSection />
      </main>
    </>
  );
}
