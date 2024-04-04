import "./App.css";
import { Counter } from "./components/Counter";
import { Generator } from "./components/Generator";
import {
  RegistrationFormRefs,
  RegistrationFormRefsCustomInput,
  RegistrationFormRefsHookForm,
  RegistrationFormState,
} from "./components/RegistrationForm";

function App() {
  return (
    <>
      {/* <Generator /> */}
      {/* <Counter /> */}
      {/* <RegistrationFormState /> */}
      {/* <RegistrationFormRefs /> */}
      {/* <RegistrationFormRefsCustomInput /> */}
      <RegistrationFormRefsHookForm />
    </>
  );
}

export default App;
