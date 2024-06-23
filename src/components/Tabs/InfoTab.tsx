import { ReactNode } from "react";
import textData from "../../InfoText.json";

const styles = {
  container: {
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    marginBottom: "10px",
    position: "relative" as "relative",
  },
  title: {
    fontSize: "1.4em",
    margin: "0 0 10px 0",
  },
  description: {
    fontSize: "1.2em",
    margin: "0 0 20px 0",
  },
  metadata: {
    fontSize: "1em",
    color: "#888",
    position: "absolute" as "absolute",
    bottom: "0",
    right: "0",
  },
};

export default function InfoTab() {
  interface IText {
    title: string;
    description: string;
    metadata: string;
  }

  abstract class Action {
    abstract action(): ReactNode;
  }

  class InfoText extends Action implements IText {
    title: string;
    description: string;
    metadata: string;
    constructor(text: IText) {
      super();
      this.title = text.title;
      this.description = text.description;
      this.metadata = text.metadata;
    }
    action() {
      return (
        <div style={styles.container}>
          <h3 style={styles.title}>{this.title}</h3>
          <p style={styles.description}>{this.description}</p>
          <span style={styles.metadata}>{this.metadata}</span>
        </div>
      );
    }
  }

  function Array(args: Action[]) {
    let li_arr: ReactNode[] = [];
    for (let item of args) {
      let li_obj: ReactNode = <li>{item.action()}</li>;
      li_arr.push(li_obj);
    }
    return <ul>{li_arr}</ul>;
  }

  const texts: IText[] = textData.texts;

  const infos = texts.map((text: IText) => new InfoText(text));

  return <section>{Array(infos)}</section>;
}
