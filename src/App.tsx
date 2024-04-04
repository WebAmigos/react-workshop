import "./App.css";
import { Counter } from "./components/Counter";
import { Generator } from "./components/Generator";
import {
  RegistrationFormRefs,
  RegistrationFormState,
} from "./components/RegistrationForm";

function App() {
  return (
    <>
      {/* <Generator /> */}
      {/* <Counter /> */}
      {/* <RegistrationFormState /> */}
      <RegistrationFormRefs />
    </>
  );
}

export default App;
