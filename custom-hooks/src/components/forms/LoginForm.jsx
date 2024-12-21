import React, { useEffect, useRef } from "react";

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
  const username =usernameRef.current.value ;
   passwordRef.current.value = password;
  }, [username,password]);
  return (
    <form>
      <h1>Login Form</h1>
      <div>
        <label htmlFor="username">username</label>
        <input ref ={usernameRef} value ={username}/>
      </div>

      <div>
        <label htmlFor="password">password</label>
        <input ref={passwordRef} value={password} />
      </div>
    </form>
  );
};

export default LoginForm;
