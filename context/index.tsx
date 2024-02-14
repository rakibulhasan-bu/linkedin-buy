'use client'

import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [zeroQuestionData, setZeroQuestionData] = useState({
        location: "",
        accountAge: "",
        prize: 0,
        totalPrize: 0,
        accountAmount: 0
    })

    const [questionData, setQuestionData] = useState({
        connectionType: "",
        location: "",
        quantity: 0,
        connection: 0,
        accountAge: "",
        prize: 0,
        accountAmount: 0
    })

    const contextValue = {
        zeroQuestionData, setZeroQuestionData,
        questionData, setQuestionData
    }
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}