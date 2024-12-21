import { useDebugValue, useEffect, useRef, useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const debounceVal = useDebugValue(searchTerm, 500);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
    if(debounceVal){
        console.log(`Searching for: ${debounceVal}`)
    }
  }, [debounceVal]);
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="search"
      />
    </div>
  );
}
