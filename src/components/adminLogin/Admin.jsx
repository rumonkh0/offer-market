import React, { useState, useEffect } from "react";
import { useAuth, login } from "../../context/auth/AuthState";
import Adminh from "../admin/Adminh";
import Moderatorh from "../moderator/Moderatorh";
import "./admin.css";
function Admin() {
  const [authState, authDispatch] = useAuth();
  const { error, isAuthenticated, loading, user } = authState;

  const [formData, setFormData] = useState({});

  useEffect(() => {}, [error, isAuthenticated, authDispatch, loading]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login(authDispatch, formData);
  };

  if (loading) {
    return <div>loading</div>;
  }

  if (isAuthenticated && user.role === "admin") return <Adminh />;
  if (isAuthenticated && user.role === "moderator") return <Moderatorh />;
  return (
    <div id="conatiner">
      <h1 id="header">Please sign in</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="finput"
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="finput"
          onChange={onChange}
        />
        <input type="submit" value="Sign in" className="fbutton" />
      </form>
      <p className="copyRight">© 2023</p>
    </div>
  );
}

export default Admin;
