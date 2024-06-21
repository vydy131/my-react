import { useState } from "react";
import { Button } from "./Button/Button";

function StateVSRef() {}

export function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  function handleNameChange(event) {
    setForm({
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
      reason: form.reason,
    });
  }

  function handleReasonChange(event) {
    setForm({
      reason: event.target.value,
      name: form.name,
      hasError: form.hasError,
    });
  }

  function toggleError() {
    setForm((prev) => ({
      ...prev,
      hasError: !form.hasError,
    }));
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
          value={form.name}
          style={{ border: form.hasError ? "1px solid red" : null }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Feedback's reason</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={handleReasonChange}
        >
          <option value="error">Have error</option>
          <option value="help">Need help</option>
          <option value="suggest">Have suggest</option>
        </select>
        <pre>{JSON.stringify(form, null, 2)}</pre>
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}
