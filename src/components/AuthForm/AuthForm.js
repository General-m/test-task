import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./AuthForm.module.css";
import { Routes } from "../../constants/Routes";
import { authReducer, getLogin, getPassword } from "./authformSlice";

export const AuthForm = () => {
  const dispatch = useDispatch();
  const currentLogin = useSelector(getLogin);
  const currentPassword = useSelector(getPassword);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (login === currentLogin && password === currentPassword) {
      setIsButtonDisabled(false);
    }
  }, [login, password]);

  return (
    <div>
      <form className={classes.container}>
        <input
          className={classes.input}
          type="text"
          value={login}
          onChange={(ev) => setLogin(ev.target.value)}
          placeholder="login"
        />
        <input
          className={classes.input}
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="password"
        />
        <Link to={Routes.PROFILE}>
          <button
            className={classes.button}
            onClick={() => dispatch(authReducer())}
            type="submit"
            disabled={isButtonDisabled}
          >
            Войти
          </button>
        </Link>
      </form>
    </div>
  );
};
