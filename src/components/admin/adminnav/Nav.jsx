import React from "react";
import style from "./nav.module.css";
import { useAuth, logout } from "../../../context/auth/AuthState";

function Nav() {
  const [authState, authDispatch] = useAuth();
  const { user } = authState;

  const onClick = () => {
    logout(authDispatch);
  };

  return (
    <div className={style.nav}>
      <div>Hello, {user.name}</div>
      <div className={style.logout} onClick={onClick}>
        logout
      </div>
    </div>
  );
}

export default Nav;
