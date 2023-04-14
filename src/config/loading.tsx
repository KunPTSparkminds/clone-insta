import { createContext, ReactNode, useState } from "react";

interface LoadingState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

interface Loadingprops {
  children: ReactNode;
}

export const LoadingContext = createContext<LoadingState>({
  isLoading: false,
  setLoading: () => {},
});

export const LoadingProvider: React.FC<Loadingprops> = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
