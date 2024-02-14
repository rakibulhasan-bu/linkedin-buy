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
        emailType: "",
        accountVerification: ""
    })

    const [questionData, setQuestionData] = useState({
        quantity: 0,
        connection: 0,
        accountAge: 0,
        connectionType: "",
        emailType: "",
        accountVerification: ""
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