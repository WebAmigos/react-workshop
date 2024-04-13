import { useState } from "react";
import "./App.css";
import { AuthContext } from "./components/Auth/AuthContext";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { Counter } from "./components/Counter";
import { Generator } from "./components/Generator";
import {
  RegistrationFormRefs,
  RegistrationFormRefsCustomInput,
  RegistrationFormRefsHookForm,
  RegistrationFormState,
} from "./components/RegistrationForm";
import { ViewPort } from "./components/ViewPort";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleValue = () => setIsLoggedIn((value) => !value);

  return (
    <>
      {/* <Generator /> */}
      {/* <Counter /> */}
      {/* <RegistrationFormState /> */}
      {/* <RegistrationFormRefs /> */}
      {/* <RegistrationFormRefsCustomInput /> */}
      {/* <RegistrationFormRefsHookForm /> */}
      {/* <ViewPort /> */}
      <AuthContext.Provider value={{ isLoggedIn, toggleValue }}>
        <AuthInfo />
      </AuthContext.Provider>
    </>
  );
}

export default App;
