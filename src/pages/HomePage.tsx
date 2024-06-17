import { AuthCredentials } from "../components/Auth/AuthCredentials";
import { ViewPort } from "../components/ViewPort";

export const HomePage = () => {
  return (
    <div>
      <h1 className="dark:text-slate-300">Hello from home!</h1>
      {/* <AuthCredentials /> */}
      <ViewPort />
    </div>
  );
};
