import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CredentialsContext } from "../App";
import Todos from "../components/Todos";

export default function Welcome() {
  const [credentials, setCredentials] = useContext(CredentialsContext);
  const logout = () => {
    setCredentials(null);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">
  <a class="navbar-brand" href="/">GoTo-Do</a>
  {credentials && <button class="btn btn-outline-light" onClick={logout}>Logout</button>}
</nav>
        <h1>Welcome {credentials && credentials.username}</h1>
      <br/>
      {!credentials && <Link class="btn btn-light btn-lg" to="/register">Register</Link>}
      <br />
      <br/>
      {!credentials && <a class="btn btn-dark btn-lg" href="/login" role="button">Login</a>}
      
      {credentials && <Todos />}
    </div>
  );
}