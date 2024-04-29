"use client";

import { useState } from "react";
import { logIn, logOut, toggleModerator } from "./redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "./redux/store";

export default function LogIn() {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state: any) => state.authReducer.value.isAuth);

  const handleChange = (e: any) => {
    setUserName(e.target.value);
  };

  const onClickLogIn = () => {
    dispatch(logIn(userName));
  };

  const onClickLogOut = () => {
    setUserName("");
    dispatch(logOut());
  };

  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  return (
    <div>
      <input type="text" value={userName} onChange={(e) => handleChange(e)} />
      <br />
      <button onClick={onClickLogIn}> Log In</button>
      <br />
      <button onClick={onClickLogOut}> Log Out</button>
      <br />
      {isAuth && (
        <button onClick={onClickToggle}> Toggle Moderator Status</button>
      )}
    </div>
  );
}
