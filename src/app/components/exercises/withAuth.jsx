import React, { useState } from "react";

const withAuth = (SimpleComponent) => (props) => {
  const isAuth = localStorage.getItem("user");
  const [status, setStatus] = useState(isAuth);
  const onLogIn = () => {
    localStorage.setItem("user", true);
    setStatus(!status);
  };
  const onLogOut = () => {
    localStorage.setItem("user", false);
    setStatus(!status);
  };
  return (
  <>
  {status
    ? <SimpleComponent { ...props } onClick={onLogOut} name="LogOut" />
    : <SimpleComponent { ...props } onClick={onLogIn} name="LogIn" />}
  </>
  );
};

export default withAuth;
