import { Header } from "./components/Header/Header";
import { TextView } from "./components/TextView";
import { ButtonSection } from "./components/ButtonSection";
import { IntroSection } from "./components/IntroSection";
import { TabsSection } from "./components/TabsSection";
import { FeedbackSection } from "./components/FeedbackSection";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("main");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(active) => setTab(active)} />

        {tab === "main" && (
          <>
            <TextView />
            <ButtonSection />
          </>
        )}

        {tab === "feedback" && (
          <>
            <FeedbackSection />
          </>
        )}
      </main>
    </>
  );
}
