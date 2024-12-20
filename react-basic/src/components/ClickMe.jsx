import { useRef, useState } from "react";

export default function ClickMe() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null); // RETURN AN OBEJECT

  function handleInput() {
    inputRef.current.focus(); // directly focus on the input field
    inputRef.current.style.backgroundColor = "blue"
  }

  return (
    <div>
      <label>name</label>
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter yourname"
      />
      <button onClick={handleInput}>Click me</button>
    </div>
  );
}
