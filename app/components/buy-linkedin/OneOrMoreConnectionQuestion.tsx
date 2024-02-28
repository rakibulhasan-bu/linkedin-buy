'use client'

import { TManualPrice } from "@/app/interface/manual-price";
import { TOrganicPrice } from "@/app/interface/organic-price";
import { useAppContext } from "@/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function OneOrMoreConnectionQuestion() {
    const [organicPrice, setOrganicPrice] = useState<TOrganicPrice>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://linkedin-buy-server.vercel.app/api/organic-price/65de9591ddb773b06d55c449');
                setOrganicPrice(response?.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const [manualPrice, setManualPrice] = useState<TManualPrice>();
    const [manualLoading, setManualLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://linkedin-buy-server.vercel.app/api/manual-price/65ded3011ec8223f23f25e6f');
                setManualPrice(response?.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setManualLoading(false);
            }
        };

        fetchData();
    }, []);

    const { questionData, setQuestionData } = useAppContext();
    const router = useRouter()
    const [questionNo, setQuestionNo] = useState(0);
    const [givenAmount, setGivenAmount] = useState(0);
    const [activeQuestionValue, setActiveQuestionValue] = useState<string | number | null>(null);

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
            router.push('/order/one-more-connection')
            toast.success("your submit is permitted")
        } else {
            toast.error("Please select one option")
        }
    }

    const handleSubmit = (value: any, days?: string) => {
        if (questionNo === 0) {
            setQuestionData({ ...questionData, connectionType: value })
        }
        if (questionNo === 1) {
            setQuestionData({ ...questionData, location: value })
        }
        if (questionNo === 2) {
            if (questionData?.connectionType === "organic") {
                setQuestionData({ ...questionData, organicConnection: value })
            } else if (questionData?.connectionType === "manually") {
                setQuestionData({ ...questionData, manualConnection: value })
            }
        }
        if (questionNo === 3) {
            if (questionData?.connectionType === "organic") {
                setQuestionData({ ...questionData, organicPrize: value, organicAccountAge: days })
            } else if (questionData?.connectionType === "manually") {
                setQuestionData({ ...questionData, manualPrize: value, manualAccountAge: days })
            }
        }

        if (questionNo === 4) {
            if (value === "check" && questionData?.connectionType === "organic") {
                const checkPrize = givenAmount * questionData.organicPrize;
                setQuestionData({ ...questionData, accountAmount: givenAmount, totalPrize: checkPrize.toFixed(2) })
            } else if (value === "check" && questionData?.connectionType === "manually") {
                const checkPrize = givenAmount * questionData.manualPrize;
                setQuestionData({ ...questionData, accountAmount: givenAmount, totalPrize: checkPrize.toFixed(2) })
            }
        }

        setActiveQuestionValue(value)
    }

    const connectionPrize = {
        sixMonths: questionData?.organicConnection === 9 ? organicPrice?.nineConnection?.sixMonths : 0 || questionData?.organicConnection === 10 ? organicPrice?.tenConnection?.sixMonths : 0 || questionData?.organicConnection === 50 ? organicPrice?.fiftyConnection?.sixMonths : 0 || questionData?.organicConnection === 100 ? organicPrice?.hundredConnection?.sixMonths : 0,
        oneYear: questionData?.organicConnection === 9 ? organicPrice?.nineConnection?.oneYear : 0 || questionData?.organicConnection === 10 ? organicPrice?.tenConnection?.oneYear : 0 || questionData?.organicConnection === 50 ? organicPrice?.fiftyConnection?.oneYear : 0 || questionData?.organicConnection === 100 ? organicPrice?.hundredConnection?.oneYear : 0 || questionData?.organicConnection === 200 ? organicPrice?.twoHundredConnection?.oneYear : 0 || questionData?.organicConnection === 300 ? 25 : 0 || questionData?.organicConnection === 500 ? organicPrice?.fiveHundredConnection?.oneYear : 0,
        fourYear: questionData?.organicConnection === 9 ? organicPrice?.nineConnection?.fourYear : 0 || questionData?.organicConnection === 10 ? organicPrice?.tenConnection?.fourYear : 0 || questionData?.organicConnection === 50 ? organicPrice?.fiftyConnection?.fourYear : 0 || questionData?.organicConnection === 100 ? organicPrice?.hundredConnection?.fourYear : 0 || questionData?.organicConnection === 200 ? organicPrice?.twoHundredConnection?.fourYear : 0 || questionData?.organicConnection === 300 ? 34 : 0 || questionData?.organicConnection === 500 ? organicPrice?.fiveHundredConnection?.fourYear : 0 || questionData?.organicConnection === 1000 ? organicPrice?.hundredConnection?.fourYear : 0 || questionData?.organicConnection === 2000 ? organicPrice?.twoThousandConnection?.fourYear : 0,
        tenYear: questionData?.organicConnection === 9 ? organicPrice?.nineConnection?.tenYear : 0 || questionData?.organicConnection === 10 ? organicPrice?.tenConnection?.tenYear : 0 || questionData?.organicConnection === 50 ? organicPrice?.fiftyConnection?.tenYear : 0 || questionData?.organicConnection === 100 ? organicPrice?.hundredConnection?.tenYear : 0 || questionData?.organicConnection === 200 ? organicPrice?.twoHundredConnection?.tenYear : 0 || questionData?.organicConnection === 300 ? 43 : 0 || questionData?.organicConnection === 500 ? organicPrice?.fiveHundredConnection?.tenYear : 0 || questionData?.organicConnection === 1000 ? organicPrice?.hundredConnection?.tenYear : 0 || questionData?.organicConnection === 2000 ? organicPrice?.twoThousandConnection?.tenYear : 0,
        moreThanTenYear: questionData?.organicConnection === 9 ? organicPrice?.nineConnection?.moreThanTenYear : 0 || questionData?.organicConnection === 10 ? organicPrice?.tenConnection?.moreThanTenYear : 0 || questionData?.organicConnection === 50 ? organicPrice?.fiftyConnection?.moreThanTenYear : 0 || questionData?.organicConnection === 100 ? organicPrice?.hundredConnection?.moreThanTenYear : 0 || questionData?.organicConnection === 200 ? organicPrice?.twoHundredConnection?.moreThanTenYear : 0 || questionData?.organicConnection === 300 ? 45 : 0 || questionData?.organicConnection === 500 ? organicPrice?.fiveHundredConnection?.moreThanTenYear : 0 || questionData?.organicConnection === 1000 ? organicPrice?.hundredConnection?.moreThanTenYear : 0 || questionData?.organicConnection === 2000 ? organicPrice?.twoThousandConnection?.moreThanTenYear : 0,
    }

    const manualConnectionPrize = {
        sevenDays: questionData?.manualConnection === 10 ? manualPrice?.tenConnection?.sevenDays : 0,
        fifteenDays: questionData?.manualConnection === 10 ? manualPrice?.tenConnection?.fifteenDays : 0,
        thirtyDays: questionData?.manualConnection === 10 ? manualPrice?.tenConnection?.thirtyDays : 0 || questionData?.manualConnection === 50 ? manualPrice?.fiftyConnection?.thirtyDays : 0,
        threeMonths: questionData?.manualConnection === 10 ? manualPrice?.tenConnection?.threeMonths : 0 || questionData?.manualConnection === 50 ? manualPrice?.fiftyConnection?.threeMonths : 0 || questionData?.manualConnection === 100 ? manualPrice?.hundredConnection?.threeMonths : 0,
        sixMonths: questionData?.manualConnection === 10 ? manualPrice?.tenConnection?.sixMonths : 0 || questionData?.manualConnection === 50 ? manualPrice?.fiftyConnection?.sixMonths : 0 || questionData?.manualConnection === 100 ? manualPrice?.hundredConnection?.sixMonths : 0 || questionData?.manualConnection === 200 ? manualPrice?.twoHundredConnection?.sixMonths : 0,
        oneYear: questionData?.manualConnection === 10 ? manualPrice?.tenConnection?.oneYear : 0 || questionData?.manualConnection === 50 ? manualPrice?.fiftyConnection?.oneYear : 0 || questionData?.manualConnection === 100 ? manualPrice?.hundredConnection?.oneYear : 0 || questionData?.manualConnection === 200 ? manualPrice?.twoHundredConnection?.oneYear : 0 || questionData?.manualConnection === 300 ? manualPrice?.threeHundredConnection?.oneYear : 0,
        fourYear: questionData?.manualConnection === 10 ? manualPrice?.tenConnection?.fourYear : 0 || questionData?.manualConnection === 50 ? manualPrice?.fiftyConnection?.fourYear : 0 || questionData?.manualConnection === 100 ? manualPrice?.hundredConnection?.fourYear : 0 || questionData?.manualConnection === 200 ? manualPrice?.twoHundredConnection?.fourYear : 0 || questionData?.manualConnection === 300 ? manualPrice?.threeHundredConnection?.fourYear : 0 || questionData?.manualConnection === 500 ? manualPrice?.fiveHundredConnection?.fourYear : 0,
        tenYear: questionData?.manualConnection === 10 ? manualPrice?.tenConnection?.tenYear : 0 || questionData?.manualConnection === 50 ? manualPrice?.fiftyConnection?.tenYear : 0 || questionData?.manualConnection === 100 ? manualPrice?.hundredConnection?.tenYear : 0 || questionData?.manualConnection === 200 ? manualPrice?.twoHundredConnection?.tenYear : 0 || questionData?.manualConnection === 300 ? manualPrice?.threeHundredConnection?.tenYear : 0 || questionData?.manualConnection === 500 ? manualPrice?.fiveHundredConnection?.tenYear : 0,
        moreThanTenYear: questionData?.manualConnection === 10 ? manualPrice?.tenConnection?.moreThanTenYear : 0 || questionData?.manualConnection === 50 ? manualPrice?.fiftyConnection?.moreThanTenYear : 0 || questionData?.manualConnection === 100 ? manualPrice?.hundredConnection?.moreThanTenYear : 0 || questionData?.manualConnection === 200 ? manualPrice?.twoHundredConnection?.moreThanTenYear : 0 || questionData?.manualConnection === 300 ? manualPrice?.threeHundredConnection?.moreThanTenYear : 0 || questionData?.manualConnection === 500 ? manualPrice?.fiveHundredConnection?.moreThanTenYear : 0,
    }

    if (loading || (questionData.connectionType === "organic" && !organicPrice)) {
        return <div className="h-[60vh] flex items-center justify-center text-center text-2xl font-semibold">Please wait ...</div>;
    }
    if (manualLoading || (questionData.connectionType === "manually" && !manualPrice)) {
        return <div className="h-[60vh] flex items-center justify-center text-center text-2xl font-semibold">Please wait ...</div>;
    }

    return (
        <div className='max-w-4xl mx-auto py-4 lg:py-6 lg:pt-12 px-2 lg:px-0'>
            {/* {questionData.quantity}, {questionData.connection} {activeQuestionValue !== null ? "true" : "false"} , {questionData.accountAge}, {questionData.connectionType} ,{activeQuestionValue} */}
            {
                questionNo < 6 && (<div className={`${questionNo === 0 && 'w-1/6' || questionNo === 1 && 'w-2/6' || questionNo === 2 && 'w-3/6' || questionNo === 3 && 'w-4/6' || questionNo === 4 && 'w-5/6' || questionNo === 5 && 'w-6/6'} bg-gradient-to-tr from-blue-300 bg-blue-800 h-1.5 rounded-md mb-6`}>

                </div>)
            }

            {
                questionNo === 0 && (
                    <div className='p-4 lg:p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">01. Which connection type do you need?</h2>
                        <div className='grid grid-cols-2 gap-6 pt-6'>
                            <button onClick={() => handleSubmit('organic')} className={`optionButton ${activeQuestionValue === 'organic' && 'bg-primary text-white'}`}>Organically Growed (Real connection)</button>
                            <button onClick={() => handleSubmit('manually')} className={`optionButton ${activeQuestionValue === 'manually' && 'bg-primary text-white'}`}>Manually Growed (CSV)</button>
                        </div>
                    </div>
                )
            }

            {
                questionNo === 1 && (
                    <div className='p-4 lg:p-8 myShadow rounded'>
                        <h2 className="text-xl font-medium">02. What will be the location of the account that you want to buy? </h2>
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
                questionNo === 2 && questionData?.connectionType === 'organic' && (
                    <div className='p-4 lg:p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">03. What is the number of connections / friends of the accounts you want to buy?</h2>
                        <div className='grid grid-cols-4 gap-6 pt-6'>
                            <button onClick={() => handleSubmit(9)} className={`optionButton ${activeQuestionValue === 9 && 'bg-primary text-white'}`}>1 to 9</button>
                            <button onClick={() => handleSubmit(10)} className={`optionButton ${activeQuestionValue === 10 && 'bg-primary text-white'}`}>10+</button>
                            <button onClick={() => handleSubmit(50)} className={`optionButton ${activeQuestionValue === 50 && 'bg-primary text-white'}`}>50+</button>
                            <button onClick={() => handleSubmit(100)} className={`optionButton ${activeQuestionValue === 100 && 'bg-primary text-white'}`}>100+</button>
                            <button onClick={() => handleSubmit(200)} className={`optionButton ${activeQuestionValue === 200 && 'bg-primary text-white'}`}>200+</button>
                            <button onClick={() => handleSubmit(300)} className={`optionButton ${activeQuestionValue === 300 && 'bg-primary text-white'}`}>300+</button>
                            <button onClick={() => handleSubmit(500)} className={`optionButton ${activeQuestionValue === 500 && 'bg-primary text-white'}`}>500+</button>
                            <button onClick={() => handleSubmit(1000)} className={`optionButton ${activeQuestionValue === 1000 && 'bg-primary text-white'}`}>1000+</button>
                            <button onClick={() => handleSubmit(2000)} className={`optionButton ${activeQuestionValue === 2000 && 'bg-primary text-white'}`}>2000+</button>
                        </div>
                    </div>
                )
            }

            {
                questionNo === 2 && questionData?.connectionType === 'manually' && (
                    <div className='p-4 lg:p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">03. What is the number of connections / friends of the accounts you want to buy?</h2>
                        <div className='grid grid-cols-4 gap-6 pt-6'>
                            <button onClick={() => handleSubmit(10)} className={`optionButton ${activeQuestionValue === 10 && 'bg-primary text-white'}`}>10+</button>
                            <button onClick={() => handleSubmit(50)} className={`optionButton ${activeQuestionValue === 50 && 'bg-primary text-white'}`}>50+</button>
                            <button onClick={() => handleSubmit(100)} className={`optionButton ${activeQuestionValue === 100 && 'bg-primary text-white'}`}>100+</button>
                            <button onClick={() => handleSubmit(200)} className={`optionButton ${activeQuestionValue === 200 && 'bg-primary text-white'}`}>200+</button>
                            <button onClick={() => handleSubmit(300)} className={`optionButton ${activeQuestionValue === 300 && 'bg-primary text-white'}`}>300+</button>
                            <button onClick={() => handleSubmit(500)} className={`optionButton ${activeQuestionValue === 500 && 'bg-primary text-white'}`}>500+</button>
                        </div>
                    </div>
                )
            }

            {
                questionNo === 3 && questionData?.connectionType === 'organic' && (
                    <div className='p-4 lg:p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">04. Age of the account you want to buy?</h2>
                        <div className='grid grid-cols-2 gap-6 pt-6'>
                            {
                                questionData.organicConnection < 200 &&
                                <button onClick={() => handleSubmit(connectionPrize.sixMonths, "3-6 month")} className={`optionButtonPrize group ${activeQuestionValue === connectionPrize.sixMonths && 'bg-primary text-white'}`}>
                                    <span>3-6 month</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === connectionPrize.sixMonths && 'text-white/50'}`}>{connectionPrize.sixMonths} $ per Account</span>
                                </button>
                            }
                            {
                                questionData.organicConnection < 1000 &&
                                <button onClick={() => handleSubmit(connectionPrize.oneYear, "6-12 month")} className={`optionButtonPrize group ${activeQuestionValue === connectionPrize.oneYear && 'bg-primary text-white'}`}>
                                    <span>6-12 month</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === connectionPrize.oneYear && 'text-white/50'}`}>{connectionPrize.oneYear} $ per Account</span>
                                </button>
                            }
                            <button onClick={() => handleSubmit(connectionPrize.fourYear, "1-4 year")} className={`optionButtonPrize group ${activeQuestionValue === connectionPrize.fourYear && 'bg-primary text-white'}`}>
                                <span>1-4 year</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === connectionPrize.fourYear && 'text-white/50'}`}>{connectionPrize.fourYear} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(connectionPrize.tenYear, "5-10 year")} className={`optionButtonPrize group ${activeQuestionValue === connectionPrize.tenYear && 'bg-primary text-white'}`}>
                                <span>5-10 year</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === connectionPrize.tenYear && 'text-white/50'}`}>{connectionPrize.tenYear} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(connectionPrize.moreThanTenYear, "10 year+")} className={`optionButtonPrize group ${activeQuestionValue === connectionPrize.moreThanTenYear && 'bg-primary text-white'}`}>
                                <span>10 year+</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === connectionPrize.moreThanTenYear && 'text-white/50'}`}>{connectionPrize.moreThanTenYear} $ per Account</span>
                            </button>
                        </div>
                    </div>
                )
            }

            {
                questionNo === 3 && questionData?.connectionType === 'manually' && (
                    <div className='p-4 lg:p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">04. Age of the account you want to buy?</h2>
                        <div className='grid grid-cols-2 gap-6 pt-6'>
                            {
                                questionData.manualConnection <= 10 &&
                                <button onClick={() => handleSubmit(manualConnectionPrize.sevenDays, "0-7 Days")} className={`optionButtonPrize group ${activeQuestionValue === manualConnectionPrize.sevenDays && 'bg-primary text-white'}`}>
                                    <span>0-7 Days</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === manualConnectionPrize.sevenDays && 'text-white/50'}`}>{manualConnectionPrize.sevenDays} $ per Account</span>
                                </button>
                            }
                            {
                                questionData.manualConnection <= 10 &&
                                <button onClick={() => handleSubmit(manualConnectionPrize.fifteenDays, "8-15 Days")} className={`optionButtonPrize group ${activeQuestionValue === manualConnectionPrize.fifteenDays && 'bg-primary text-white'}`}>
                                    <span>8-15 Days</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === manualConnectionPrize.fifteenDays && 'text-white/50'}`}>{manualConnectionPrize.fifteenDays} $ per Account</span>
                                </button>
                            }
                            {
                                questionData.manualConnection <= 50 &&
                                <button onClick={() => handleSubmit(manualConnectionPrize.thirtyDays, "16-30 Days")} className={`optionButtonPrize group ${activeQuestionValue === manualConnectionPrize.thirtyDays && 'bg-primary text-white'}`}>
                                    <span>16-30 Days</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === manualConnectionPrize.thirtyDays && 'text-white/50'}`}>{manualConnectionPrize.thirtyDays} $ per Account</span>
                                </button>
                            }
                            {
                                questionData.manualConnection <= 100 &&
                                <button onClick={() => handleSubmit(manualConnectionPrize.threeMonths, "1-3 month")} className={`optionButtonPrize group ${activeQuestionValue === manualConnectionPrize.threeMonths && 'bg-primary text-white'}`}>
                                    <span>1-3 month</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === manualConnectionPrize.threeMonths && 'text-white/50'}`}>{manualConnectionPrize.threeMonths} $ per Account</span>
                                </button>
                            }
                            {
                                questionData.manualConnection <= 200 &&
                                <button onClick={() => handleSubmit(manualConnectionPrize.sixMonths, "3-6 month")} className={`optionButtonPrize group ${activeQuestionValue === manualConnectionPrize.sixMonths && 'bg-primary text-white'}`}>
                                    <span>3-6 month</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === manualConnectionPrize.sixMonths && 'text-white/50'}`}>{manualConnectionPrize.sixMonths} $ per Account</span>
                                </button>
                            }
                            {
                                questionData.manualConnection <= 300 &&
                                <button onClick={() => handleSubmit(manualConnectionPrize.oneYear, "6-12 month")} className={`optionButtonPrize group ${activeQuestionValue === manualConnectionPrize.oneYear && 'bg-primary text-white'}`}>
                                    <span>6-12 month</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === manualConnectionPrize.oneYear && 'text-white/50'}`}>{manualConnectionPrize.oneYear} $ per Account</span>
                                </button>
                            }
                            {
                                questionData.manualConnection <= 500 &&
                                <button onClick={() => handleSubmit(manualConnectionPrize.fourYear, "1-4 year")} className={`optionButtonPrize group ${activeQuestionValue === manualConnectionPrize.fourYear && 'bg-primary text-white'}`}>
                                    <span>1-4 year</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === manualConnectionPrize.fourYear && 'text-white/50'}`}>{manualConnectionPrize.fourYear} $ per Account</span>
                                </button>
                            }
                            <button onClick={() => handleSubmit(manualConnectionPrize.tenYear, "5-10 year")} className={`optionButtonPrize group ${activeQuestionValue === manualConnectionPrize.tenYear && 'bg-primary text-white'}`}>
                                <span>5-10 year</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === manualConnectionPrize.tenYear && 'text-white/50'}`}>{manualConnectionPrize.tenYear} $ per Account</span>
                            </button>
                            <button onClick={() => handleSubmit(manualConnectionPrize.moreThanTenYear, "10 year+")} className={`optionButtonPrize group ${activeQuestionValue === manualConnectionPrize.moreThanTenYear && 'bg-primary text-white'}`}>
                                <span>10 year+</span> <span>-</span> <span className={`text-gray-500 group-hover:text-white/50 ${activeQuestionValue === manualConnectionPrize.moreThanTenYear && 'text-white/50'}`}>{manualConnectionPrize.moreThanTenYear} $ per Account</span>
                            </button>
                        </div>
                    </div>
                )
            }

            {
                questionNo === 4 && (
                    <div className='p-4 lg:p-8 myShadow rounded mt-6'>
                        <h2 className="text-xl font-medium">04. How much account do you want to buy?</h2>
                        <div className='grid grid-cols-2 gap-6 pt-6'>
                            <input value={givenAmount} min={0} onChange={(e) => setGivenAmount(parseInt(e.target.value))} placeholder="Enter account number" type="number" className="px-4 border-2 rounded border-gray-300" />
                            <button onClick={() => handleSubmit("check")} disabled={givenAmount <= 0} className={`optionButton disabled:bg-gray-200 disabled:text-gray-400 ${givenAmount > 0 && 'bg-primary text-white'}`}>Check Prize</button>
                        </div>
                        {
                            questionData.totalPrize > 0 &&
                            <div className='pt-4 px-4 text-lg font-medium text-center'>
                                For {questionData?.connectionType === 'organic' ? questionData.organicAccountAge : questionData.manualAccountAge} age {questionData.accountAmount} account total prize is <span className="text-blue-700">{questionData.totalPrize} $</span>
                            </div>
                        }
                    </div>
                )
            }


            {
                questionNo < 5 &&
                <div className='flex items-center justify-between my-6'>
                    <button onClick={previousQuestionHandler} className="text-lg  px-10 font-medium bg-white text-black/80 myShadow rounded py-1.5 hover:bg-primary hover:text-white">Previous</button>
                    {
                        questionNo === 4 ?
                            <button onClick={handleFinalSubmit} className={`optionButton  px-10 ${(activeQuestionValue !== null) && 'bg-primary text-white'}`}>Submit</button>
                            :
                            <button onClick={nextQuestionHandler} className={`optionButton  px-10 ${(activeQuestionValue !== null) && 'bg-primary text-white'}`}>Next</button>
                    }
                </div>
            }
        </div>
    );
};
