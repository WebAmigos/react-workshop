import { type MouseEventHandler } from "react";

import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const { isLoggedIn, toggleValue, logIn, logOut } = useAuthContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    toggleValue();
  };

  return (
    <div>
      <p>Is user logged? {isLoggedIn ? "YES" : "NO"}</p>
      <button onClick={handleClick}>Toggle</button>
      <button onClick={logIn}>Log in</button>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};
