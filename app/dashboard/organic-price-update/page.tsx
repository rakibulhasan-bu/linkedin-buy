'use client'

import { TOrganicPrice } from "@/app/interface/organic-price";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function OrganicPrizeUpdatePage() {
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

    const [form] = useForm();
    const router = useRouter()
    const onFinish = async (formData: any) => {

        const organicPriceData = {
            nineConnection: {
                sixMonths: formData.sixMonths9,
                oneYear: formData.oneYear9,
                fourYear: formData.fourYear9,
                tenYear: formData.tenYear9,
                moreThanTenYear: formData.moreThanTenYear9,
            },
            tenConnection: {
                sixMonths: formData.sixMonths10,
                oneYear: formData.oneYear10,
                fourYear: formData.fourYear10,
                tenYear: formData.tenYear10,
                moreThanTenYear: formData.moreThanTenYear10,
            },
            fiftyConnection: {
                sixMonths: formData.sixMonths50,
                oneYear: formData.oneYear50,
                fourYear: formData.fourYear50,
                tenYear: formData.tenYear50,
                moreThanTenYear: formData.moreThanTenYear50,
            },
            hundredConnection: {
                sixMonths: formData.sixMonths100,
                oneYear: formData.oneYear100,
                fourYear: formData.fourYear100,
                tenYear: formData.tenYear100,
                moreThanTenYear: formData.moreThanTenYear100,
            },
            twoHundredConnection: {
                oneYear: formData.oneYear200,
                fourYear: formData.fourYear200,
                tenYear: formData.tenYear200,
                moreThanTenYear: formData.moreThanTenYear200,
            },
            threeHundredConnection: {
                oneYear: formData.oneYear300,
                fourYear: formData.fourYear300,
                tenYear: formData.tenYear300,
                moreThanTenYear: formData.moreThanTenYear300,
            },
            fiveHundredConnection: {
                oneYear: formData.oneYear500,
                fourYear: formData.fourYear500,
                tenYear: formData.tenYear500,
                moreThanTenYear: formData.moreThanTenYear500,
            },
            oneThousandConnection: {
                fourYear: formData.fourYear1000,
                tenYear: formData.tenYear1000,
                moreThanTenYear: formData.moreThanTenYear1000,
            },
            twoThousandConnection: {
                fourYear: formData.fourYear2000,
                tenYear: formData.tenYear2000,
                moreThanTenYear: formData.moreThanTenYear2000,
            },
        }

        const { data } = await axios.patch("https://linkedin-buy-server.vercel.app/api/organic-price/65de9591ddb773b06d55c449", { ...organicPriceData })

        if (data.success) {
            toast.success(data.message)
            router.push('/dashboard/organic-price')
            form.resetFields();
        }
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

    if (loading || !organicPrice) {
        return <div className="h-[60vh] flex items-center justify-center text-center text-2xl font-semibold">Please wait ...</div>;
    }

    return (
        <div className='p-8'>
            <h2 className="text-lg font-semibold text-center">Update Organically Growed Prices</h2>
            <div className='max-w-5xl mx-auto'>
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    initialValues={{
                        sixMonths9: organicPrice?.nineConnection?.sixMonths,
                        oneYear9: organicPrice?.nineConnection?.oneYear,
                        fourYear9: organicPrice?.nineConnection?.fourYear,
                        tenYear9: organicPrice?.nineConnection?.tenYear,
                        moreThanTenYear9: organicPrice?.nineConnection?.moreThanTenYear,
                        sixMonths10: organicPrice?.tenConnection?.sixMonths,
                        oneYear10: organicPrice?.tenConnection?.oneYear,
                        fourYear10: organicPrice?.tenConnection?.fourYear,
                        tenYear10: organicPrice?.tenConnection?.tenYear,
                        moreThanTenYear10: organicPrice?.tenConnection?.moreThanTenYear,
                        sixMonths50: organicPrice?.fiftyConnection?.sixMonths,
                        oneYear50: organicPrice?.fiftyConnection?.oneYear,
                        fourYear50: organicPrice?.fiftyConnection?.fourYear,
                        tenYear50: organicPrice?.fiftyConnection?.tenYear,
                        moreThanTenYear50: organicPrice?.fiftyConnection?.moreThanTenYear,
                        sixMonths100: organicPrice?.hundredConnection?.sixMonths,
                        oneYear100: organicPrice?.hundredConnection?.oneYear,
                        fourYear100: organicPrice?.hundredConnection?.fourYear,
                        tenYear100: organicPrice?.hundredConnection?.tenYear,
                        moreThanTenYear100: organicPrice?.hundredConnection?.moreThanTenYear,
                        oneYear200: organicPrice?.twoHundredConnection?.oneYear,
                        fourYear200: organicPrice?.twoHundredConnection?.fourYear,
                        tenYear200: organicPrice?.twoHundredConnection?.tenYear,
                        moreThanTenYear200: organicPrice?.twoHundredConnection?.moreThanTenYear,
                        oneYear300: organicPrice?.threeHundredConnection?.oneYear,
                        fourYear300: organicPrice?.threeHundredConnection?.fourYear,
                        tenYear300: organicPrice?.threeHundredConnection?.tenYear,
                        moreThanTenYear300: organicPrice?.threeHundredConnection?.moreThanTenYear,
                        oneYear500: organicPrice?.fiveHundredConnection?.oneYear,
                        fourYear500: organicPrice?.fiveHundredConnection?.fourYear,
                        tenYear500: organicPrice?.fiveHundredConnection?.tenYear,
                        moreThanTenYear500: organicPrice?.fiveHundredConnection?.moreThanTenYear,
                        fourYear1000: organicPrice?.oneThousandConnection?.fourYear,
                        tenYear1000: organicPrice?.oneThousandConnection?.tenYear,
                        moreThanTenYear1000: organicPrice?.oneThousandConnection?.moreThanTenYear,
                        fourYear2000: organicPrice?.oneThousandConnection?.fourYear,
                        tenYear2000: organicPrice?.oneThousandConnection?.tenYear,
                        moreThanTenYear2000: organicPrice?.oneThousandConnection?.moreThanTenYear,
                    }}
                >
                    {/* this is 1 to 9 connection div  */}
                    <div className='pt-4'>
                        <h3 className="pb-2 text-primary text-lg">1 to 9 Connections Accounts</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-6'>

                            <Form.Item name='sixMonths9' label="six Months Prize" rules={[
                                { required: true, message: 'Please input your six Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a six Months Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your six Months Prize" />
                            </Form.Item>

                            <Form.Item name='oneYear9' label="one Year Prize" rules={[
                                { required: true, message: 'Please input your one Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a one Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your one Year Prize" />
                            </Form.Item>

                            <Form.Item name='fourYear9' label="four Year Prize" rules={[
                                { required: true, message: 'Please input your four Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a four Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your four Year Prize" />
                            </Form.Item>

                            <Form.Item name='tenYear9' label="ten Year Prize" rules={[
                                { required: true, message: 'Please input your ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your ten Year Prize" />
                            </Form.Item>

                            <Form.Item name='moreThanTenYear9' label="more Than Ten Year Prize" rules={[
                                { required: true, message: 'Please input your more Than Ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a more Than Ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your more Than Ten Year Prize" />
                            </Form.Item>
                        </div>
                    </div>

                    {/* this is 10+ connection div  */}
                    <div className=''>
                        <h3 className="pb-2 text-primary text-lg">10+ Connections Accounts</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-6'>

                            <Form.Item name='sixMonths10' label="six Months Prize" rules={[
                                { required: true, message: 'Please input your six Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a six Months Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your six Months Prize" />
                            </Form.Item>

                            <Form.Item name='oneYear10' label="one Year Prize" rules={[
                                { required: true, message: 'Please input your one Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a one Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your one Year Prize" />
                            </Form.Item>

                            <Form.Item name='fourYear10' label="four Year Prize" rules={[
                                { required: true, message: 'Please input your four Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a four Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your four Year Prize" />
                            </Form.Item>

                            <Form.Item name='tenYear10' label="ten Year Prize" rules={[
                                { required: true, message: 'Please input your ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your ten Year Prize" />
                            </Form.Item>

                            <Form.Item name='moreThanTenYear10' label="more Than Ten Year Prize" rules={[
                                { required: true, message: 'Please input your more Than Ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a more Than Ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your more Than Ten Year Prize" />
                            </Form.Item>
                        </div>
                    </div>

                    {/* this is 50+ connection div  */}
                    <div className=''>
                        <h3 className="pb-2 text-primary text-lg">50+ Connections Accounts</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-6'>

                            <Form.Item name='sixMonths50' label="six Months Prize" rules={[
                                { required: true, message: 'Please input your six Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a six Months Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your six Months Prize" />
                            </Form.Item>

                            <Form.Item name='oneYear50' label="one Year Prize" rules={[
                                { required: true, message: 'Please input your one Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a one Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your one Year Prize" />
                            </Form.Item>

                            <Form.Item name='fourYear50' label="four Year Prize" rules={[
                                { required: true, message: 'Please input your four Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a four Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your four Year Prize" />
                            </Form.Item>

                            <Form.Item name='tenYear50' label="ten Year Prize" rules={[
                                { required: true, message: 'Please input your ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your ten Year Prize" />
                            </Form.Item>

                            <Form.Item name='moreThanTenYear50' label="more Than Ten Year Prize" rules={[
                                { required: true, message: 'Please input your more Than Ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a more Than Ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your more Than Ten Year Prize" />
                            </Form.Item>
                        </div>
                    </div>

                    {/* this is 100+ connection div  */}
                    <div className=''>
                        <h3 className="pb-2 text-primary text-lg">100+ Connections Accounts</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-6'>

                            <Form.Item name='sixMonths100' label="six Months Prize" rules={[
                                { required: true, message: 'Please input your six Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a six Months Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your six Months Prize" />
                            </Form.Item>

                            <Form.Item name='oneYear100' label="one Year Prize" rules={[
                                { required: true, message: 'Please input your one Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a one Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your one Year Prize" />
                            </Form.Item>

                            <Form.Item name='fourYear100' label="four Year Prize" rules={[
                                { required: true, message: 'Please input your four Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a four Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your four Year Prize" />
                            </Form.Item>

                            <Form.Item name='tenYear100' label="ten Year Prize" rules={[
                                { required: true, message: 'Please input your ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your ten Year Prize" />
                            </Form.Item>

                            <Form.Item name='moreThanTenYear100' label="more Than Ten Year Prize" rules={[
                                { required: true, message: 'Please input your more Than Ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a more Than Ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your more Than Ten Year Prize" />
                            </Form.Item>
                        </div>
                    </div>

                    {/* this is 200+ connection div  */}
                    <div className=''>
                        <h3 className="pb-2 text-primary text-lg">200+ Connections Accounts</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-6'>

                            <Form.Item name='oneYear200' label="one Year Prize" rules={[
                                { required: true, message: 'Please input your one Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a one Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your one Year Prize" />
                            </Form.Item>

                            <Form.Item name='fourYear200' label="four Year Prize" rules={[
                                { required: true, message: 'Please input your four Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a four Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your four Year Prize" />
                            </Form.Item>

                            <Form.Item name='tenYear200' label="ten Year Prize" rules={[
                                { required: true, message: 'Please input your ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your ten Year Prize" />
                            </Form.Item>

                            <Form.Item name='moreThanTenYear200' label="more Than Ten Year Prize" rules={[
                                { required: true, message: 'Please input your more Than Ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a more Than Ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your more Than Ten Year Prize" />
                            </Form.Item>
                        </div>
                    </div>

                    {/* this is 300+ connection div  */}
                    <div className=''>
                        <h3 className="pb-2 text-primary text-lg">300+ Connections Accounts</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-6'>

                            <Form.Item name='oneYear300' label="one Year Prize" rules={[
                                { required: true, message: 'Please input your one Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a one Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your one Year Prize" />
                            </Form.Item>

                            <Form.Item name='fourYear300' label="four Year Prize" rules={[
                                { required: true, message: 'Please input your four Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a four Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your four Year Prize" />
                            </Form.Item>

                            <Form.Item name='tenYear300' label="ten Year Prize" rules={[
                                { required: true, message: 'Please input your ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your ten Year Prize" />
                            </Form.Item>

                            <Form.Item name='moreThanTenYear300' label="more Than Ten Year Prize" rules={[
                                { required: true, message: 'Please input your more Than Ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a more Than Ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your more Than Ten Year Prize" />
                            </Form.Item>
                        </div>
                    </div>

                    {/* this is 500+ connection div  */}
                    <div className=''>
                        <h3 className="pb-2 text-primary text-lg">500+ Connections Accounts</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-6'>

                            <Form.Item name='oneYear500' label="one Year Prize" rules={[
                                { required: true, message: 'Please input your one Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a one Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your one Year Prize" />
                            </Form.Item>

                            <Form.Item name='fourYear500' label="four Year Prize" rules={[
                                { required: true, message: 'Please input your four Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a four Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your four Year Prize" />
                            </Form.Item>

                            <Form.Item name='tenYear500' label="ten Year Prize" rules={[
                                { required: true, message: 'Please input your ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your ten Year Prize" />
                            </Form.Item>

                            <Form.Item name='moreThanTenYear500' label="more Than Ten Year Prize" rules={[
                                { required: true, message: 'Please input your more Than Ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a more Than Ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your more Than Ten Year Prize" />
                            </Form.Item>
                        </div>
                    </div>

                    {/* this is 1000+ connection div  */}
                    <div className=''>
                        <h3 className="pb-2 text-primary text-lg">1000+ Connections Accounts</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-6'>

                            <Form.Item name='fourYear1000' label="four Year Prize" rules={[
                                { required: true, message: 'Please input your four Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a four Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your four Year Prize" />
                            </Form.Item>

                            <Form.Item name='tenYear1000' label="ten Year Prize" rules={[
                                { required: true, message: 'Please input your ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your ten Year Prize" />
                            </Form.Item>

                            <Form.Item name='moreThanTenYear1000' label="more Than Ten Year Prize" rules={[
                                { required: true, message: 'Please input your more Than Ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a more Than Ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your more Than Ten Year Prize" />
                            </Form.Item>
                        </div>
                    </div>

                    {/* this is 2000+ connection div  */}
                    <div className=''>
                        <h3 className="pb-2 text-primary text-lg">2000+ Connections Accounts</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-6'>

                            <Form.Item name='fourYear2000' label="four Year Prize" rules={[
                                { required: true, message: 'Please input your four Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a four Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your four Year Prize" />
                            </Form.Item>

                            <Form.Item name='tenYear2000' label="ten Year Prize" rules={[
                                { required: true, message: 'Please input your ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your ten Year Prize" />
                            </Form.Item>

                            <Form.Item name='moreThanTenYear2000' label="more Than Ten Year Prize" rules={[
                                { required: true, message: 'Please input your more Than Ten Year Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a more Than Ten Year Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your more Than Ten Year Prize" />
                            </Form.Item>
                        </div>
                    </div>

                    <Form.Item>
                        <Button
                            type="primary"
                            className="bg-blue-500 w-full text-lg h-9 font-semibold"
                            htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
