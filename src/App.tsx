import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { AuthContextProvider } from "./components/Auth/AuthContext";
import { ThemeContextProvider } from "./components/Theme/ThemeContext";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { router } from "./routes";
import { store } from "./store";

import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary
        fallback={<p className="dark:text-slate-300">General error</p>}
      >
        <Provider store={store}>
          <ThemeContextProvider>
            {/* <ThemeSwitcher /> */}
            <AuthContextProvider>
              <RouterProvider router={router} />
            </AuthContextProvider>
            {/* <ErrorBoundary>
            <AuthInfo />
          </ErrorBoundary> */}
          </ThemeContextProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
