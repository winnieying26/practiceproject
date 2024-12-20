import React, { useState, useRef,useEffect } from "react";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus(); // Focus username if it's empty
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setLoggedin(true);
      alert("Login successfully!");
    } else {
      setLoggedin(false);
      alert("Please enter correct uername and password");
      if (!username) {
        usernameRef.current.focus();
      } else if (!password) {
        passwordRef.current.focus();
      }
    }
  };

  return (
    <form className="login" onSubmit={handleLogin}>
      <h1>Login Form</h1>
      <div>
        <div>
          <label>username</label>
          <input
            ref={usernameRef}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <label>password</label>
          <input
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <button type="submit">Login</button>
      {loggedin && <p>Welcome {username}</p>}
    </form>
  );
};

export default LoginForm;
