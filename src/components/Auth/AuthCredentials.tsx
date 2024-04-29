import { MouseEventHandler, useContext } from "react";

import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const { isLoggedIn, toggleValue } = useContext(AuthContext);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    toggleValue();
  };

  return (
    <div>
      <p>Is user logged? {isLoggedIn ? "YES" : "NO"}</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};
