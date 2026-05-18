import { createContext } from "react";

export const loadingContext = createContext({
  isLoading: null,
  setIsLoading: null,
});
