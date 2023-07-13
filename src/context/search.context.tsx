import { createContext, ReactNode, useContext, useState } from "react";

interface ISearchContext {
  isFocused: boolean;
  setIsFocused: (newValue: boolean) => void;
}

export const SearchContext = createContext<ISearchContext>({
  isFocused: false,
  setIsFocused: () => {},
});

export const SearchProvider = ({
  isFocused,
  children,
}: ISearchContext & { children: ReactNode }) => {
  const [searchIsFocused, setSearchIsFocused] = useState<boolean>(isFocused);
  const changeIsFocused = (newValue: boolean) => {
    setSearchIsFocused(newValue);
  };

  return (
    <SearchContext.Provider
      value={{ isFocused: searchIsFocused, setIsFocused: changeIsFocused }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
