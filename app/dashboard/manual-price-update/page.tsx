'use client'

import { TManualPrice } from "@/app/interface/manual-price";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function OrganicPrizeUpdatePage() {
    const [manualPrice, setManualPrice] = useState<TManualPrice>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://linkedin-buy-server.vercel.app/api/manual-price/65ded3011ec8223f23f25e6f');
                setManualPrice(response?.data.data);
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

        const manualPriceData = {

            tenConnection: {
                sevenDays: formData.sevenDays10,
                fifteenDays: formData.fifteenDays10,
                thirtyDays: formData.thirtyDays10,
                threeMonths: formData.threeMonths10,
                sixMonths: formData.sixMonths10,
                oneYear: formData.oneYear10,
                fourYear: formData.fourYear10,
                tenYear: formData.tenYear10,
                moreThanTenYear: formData.moreThanTenYear10,
            },
            fiftyConnection: {
                thirtyDays: formData.thirtyDays50,
                threeMonths: formData.threeMonths50,
                sixMonths: formData.sixMonths50,
                oneYear: formData.oneYear50,
                fourYear: formData.fourYear50,
                tenYear: formData.tenYear50,
                moreThanTenYear: formData.moreThanTenYear50,
            },
            hundredConnection: {
                threeMonths: formData.threeMonths100,
                sixMonths: formData.sixMonths100,
                oneYear: formData.oneYear100,
                fourYear: formData.fourYear100,
                tenYear: formData.tenYear100,
                moreThanTenYear: formData.moreThanTenYear100,
            },
            twoHundredConnection: {
                sixMonths: formData.sixMonths200,
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
                fourYear: formData.fourYear500,
                tenYear: formData.tenYear500,
                moreThanTenYear: formData.moreThanTenYear500,
            },
        }

        const { data } = await axios.patch("https://linkedin-buy-server.vercel.app/api/manual-price/65ded3011ec8223f23f25e6f", { ...manualPriceData })

        if (data.success) {
            toast.success(data.message)
            router.push('/dashboard/manual-price')
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

    if (loading || !manualPrice) {
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
                        sevenDays10: manualPrice?.tenConnection?.sevenDays,
                        fifteenDays10: manualPrice?.tenConnection?.fifteenDays,
                        thirtyDays10: manualPrice?.tenConnection?.thirtyDays,
                        threeMonths10: manualPrice?.tenConnection?.threeMonths,
                        sixMonths10: manualPrice?.tenConnection?.sixMonths,
                        oneYear10: manualPrice?.tenConnection?.oneYear,
                        fourYear10: manualPrice?.tenConnection?.fourYear,
                        tenYear10: manualPrice?.tenConnection?.tenYear,
                        moreThanTenYear10: manualPrice?.tenConnection?.moreThanTenYear,
                        thirtyDays50: manualPrice?.fiftyConnection?.thirtyDays,
                        threeMonths50: manualPrice?.fiftyConnection?.threeMonths,
                        sixMonths50: manualPrice?.fiftyConnection?.sixMonths,
                        oneYear50: manualPrice?.fiftyConnection?.oneYear,
                        fourYear50: manualPrice?.fiftyConnection?.fourYear,
                        tenYear50: manualPrice?.fiftyConnection?.tenYear,
                        moreThanTenYear50: manualPrice?.fiftyConnection?.moreThanTenYear,
                        threeMonths100: manualPrice?.hundredConnection?.threeMonths,
                        sixMonths100: manualPrice?.hundredConnection?.sixMonths,
                        oneYear100: manualPrice?.hundredConnection?.oneYear,
                        fourYear100: manualPrice?.hundredConnection?.fourYear,
                        tenYear100: manualPrice?.hundredConnection?.tenYear,
                        moreThanTenYear100: manualPrice?.hundredConnection?.moreThanTenYear,
                        sixMonths200: manualPrice?.twoHundredConnection?.sixMonths,
                        oneYear200: manualPrice?.twoHundredConnection?.oneYear,
                        fourYear200: manualPrice?.twoHundredConnection?.fourYear,
                        tenYear200: manualPrice?.twoHundredConnection?.tenYear,
                        moreThanTenYear200: manualPrice?.twoHundredConnection?.moreThanTenYear,
                        oneYear300: manualPrice?.threeHundredConnection?.oneYear,
                        fourYear300: manualPrice?.threeHundredConnection?.fourYear,
                        tenYear300: manualPrice?.threeHundredConnection?.tenYear,
                        moreThanTenYear300: manualPrice?.threeHundredConnection?.moreThanTenYear,
                        fourYear500: manualPrice?.fiveHundredConnection?.fourYear,
                        tenYear500: manualPrice?.fiveHundredConnection?.tenYear,
                        moreThanTenYear500: manualPrice?.fiveHundredConnection?.moreThanTenYear,
                    }}
                >

                    {/* this is 10+ connection div  */}
                    <div className=''>
                        <h3 className="pb-2 text-primary text-lg">10+ Connections Accounts</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-6'>

                            <Form.Item name='sevenDays10' label="seven Days Prize" rules={[
                                { required: true, message: 'Please input your six Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a seven Days Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your seven Days Prize" />
                            </Form.Item>

                            <Form.Item name='fifteenDays10' label="fifteen Days Prize" rules={[
                                { required: true, message: 'Please input your six Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a fifteen Days Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your fifteen Days Prize" />
                            </Form.Item>

                            <Form.Item name='thirtyDays10' label="thirty Days Prize" rules={[
                                { required: true, message: 'Please input your six Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a thirty Days Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your thirty Days Prize" />
                            </Form.Item>

                            <Form.Item name='threeMonths10' label="three Months Prize" rules={[
                                { required: true, message: 'Please input your six Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a three Months Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your three Months Prize" />
                            </Form.Item>

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
                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-6'>

                            <Form.Item name='thirtyDays50' label="thirty Days Prize" rules={[
                                { required: true, message: 'Please input your thirty Days Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a thirty Days Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your thirty Days Prize" />
                            </Form.Item>

                            <Form.Item name='threeMonths50' label="three Months Prize" rules={[
                                { required: true, message: 'Please input your three Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a three Months Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your three Months Prize" />
                            </Form.Item>

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
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-6'>

                            <Form.Item name='threeMonths100' label="three Months Prize" rules={[
                                { required: true, message: 'Please input your three Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a three Months Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your six Months Prize" />
                            </Form.Item>

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
                        <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-6'>

                            <Form.Item name='sixMonths200' label="six Months Prize" rules={[
                                { required: true, message: 'Please input your six Months Prize!' },
                                {
                                    type: 'string',
                                    message: 'This is not a six Months Prize account formate!',
                                },
                            ]}>
                                <Input placeholder="Type your six Months Prize" />
                            </Form.Item>

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
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-6'>

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
