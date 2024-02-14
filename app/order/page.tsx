'use client'

import { useAppContext } from "@/context";

export default function OrderPage() {
    const { questionData } = useAppContext()
    return (
        <div className='container mx-auto min-h-screen py-6 px-2 lg:px-0'>
            <h2 className="text-center text-xl lg:text-2xl font-medium">Seize the Opportunity: Order Now to Skyrocket Your LinkedIn Influence!</h2>

            <div className='px-4 lg:px-8 py-4 lg:py-6 myShadow rounded my-8'>
                <h2 className="text-xl font-medium text-center">Your Submitted Answers</h2>
                <div className='grid gap-y-2 grid-cols-1 lg:grid-cols-2 pt-4'>
                    <div className=''>
                        <h2 className="text-lg">01. How much accounts do you want to buy? </h2>
                        <h2 className="text-lg text-blue-500 font-medium">Ans: {questionData.quantity}</h2>
                    </div>
                    <div className=''>
                        <h2 className="text-lg">02. Required number of connection /friends per accounts?</h2>
                        <h2 className="text-lg text-blue-500 font-medium">Ans: {questionData.connection}</h2>
                    </div>
                    <div className=''>
                        <h2 className="text-lg">03. Required age of the accounts?</h2>
                        <h2 className="text-lg text-blue-500 font-medium">Ans: {questionData.accountAge}</h2>
                    </div>
                    <div className=''>
                        <h2 className="text-lg">04. Which connection type do you need?</h2>
                        <h2 className="text-lg text-blue-500 font-medium">Ans: {questionData.connectionType}</h2>
                    </div>
                    <div className=''>
                        <h2 className="text-lg">05. Which type Email will be associated with your linkedin accounts?</h2>
                        <h2 className="text-lg text-blue-500 font-medium">Ans: {questionData.emailType}</h2>
                    </div>
                    <div className=''>
                        <h2 className="text-lg">06. Which verification type do you need?</h2>
                        <h2 className="text-lg text-blue-500 font-medium">Ans: {questionData.accountVerification}</h2>
                    </div>
                </div>
            </div>
            <h2 className="text-xl font-medium text-center pt-4 text-gray-900">Give Your  Email or WhatsApp or Telegram link or Skype</h2>
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
    );
};
