import React, {useContext, useEffect, useMemo, useState} from "react";

export interface ScrollPageInterface {
    currentPage : number
    setCurrentPage : () => void
}

export const ScrollPageContext = React.createContext<any>(null)

export const ScrollPageProvider = ({children} : any) => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        setCurrentPage(currentPage)
    }, [currentPage])

    return <ScrollPageContext.Provider value={useMemo(() => ({
        currentPage,
        setCurrentPage
    }), [currentPage])}>
        {children}
    </ScrollPageContext.Provider>
}

export const useScroller = () => {
    return useContext(ScrollPageContext)
}