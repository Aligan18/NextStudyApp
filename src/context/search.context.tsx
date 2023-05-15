import { createContext, ReactNode, useContext, useState } from "react";


interface ISearchContext {
    value: string;
    setValue?: (newValue: string) => void;
}




export const SearchContext = createContext<ISearchContext >({value : ""})

export const SearchProvider = ({value, children} : ISearchContext & {children: ReactNode}) =>{

    const [searchValue, setSearchValue] =useState<string>(value)
    const setValue = (newValue:string) =>{
        setSearchValue(newValue)
    }

    return (
    <SearchContext.Provider value={{value: searchValue ,setValue:setValue }}>
        {children}
    </SearchContext.Provider>
    )
}

export const useSearchContext =()=>{
   return  useContext(SearchContext)
}

