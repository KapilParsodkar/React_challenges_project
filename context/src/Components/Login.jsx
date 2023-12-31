import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setusername] = useState("");
  const [pwd, setpwd] = useState("");

  const { setUser } = useContext(UserContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({ username, pwd });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />

      <br />
      <input
        type="text"
        placeholder="password"
        value={pwd}
        onChange={(e) => setpwd(e.target.value)}
      />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}

export default Login;
