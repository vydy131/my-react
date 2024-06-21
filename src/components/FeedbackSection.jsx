import { useState } from "react";
import { Button } from "./Button/Button";

export function FeedbackSection() {
  const [hasError, setHasError] = useState(false);
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  function handleReasonChange(event) {
    setReason(event.target.value);
  }

  function toggleError() {
    setHasError((prev) => !prev);
    // setHasError(!hasError);
  }

  return (
    <section>
      <h3>Feedback</h3>

      <Button onClick={toggleError}>Toggle error</Button>

      <form>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          style={{ border: hasError ? "1px solid red" : null }}
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
          <br />
          Reason: {reason}
        </pre>
        <Button disabled={hasError} isActive={!hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}
