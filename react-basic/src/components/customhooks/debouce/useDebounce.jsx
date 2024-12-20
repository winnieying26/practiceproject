import { useEffect, useState } from "react";

export default function useDebounce(initialVal, delay) {
  const [debounceVal, setDebounceVal] = useState(initialVal);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(initialVal);
    }, delay);
    return () => clearTimeout(handler);
  }, [initialVal, delay]);

  return debounceVal;
}

