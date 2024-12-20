import { useState, useEffect } from "react";

export function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);

  function toggle(){
    setState((prev) => !prev);
  }

  return [state, toggle];
}
