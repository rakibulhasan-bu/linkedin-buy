'use client'

import { useState } from "react";
import toast from "react-hot-toast";
import ZeroConnectionQuestion from "./ZeroConnectionQuestion";
import OneOrMoreConnectionQuestion from "./OneOrMoreConnectionQuestion";

export default function QuestionSection() {
    const [accountType, setAccountType] = useState("");
    const [activeQuestion, setActiveQuestion] = useState("");

    const nextButtonHandler = () => {
        if (accountType !== "") {
            setActiveQuestion(accountType)
        }

        if (accountType === "") {
            toast.error("Please select one option")
        }
    }

    return (
        <div className='max-w-4xl mx-auto py-4 lg:py-6 lg:pt-12 px-2 lg:px-0'>
            {
                activeQuestion === "" && <div className='p-4 lg:p-8 myShadow rounded mt-10'>
                    <h2 className="text-xl font-medium">What type of account do you need?</h2>
                    <div className='grid grid-cols-2 gap-6 pt-6'>
                        <button onClick={() => setAccountType('zero')} className={`optionButton ${accountType === 'zero' && 'bg-primary text-white'}`}>0 Connection Account</button>
                        <button onClick={() => setAccountType('one')} className={`optionButton ${accountType === 'one' && 'bg-primary text-white'}`}>1 or more Connection Account</button>
                    </div>
                </div>
            }

            {
                activeQuestion === "" && <div className='flex items-center justify-end my-6'>
                    <button onClick={nextButtonHandler} className={`optionButton  px-10 ${(accountType !== "") && 'bg-primary text-white'}`}>Next</button>
                </div>
            }

            {
                activeQuestion === "zero" && <ZeroConnectionQuestion />
            }
            {
                activeQuestion === "one" && <OneOrMoreConnectionQuestion />
            }
        </div>
    )
};
