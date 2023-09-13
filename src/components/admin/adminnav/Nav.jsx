import React from "react";
import { Link } from "react-router-dom";
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
      <div className={style.middle}>
        <Link to="/admin/controllers" className={style.menu}>
          controllers
        </Link>
        <Link to="/admin/requests" className={style.menu}>
          requests
        </Link>
        <Link to="/admin/products" className={style.menu}>
          products
        </Link>
      </div>
      <div>
        <div className={style.menu + " " + style.logout} onClick={onClick}>
          logout
        </div>
      </div>
    </div>
  );
}

export default Nav;
