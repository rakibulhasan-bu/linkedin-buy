'use client'

import { useAppContext } from "@/context";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function OrderPage() {
    const [form] = useForm();
    const { questionData, zeroQuestionData } = useAppContext()
    const { type } = useParams();

    const onFinish = (formData: any) => {
        console.log('Form data:', formData);
        form.resetFields();
    };

    const onFinishFailed = (errorInfo: any) => {
        if (!errorInfo?.outOfDate) {
            const errorMessages = errorInfo?.errorFields.map((error: any) => {
                return error.errors.join(", ");
            });
            const message = errorMessages.join(", ");
            toast.error(message)
            // form.resetFields();
        }
    };

    return (
        <div className='container mx-auto min-h-screen py-6 px-2 lg:px-0'>
            <h2 className="text-center text-xl lg:text-2xl font-medium">Seize the Opportunity: Order Now to Skyrocket Your LinkedIn Influence!</h2>
            {
                type === 'zero-connection' &&
                <div className='px-4 lg:px-8 py-4 lg:py-6 myShadow rounded my-8'>
                    <h2 className="text-xl font-medium text-center">Your Submitted Answers for 0 Connection Account</h2>
                    <div className='grid gap-y-2 grid-cols-1 lg:grid-cols-2 pt-4'>
                        <div className=''>
                            <h2 className="text-lg">01. What will be the location of the account that you want to buy?</h2>
                            <h2 className="text-lg text-blue-500 font-medium">Ans: {zeroQuestionData.location === "any" && "Any Location" || zeroQuestionData.location === "us" && "United States" || zeroQuestionData.location === "uk" && "United Kingdom" || zeroQuestionData.location === "france" && "France" || zeroQuestionData.location === "spain" && "Spain" || zeroQuestionData.location === "india" && "India"}</h2>
                        </div>
                        <div className=''>
                            <h2 className="text-lg">02. Age of the account you want to buy?</h2>
                            <h2 className="text-lg text-blue-500 font-medium">Ans: {zeroQuestionData.accountAge}</h2>
                        </div>
                        <div className='col-span-2 pt-4 px-4 text-lg font-medium text-center'>
                            For {zeroQuestionData.accountAge} age {zeroQuestionData.accountAmount} account total prize is <span className="text-blue-700">{zeroQuestionData.totalPrize} $</span>
                        </div>
                    </div>
                </div>
            }

            {
                type === 'one-more-connection' &&
                <div className='px-4 lg:px-8 py-4 lg:py-6 myShadow rounded my-8'>
                    <h2 className="text-xl font-medium text-center">Your Submitted Answers for 1 or More Connection Account</h2>
                    <div className='grid gap-y-2 grid-cols-1 lg:grid-cols-2 pt-4'>
                        <div className=''>
                            <h2 className="text-lg">01. Which connection type do you need?</h2>
                            <h2 className="text-lg text-blue-500 font-medium">Ans: {questionData.connectionType === "organic" && "Organically Growed (Real connection)" || questionData.connectionType === "manually" && "Manually Growed (CSV)"}</h2>
                        </div>
                        <div className=''>
                            <h2 className="text-lg">02. What will be the location of the account that you want to buy? </h2>
                            <h2 className="text-lg text-blue-500 font-medium">Ans: {zeroQuestionData.location === "any" && "Any Location" || zeroQuestionData.location === "us" && "United States" || zeroQuestionData.location === "uk" && "United Kingdom" || zeroQuestionData.location === "france" && "France" || zeroQuestionData.location === "spain" && "Spain" || zeroQuestionData.location === "india" && "India"}</h2>
                        </div>
                        <div className=''>
                            <h2 className="text-lg">03. What is the number of connections / friends of the accounts you want to buy?</h2>
                            <h2 className="text-lg text-blue-500 font-medium">Ans: {questionData.connection}</h2>
                        </div>
                        <div className=''>
                            <h2 className="text-lg">04. Age of the account you want to buy?</h2>
                            <h2 className="text-lg text-blue-500 font-medium">Ans: {questionData.accountAge}</h2>
                        </div>

                        <div className=''>
                            <h2 className="text-lg">05. How much account do you want to buy?</h2>
                            <h2 className="text-lg text-blue-500 font-medium">Ans: {questionData.accountAmount}</h2>
                        </div>

                        <div className='col-span-2 pt-4 px-4 text-lg font-medium text-center'>
                            For {questionData.accountAge} age {questionData.accountAmount} account total prize is <span className="text-blue-700">{questionData.totalPrize} $</span>
                        </div>
                    </div>
                </div>
            }

            <div className='max-w-5xl mx-auto'>
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical">
                    <ol className="list-decimal text-lg lg:px-10 py-2">
                        <p className="text-center font-medium text-red-500  pb-1 underline underline-offset-2">Please read carefully before confirming order</p>
                        <li>Usually our work starts within 10-12 hours after an order confirmation.  But it may take up to 24-30 hours maximum.</li>
                        <li>In the case of purchasing connections, connection requests must be accepted within 24 hours of their receipt. Otherwise BuyLinkedin365 authorities may temporarily/permanently stop their services in your case.</li>
                        <li>BuyLinkedin365 authorities will not be responsible for any link becoming unavailable in the middle of work.  But if any such problem is faced at the beginning of the work, you will be informed and refund if necessary.</li>
                    </ol>
                    <h2 className="text-lg lg:text-xl font-medium text-center pt-4 text-gray-800">Give Your  Email and anyone of your social media account for Confirm purchase</h2>
                    <Form.Item name='email' label="Email" rules={[
                        { required: true, message: 'Please input your email!' },
                        {
                            type: 'email',
                            message: 'This is not a email formate!',
                        },
                    ]}>
                        <Input placeholder="Type your email" />
                    </Form.Item>
                    <Form.Item name='whatsApp' label="WhatsApp (Optional)" rules={[
                        // { required: true, message: 'Please input your whatsApp account!' },
                        {
                            type: 'string',
                            message: 'This is not a whatsApp account formate!',
                        },
                    ]}>
                        <Input placeholder="Type your whatsApp" />
                    </Form.Item>
                    <Form.Item name='telegram' label="Telegram (Optional)" rules={[
                        // { required: true, message: 'Please input your telegram!' },
                        {
                            type: 'url',
                            message: 'This is not a telegram url link formate!',
                        },
                    ]}>
                        <Input placeholder="Type your telegram" />
                    </Form.Item>
                    <Form.Item name='skype' label="Skype (Optional)" rules={[
                        // { required: true, message: 'Please input your Skype!' },
                        {
                            type: 'url',
                            message: 'This is not a Skype account formate!',
                        },
                    ]}>
                        <Input placeholder="Type your Skype url link" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            className="bg-blue-500 w-full text-lg h-9 font-semibold"
                            htmlType="submit">
                            Order Now
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};
