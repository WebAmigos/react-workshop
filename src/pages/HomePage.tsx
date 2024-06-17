import { AuthCredentials } from "../components/Auth/AuthCredentials";

export const HomePage = () => {
  return (
    <div>
      <h1 className="dark:text-slate-300">Hello from home!</h1>
      <AuthCredentials />
    </div>
  );
};
