'use client'

import { useState } from "react";
import toast from "react-hot-toast";

export default function QuestionSection() {
    const [questionNo, setQuestionNo] = useState(0);
    const [activeQuestionValue, setActiveQuestionValue] = useState<string | number | null>(null);
    const [questionData, setQuestionData] = useState({
        quantity: 0,
        connection: 0,
        accountAge: 0,
        connectionType: "",
        emailType: "",
        accountVerification: ""
    })

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
            toast.success("your submit is permitted")
        }
        toast.error("Please select one option")
    }

    const handleSubmit = (value: any) => {
        if (questionNo === 0) {
            setQuestionData({ ...questionData, quantity: value })
        }
        if (questionNo === 1) {
            setQuestionData({ ...questionData, connection: value })
        }
        if (questionNo === 2) {
            setQuestionData({ ...questionData, accountAge: value })
        }
        if (questionNo === 3) {
            setQuestionData({ ...questionData, connectionType: value })
        }
        if (questionNo === 4) {
            setQuestionData({ ...questionData, emailType: value })
        }
        if (questionNo === 5) {
            setQuestionData({ ...questionData, accountVerification: value })
        }
        setActiveQuestionValue(value)
    }

    return (
        <div className='max-w-4xl mx-auto py-6 pt-12'>
            {/* {questionData.quantity}, {questionData.connection} {activeQuestionValue !== null ? "true" : "false"} , {questionData.accountAge}, {questionData.connectionType} ,{activeQuestionValue} */}
            {
                questionNo < 6 && (<div className={`${questionNo === 0 && 'w-1/6' || questionNo === 1 && 'w-2/6' || questionNo === 2 && 'w-3/6' || questionNo === 3 && 'w-4/6' || questionNo === 4 && 'w-5/6' || questionNo === 5 && 'w-6/6'} bg-gradient-to-tr from-blue-300 bg-blue-800 h-1.5 rounded-md mb-6`}>

                </div>)
            }

            {
                questionNo === 0 && (
                    <div className='p-8 myShadow rounded'>
                        <h2 className="text-xl font-medium">01. How much accounts do you want to buy? </h2>
                        <div className='grid grid-cols-4 gap-6 pt-6'>
                            <button onClick={() => handleSubmit(100)} className={`optionButton ${activeQuestionValue === 100 && 'bg-primary text-white'}`}>100</button>
                            <button onClick={() => handleSubmit(200)} className={`optionButton ${activeQuestionValue === 200 && 'bg-primary text-white'}`}>200</button>
                            <button onClick={() => handleSubmit(300)} className={`optionButton ${activeQuestionValue === 300 && 'bg-primary text-white'}`}>300</button>
                            <button onClick={() => handleSubmit(400)} className={`optionButton ${activeQuestionValue === 400 && 'bg-primary text-white'}`}>400</button>
                            <button onClick={() => handleSubmit(500)} className={`optionButton ${activeQuestionValue === 500 && 'bg-primary text-white'}`}>500</button>
                            <button onClick={() => handleSubmit(600)} className={`optionButton ${activeQuestionValue === 600 && 'bg-primary text-white'}`}>600</button>
                        </div>
                    </div>
                )
            }
            {
                questionNo === 1 && (
                    <div className='p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">02. Required number of connection /friends per accounts?</h2>
                        <div className='grid grid-cols-4 gap-6 pt-6'>
                            <button onClick={() => handleSubmit(10)} className={`optionButton ${activeQuestionValue === 10 && 'bg-primary text-white'}`}>10+</button>
                            <button onClick={() => handleSubmit(20)} className={`optionButton ${activeQuestionValue === 20 && 'bg-primary text-white'}`}>20+</button>
                            <button onClick={() => handleSubmit(30)} className={`optionButton ${activeQuestionValue === 30 && 'bg-primary text-white'}`}>30+</button>
                            <button onClick={() => handleSubmit(50)} className={`optionButton ${activeQuestionValue === 50 && 'bg-primary text-white'}`}>50+</button>
                            <button onClick={() => handleSubmit(100)} className={`optionButton ${activeQuestionValue === 100 && 'bg-primary text-white'}`}>100+</button>
                            <button onClick={() => handleSubmit(200)} className={`optionButton ${activeQuestionValue === 200 && 'bg-primary text-white'}`}>200+</button>
                            <button onClick={() => handleSubmit(300)} className={`optionButton ${activeQuestionValue === 300 && 'bg-primary text-white'}`}>300+</button>
                            <button onClick={() => handleSubmit(500)} className={`optionButton ${activeQuestionValue === 500 && 'bg-primary text-white'}`}>500+</button>
                            <button onClick={() => handleSubmit(1000)} className={`optionButton ${activeQuestionValue === 1000 && 'bg-primary text-white'}`}>1000+</button>
                        </div>
                    </div>
                )
            }
            {
                questionNo === 2 && (
                    <div className='p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">03. Required age of the accounts?</h2>
                        <div className='grid grid-cols-4 gap-6 pt-6'>
                            <button onClick={() => handleSubmit(7)} className={`optionButton ${activeQuestionValue === 7 && 'bg-primary text-white'}`}>0-7 days</button>
                            <button onClick={() => handleSubmit(15)} className={`optionButton ${activeQuestionValue === 15 && 'bg-primary text-white'}`}>7-15 days</button>
                            <button onClick={() => handleSubmit(30)} className={`optionButton ${activeQuestionValue === 30 && 'bg-primary text-white'}`}>16-30 days</button>
                            <button onClick={() => handleSubmit(90)} className={`optionButton ${activeQuestionValue === 90 && 'bg-primary text-white'}`}>1-3 month</button>
                            <button onClick={() => handleSubmit(180)} className={`optionButton ${activeQuestionValue === 180 && 'bg-primary text-white'}`}>3-6 month</button>
                            <button onClick={() => handleSubmit(360)} className={`optionButton ${activeQuestionValue === 360 && 'bg-primary text-white'}`}>6-12 month</button>
                            <button onClick={() => handleSubmit(1460)} className={`optionButton ${activeQuestionValue === 1460 && 'bg-primary text-white'}`}>1-4 year</button>
                            <button onClick={() => handleSubmit(3600)} className={`optionButton ${activeQuestionValue === 3600 && 'bg-primary text-white'}`}>5-10 year</button>
                            <button onClick={() => handleSubmit(4000)} className={`optionButton ${activeQuestionValue === 4000 && 'bg-primary text-white'}`}>10 year+</button>
                        </div>
                    </div>
                )
            }

            {
                questionNo === 3 && (
                    <div className='p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">04. Which connection type do you need?</h2>
                        <div className='grid grid-cols-2 gap-6 pt-6'>
                            <button onClick={() => handleSubmit('organic')} className={`optionButton ${activeQuestionValue === 'organic' && 'bg-primary text-white'}`}>Organically Grower (Real connection)</button>
                            <button onClick={() => handleSubmit('manually')} className={`optionButton ${activeQuestionValue === 'manually' && 'bg-primary text-white'}`}>Manually Grower (CSV)</button>
                        </div>
                    </div>
                )
            }
            {
                questionNo === 4 && (
                    <div className='p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">05. Which type Email will be associated with your linkedin accounts?</h2>
                        <div className='grid grid-cols-4 gap-6 pt-6'>
                            <button onClick={() => handleSubmit('any')} className={`optionButton ${activeQuestionValue === 'any' && 'bg-primary text-white'}`}>Any email</button>
                            <button onClick={() => handleSubmit('gmail')} className={`optionButton ${activeQuestionValue === 'gmail' && 'bg-primary text-white'}`}>gmail.com</button>
                            <button onClick={() => handleSubmit('yahoo')} className={`optionButton ${activeQuestionValue === 'yahoo' && 'bg-primary text-white'}`}>yahoo.com</button>
                            <button onClick={() => handleSubmit('outlook')} className={`optionButton ${activeQuestionValue === 'outlook' && 'bg-primary text-white'}`}>outlook.com</button>
                            <button onClick={() => handleSubmit("mail")} className={`optionButton ${activeQuestionValue === "mail" && 'bg-primary text-white'}`}>mail.com</button>
                        </div>
                    </div>
                )
            }
            {
                questionNo === 5 && (
                    <div className='p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">06. Which verification type do you need?</h2>
                        <div className='grid grid-cols-2 gap-6 pt-6'>
                            <button onClick={() => handleSubmit('verified')} className={`optionButton ${activeQuestionValue === 'verified' && 'bg-primary text-white'}`}>Verified account</button>
                            <button onClick={() => handleSubmit('non-verified')} className={`optionButton ${activeQuestionValue === 'non-verified' && 'bg-primary text-white'}`}>Non verified account</button>
                        </div>
                    </div>
                )
            }

            {questionNo === 6 && (
                <div className='px-8 py-6 myShadow rounded'>
                    <h2 className="text-xl font-medium text-center">Your Submitted Answers</h2>
                    <div className='space-y-2 pt-4'>
                        <div className=''>
                            <h2 className="text-xl">01. How much accounts do you want to buy? </h2>
                            <h2 className="text-xl font-medium">Ans: {questionData.quantity}</h2>
                        </div>
                        <div className=''>
                            <h2 className="text-xl">02. Required number of connection /friends per accounts?</h2>
                            <h2 className="text-xl font-medium">Ans: {questionData.connection}</h2>
                        </div>
                        <div className=''>
                            <h2 className="text-xl">03. Required age of the accounts?</h2>
                            <h2 className="text-xl font-medium">Ans: {questionData.accountAge}</h2>
                        </div>
                        <div className=''>
                            <h2 className="text-xl">04. Which connection type do you need?</h2>
                            <h2 className="text-xl font-medium">Ans: {questionData.connectionType}</h2>
                        </div>
                        <div className=''>
                            <h2 className="text-xl">05. Which type Email will be associated with your linkedin accounts?</h2>
                            <h2 className="text-xl font-medium">Ans: {questionData.emailType}</h2>
                        </div>
                        <div className=''>
                            <h2 className="text-xl">06. Which verification type do you need?</h2>
                            <h2 className="text-xl font-medium">Ans: {questionData.accountVerification}</h2>
                        </div>
                    </div>
                    <h2 className="text-xl font-medium text-center pt-4 text-primary">Give Your  Email or WhatsApp or messenger link or Skype</h2>
                    <div className='grid grid-cols-2 gap-6 pt-4'>
                        <input type="text" placeholder="Your Email account here" className="border border-gray-300 rounded py-1 px-4" />
                        <input type="text" placeholder="Your WhatsApp number here" className="border border-gray-300 rounded py-1 px-4" />
                        <input type="text" placeholder="Your messenger account here" className="border border-gray-300 rounded py-1 px-4" />
                        <input type="text" placeholder="Your Skype account here" className="border border-gray-300 rounded py-1 px-4" />
                    </div>
                    <div className='pt-4 flex items-center justify-center'>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-medium rounded px-6 py-1.5">Order Now</button>
                    </div>
                </div>
            )
            }

            {
                questionNo < 6 &&
                <div className='flex items-center justify-between my-6'>
                    <button onClick={previousQuestionHandler} className="text-lg  px-10 font-medium bg-white text-black/80 myShadow rounded py-1.5 hover:bg-primary hover:text-white">Previous</button>
                    {
                        questionNo === 5 ?
                            <button onClick={handleFinalSubmit} className={`optionButton  px-10 ${(activeQuestionValue !== null) && 'bg-primary text-white'}`}>Submit</button>
                            :
                            <button onClick={nextQuestionHandler} className={`optionButton  px-10 ${(activeQuestionValue !== null) && 'bg-primary text-white'}`}>Next</button>
                    }
                </div>
            }
        </div>
    );
};
