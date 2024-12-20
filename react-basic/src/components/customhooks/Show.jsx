import { useState } from "react";
import { useToggle } from "./useToggle";

export default function Show() {
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();
  return (
    <div>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h2>Hide Text</h2>}
      <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
      {isVisible2 && <h2>Hide Text</h2>}
    </div>
  );
}
