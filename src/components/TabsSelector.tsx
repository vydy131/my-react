import { useState } from "react";
import Button from "./Button/Button";
import InfoTab from "./Tabs/InfoTab";
import ListTab from "./Tabs/ListTab";
import FormTab from "./Tabs/FormTab";
import AboutTab from "./Tabs/AboutTab";

export default function TabsSelector() {
  enum Tabs {
    info = "information",
    form = "form",
    about = "about",
    list = "list",
  }
  const [current, setCurrent] = useState(Tabs.info);

  return (
    <>
      <Button
        onClick={() => setCurrent(Tabs.info)}
        active={current === Tabs.info}
      >
        Info
      </Button>
      <Button
        onClick={() => setCurrent(Tabs.form)}
        active={current === Tabs.form}
      >
        Forms
      </Button>
      <Button
        onClick={() => setCurrent(Tabs.about)}
        active={current === Tabs.about}
      >
        About
      </Button>
      <Button
        onClick={() => setCurrent(Tabs.list)}
        active={current === Tabs.list}
      >
        List
      </Button>{" "}
      <br />
      {current === Tabs.info && <InfoTab />}
      {current === Tabs.form && <FormTab />}
      {current === Tabs.about && <AboutTab />}
      {current === Tabs.list && <ListTab />}
    </>
  );
}
