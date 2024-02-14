'use client'

import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ZeroConnectionQuestion() {
    const { zeroQuestionData, setZeroQuestionData } = useAppContext()
    const router = useRouter()
    const [questionNo, setQuestionNo] = useState(0);
    const [givenAmount, setGivenAmount] = useState(0);
    const [activeQuestionValue, setActiveQuestionValue] = useState<string | number | null>(null);

    const zeroConnectionPrize = {
        sevenDays: 0.30,
        fifteenDays: 0.35,
        thirtyDays: 0.50,
        threeMonths: 1.00,
        sixMonths: 2.00,
        oneYear: 2.80,
        fourYear: 4.00,
        tenYear: 5.30,
        moreThanTenYear: 5.50
    }

    const previousQuestionHandler = () => {
        if (questionNo > 0) {
            setQuestionNo(prev => prev - 1)
        }
    }

    const nextQuestionHandler = () => {
        if (questionNo < 5 && activeQuestionValue !== null) {
            setQuestionNo(prev => prev + 1)
            setActiveQuestionValue(null)
        }
        if (activeQuestionValue === null) {
            toast.error("Please select one option")
        }
    }

    const handleFinalSubmit = () => {
        if (activeQuestionValue !== null) {
            setQuestionNo(prev => prev + 1)
            toast.success("your checkout is successful.")
            router.push('/order/zero-connection')
        } else {
            toast.error("Please select one option")
        }
    }

    const handleSubmit = (value: any, days?: string) => {
        if (questionNo === 0) {
            setZeroQuestionData({ ...zeroQuestionData, location: value })
        }
        if (questionNo === 1) {
            setZeroQuestionData({ ...zeroQuestionData, prize: value, accountAge: days })
        }
        if (questionNo === 2) {
            if (value === "check") {
                const checkPrize = givenAmount * zeroQuestionData.prize
                setZeroQuestionData({ ...zeroQuestionData, accountAmount: givenAmount, totalPrize: checkPrize.toFixed(2) })
            }
        }
        setActiveQuestionValue(value)
    }

    return (
        <div className='max-w-4xl mx-auto py-4 lg:py-0 px-2 lg:px-0'>
            {/* {zeroQuestionData.quantity}, {zeroQuestionData.connection} {activeQuestionValue !== null ? "true" : "false"} , {zeroQuestionData.accountAge}, {zeroQuestionData.connectionType} ,{activeQuestionValue} */}
            {
                questionNo < 3 && (<div className={`${questionNo === 0 && 'w-1/3' || questionNo === 1 && 'w-2/3' || questionNo === 2 && 'w-3/3'} bg-gradient-to-tr from-blue-300 bg-blue-800 h-1.5 rounded-md mb-6`}>

                </div>)
            }

            {
                questionNo === 0 && (
                    <div className='p-4 lg:p-8 myShadow rounded'>
                        <h2 className="text-xl font-medium">01. What will be the location of the account that you want to buy? </h2>
                        <div className='grid grid-cols-4 gap-6 pt-6'>
                            <button onClick={() => handleSubmit("any")} className={`optionButton ${activeQuestionValue === "any" && 'bg-primary text-white'}`}>Any Location</button>
                            <button onClick={() => handleSubmit("us")} className={`optionButton ${activeQuestionValue === "us" && 'bg-primary text-white'}`}>United States</button>
                            <button onClick={() => handleSubmit("uk")} className={`optionButton ${activeQuestionValue === "uk" && 'bg-primary text-white'}`}>United Kingdom</button>
                            <button onClick={() => handleSubmit("france")} className={`optionButton ${activeQuestionValue === "france" && 'bg-primary text-white'}`}>France</button>
                            <button onClick={() => handleSubmit("spain")} className={`optionButton ${activeQuestionValue === "spain" && 'bg-primary text-white'}`}>Spain</button>
                            <button onClick={() => handleSubmit("india")} className={`optionButton ${activeQuestionValue === "india" && 'bg-primary text-white'}`}>India</button>
                        </div>
                    </div>
                )
            }

            {
                questionNo === 1 && (
                    <div className='p-4 lg:p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">02. Age of the account you want to buy?</h2>
                        <div className='grid grid-cols-2 gap-6 pt-6'>
                            <button onClick={() => handleSubmit(zeroConnectionPrize.sevenDays, "0-7 days")} className={`optionButtonPrize group ${activeQuestionValue === zeroConnectionPrize.sevenDays && 'bg-primary text-white'}`}>
                                <span>0-7 days</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === zeroConnectionPrize.sevenDays && 'text-white/50'}`}>{zeroConnectionPrize.sevenDays} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(zeroConnectionPrize.fifteenDays, "7-15 days")} className={`optionButtonPrize group ${activeQuestionValue === zeroConnectionPrize.fifteenDays && 'bg-primary text-white'}`}>
                                <span>7-15 days</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === zeroConnectionPrize.fifteenDays && 'text-white/50'}`}>{zeroConnectionPrize.fifteenDays} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(zeroConnectionPrize.thirtyDays, "16-30 days")} className={`optionButtonPrize group ${activeQuestionValue === zeroConnectionPrize.thirtyDays && 'bg-primary text-white'}`}>
                                <span>16-30 days</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === zeroConnectionPrize.thirtyDays && 'text-white/50'}`}>{zeroConnectionPrize.thirtyDays} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(zeroConnectionPrize.threeMonths, "1-3 month")} className={`optionButtonPrize group ${activeQuestionValue === zeroConnectionPrize.threeMonths && 'bg-primary text-white'}`}>
                                <span>1-3 month</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === zeroConnectionPrize.threeMonths && 'text-white/50'}`}>{zeroConnectionPrize.threeMonths} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(zeroConnectionPrize.sixMonths, "3-6 month")} className={`optionButtonPrize group ${activeQuestionValue === zeroConnectionPrize.sixMonths && 'bg-primary text-white'}`}>
                                <span>3-6 month</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === zeroConnectionPrize.sixMonths && 'text-white/50'}`}>{zeroConnectionPrize.sixMonths} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(zeroConnectionPrize.oneYear, "6-12 month")} className={`optionButtonPrize group ${activeQuestionValue === zeroConnectionPrize.oneYear && 'bg-primary text-white'}`}>
                                <span>6-12 month</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === zeroConnectionPrize.oneYear && 'text-white/50'}`}>{zeroConnectionPrize.oneYear} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(zeroConnectionPrize.fourYear, "1-4 year")} className={`optionButtonPrize group ${activeQuestionValue === zeroConnectionPrize.fourYear && 'bg-primary text-white'}`}>
                                <span>1-4 year</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === zeroConnectionPrize.fourYear && 'text-white/50'}`}>{zeroConnectionPrize.fourYear} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(zeroConnectionPrize.tenYear, "5-10 year")} className={`optionButtonPrize group ${activeQuestionValue === zeroConnectionPrize.tenYear && 'bg-primary text-white'}`}>
                                <span>5-10 year</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === zeroConnectionPrize.tenYear && 'text-white/50'}`}>{zeroConnectionPrize.tenYear} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(zeroConnectionPrize.moreThanTenYear, "10 year+")} className={`optionButtonPrize group ${activeQuestionValue === zeroConnectionPrize.moreThanTenYear && 'bg-primary text-white'}`}>
                                <span>10 year+</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === zeroConnectionPrize.moreThanTenYear && 'text-white/50'}`}>{zeroConnectionPrize.moreThanTenYear} $ per Account</span>
                            </button>
                        </div>
                    </div>
                )
            }

            {
                questionNo === 2 && (
                    <div className='p-4 lg:p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">04. How much account do you want to buy?</h2>
                        <div className='grid grid-cols-2 gap-6 pt-6'>
                            <input value={givenAmount} min={0} onChange={(e) => setGivenAmount(parseInt(e.target.value))} placeholder="Enter account number" type="number" className="px-4 border-2 rounded border-gray-300" />
                            <button onClick={() => handleSubmit("check")} disabled={givenAmount <= 0} className={`optionButton disabled:bg-gray-200 disabled:text-gray-400 ${givenAmount > 0 && 'bg-primary text-white'}`}>Check Prize</button>
                        </div>
                        {
                            zeroQuestionData.totalPrize > 0 &&
                            <div className='pt-4 px-4 text-lg font-medium text-center'>
                                For {zeroQuestionData.accountAge} age {zeroQuestionData.accountAmount} account total prize is <span className="text-blue-700">{zeroQuestionData.totalPrize} $</span>
                            </div>
                        }
                    </div>
                )
            }

            {
                questionNo < 3 &&
                <div className='flex items-center justify-between my-6'>
                    <button onClick={previousQuestionHandler} className="text-lg  px-10 font-medium bg-white text-black/80 myShadow rounded py-1.5 hover:bg-primary hover:text-white">Previous</button>
                    {
                        activeQuestionValue === "check" ?
                            <button onClick={handleFinalSubmit} className={`optionButton  px-10 ${(activeQuestionValue !== null) && 'bg-primary text-white'}`}>Submit</button>
                            :
                            <button onClick={nextQuestionHandler} className={`optionButton  px-10 ${(activeQuestionValue !== null) && 'bg-primary text-white'}`}>Next</button>
                    }
                </div>
            }
        </div>
    );
};
