import { useState } from "react";
import { Button } from "./Button/Button";

export function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleReasonChange(event) {
    setReason(event.target.value);
  }

  return (
    <section>
      <h3>Feedback</h3>

      <form>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Feedback's reason</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={handleReasonChange}
        >
          <option value="error">Have error</option>
          <option value="help">Need help</option>
          <option value="suggest">Have suggest</option>
        </select>
        <pre>
          Name: {name}
          Reason: {reason}
        </pre>
        <Button>Отправить</Button>
      </form>
    </section>
  );
}
