import "./App.css";
import {
  AuthContext,
  AuthContextProvider,
} from "./components/Auth/AuthContext";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { Counter } from "./components/Counter";
import { Generator } from "./components/Generator";
import {
  RegistrationFormRefs,
  RegistrationFormRefsCustomInput,
  RegistrationFormRefsHookForm,
  RegistrationFormState,
} from "./components/RegistrationForm";
import { ThemeContextProvider } from "./components/Theme/ThemeContext";
import { ThemeSwitcher } from "./components/Theme/ThemeSwitcher";
import { ViewPort } from "./components/ViewPort";

function App() {
  return (
    <>
      {/* <Generator /> */}
      {/* <Counter /> */}
      {/* <RegistrationFormState /> */}
      {/* <RegistrationFormRefs /> */}
      {/* <RegistrationFormRefsCustomInput /> */}
      {/* <RegistrationFormRefsHookForm /> */}
      {/* <ViewPort /> */}

      <ThemeContextProvider>
        <ThemeSwitcher />
        <AuthContextProvider>
          <AuthInfo />
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
