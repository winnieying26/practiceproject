import ClassPost from "./components/class/ClassPost";
import Debounce from "./components/debounce/Debounce";
import FetchData from "./components/fetchdata/FetchData";
import LoginForm from "./components/forms/LoginForm";

import React, { useState } from "react";
//import ClassContextComponnent from "./components/contextapi/ClassContextComponent";
import FunctionContextComponent from "./components/contextapi/FunctionContextComponent";
import { ThemeProvider } from "./components/contextapi/ThemeContext";

function App() {
  return (
    <>
      {/*<FetchData /> <Debounce /><LoginForm /> <ClassPost /> <ClassContextComponnent /> */}
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
