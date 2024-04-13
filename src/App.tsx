import { RouterProvider } from "react-router-dom";

import { AuthContextProvider } from "./components/Auth/AuthContext";
import { ThemeContextProvider } from "./components/Theme/ThemeContext";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { router } from "./routes";

import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary
        fallback={<p className="dark:text-slate-300">General error</p>}
      >
        <ThemeContextProvider>
          {/* <ThemeSwitcher /> */}
          <AuthContextProvider>
            <RouterProvider router={router} />
          </AuthContextProvider>
          <ErrorBoundary>
            <AuthInfo />
          </ErrorBoundary>
        </ThemeContextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
