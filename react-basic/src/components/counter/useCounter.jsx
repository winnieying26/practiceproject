import { useState } from "react";

export default function useCounter(initialVal = 0) {
  const [count, setCount] = useState(initialVal);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev + 1);
  }
  function reset(){
    setCount(initialVal)
  }
  return {count, increment, decrement, reset}
}
