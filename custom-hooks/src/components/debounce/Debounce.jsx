import useDebounce from "./useDebounce";
import React, { useState, useEffect, useRef } from "react";

const Debounce = () => {
  const [searchKey, setSearchKey] = useState("");
  const searchRef = useRef();
  const debounceVal = useDebounce(searchKey, 500);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  useEffect(() => {
    if (debounceVal) {
      console.log(`Searching for: ${debounceVal}`);
    }
  }, []);
  return (
    <div>
      <input
        ref={searchRef}
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default Debounce;
