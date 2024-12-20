import { useRef, useState } from "react";

export default function UseRef() {
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const inputRef = useRef(null);

  function handleSend() {
    if (!text.trim()) {
      alert("input is empty!");
      inputRef.current?.focus();
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setText("");
    }, 2000);
  }

  return (
    <>
      <div>
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter something"
        />
        <button onClick={handleSend} disabled={sending}>
          {sending ? "Sending" : "send"}
        </button>
      </div>
      {sending && <p>Sending your message....</p>}
    </>
  );
}
