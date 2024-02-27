'use client'

import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ServicesPricePage() {
    const [form] = useForm();
    const router = useRouter()
    const onFinish = async (formData: any) => {
        console.log('Form data:', formData);
        const { data } = await axios.patch("https://linkedin-buy-server.vercel.app/api/zero-connection-price/65dcd155adf92949959986bc", { ...formData })
        console.log(data);
        if (data.success) {
            toast.success(data.message)
            router.push('/dashboard/zero-connection-price')
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

    return (
        <div className='p-8'>
            <h2 className="text-lg font-semibold text-center">Update Services Price</h2>
            <div className='max-w-5xl mx-auto'>
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical">

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-6 py-4'>
                        <Form.Item name='sevenDays' label="Seven Days Prize" rules={[
                            { required: true, message: 'Please input your seven Days Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a number!',
                            },
                        ]}>
                            <Input placeholder="Type your seven Days Prize" />
                        </Form.Item>

                        <Form.Item name='fifteenDays' label="Fifteen Days Prize" rules={[
                            { required: true, message: 'Please input your fifteen Days Prize account!' },
                            {
                                type: 'string',
                                message: 'This is not a fifteen Days Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your fifteen Days Prize" />
                        </Form.Item>

                        <Form.Item name='thirtyDays' label="thirty Days Prize" rules={[
                            { required: true, message: 'Please input your thirty Days Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a thirty Days Prize url link formate!',
                            },
                        ]}>
                            <Input placeholder="Type your thirty Days Prize" />
                        </Form.Item>

                        <Form.Item name='threeMonths' label="three Months Prize" rules={[
                            { required: true, message: 'Please input your three Months Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a three Months Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your three Months Prize" />
                        </Form.Item>

                        <Form.Item name='sixMonths' label="six Months Prize" rules={[
                            { required: true, message: 'Please input your six Months Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a six Months Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your six Months Prize" />
                        </Form.Item>

                        <Form.Item name='oneYear' label="one Year Prize" rules={[
                            { required: true, message: 'Please input your one Year Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a one Year Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your one Year Prize" />
                        </Form.Item>

                        <Form.Item name='fourYear' label="four Year Prize" rules={[
                            { required: true, message: 'Please input your four Year Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a four Year Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your four Year Prize" />
                        </Form.Item>

                        <Form.Item name='tenYear' label="ten Year Prize" rules={[
                            { required: true, message: 'Please input your ten Year Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a ten Year Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your ten Year Prize" />
                        </Form.Item>

                        <Form.Item name='moreThanTenYear' label="more Than Ten Year Prize" rules={[
                            { required: true, message: 'Please input your more Than Ten Year Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a more Than Ten Year Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your more Than Ten Year Prize" />
                        </Form.Item>
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
