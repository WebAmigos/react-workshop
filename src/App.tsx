import { RouterProvider } from "react-router-dom";

import { AuthContextProvider } from "./components/Auth/AuthContext";
import { ThemeContextProvider } from "./components/Theme/ThemeContext";
import { router } from "./routes";

import "./App.css";

function App() {
  return (
    <>
      <ThemeContextProvider>
        {/* <ThemeSwitcher /> */}
        <AuthContextProvider>
          <RouterProvider router={router} />
          {/* <AuthInfo /> */}
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
