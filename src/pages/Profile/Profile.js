import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import { authReducer, getLogin } from "../../components/AuthForm/authformSlice";
import classes from "./Profile.module.css";

export const Profile = () => {
  const dispatch = useDispatch();
  const currentLogin = useSelector(getLogin);
  return (
    <div>
      <h1 style={{ color: "#C0C0C0" }}>{currentLogin}</h1>
      <Link to={Routes.MAIN}>
        <button
          className={classes.button}
          onClick={() => dispatch(authReducer())}
          type="submit"
        >
          Выйти
        </button>
      </Link>
    </div>
  );
};
