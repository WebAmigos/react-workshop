import { createContext } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  toggleValue: () => void;
};

const defaultValues: AuthContextType = {
  isLoggedIn: false,
  toggleValue: () => null,
};

export const AuthContext = createContext<AuthContextType>(defaultValues);

AuthContext.displayName = "AuthContext";

// AuthContext.Provider
