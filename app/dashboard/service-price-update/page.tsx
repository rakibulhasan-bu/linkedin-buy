'use client'

import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import toast from "react-hot-toast";

export default function ServicesPricePage() {
    const [form] = useForm();
    const onFinish = async (formData: any) => {
        console.log('Form data:', formData);
        const { data } = await axios.patch("https://linkedin-buy-server.vercel.app/api/services-price/65cd6546fe68c1eab068525f", { ...formData })

        if (data.success) {
            toast.success(data.message)
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

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 py-4'>
                        <Form.Item name='sharePrize' label="Share Prize" rules={[
                            { required: true, message: 'Please input your share Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a number!',
                            },
                        ]}>
                            <Input placeholder="Type your share Prize" />
                        </Form.Item>

                        <Form.Item name='connectionPrize' label="connection Prize" rules={[
                            { required: true, message: 'Please input your connection Prize account!' },
                            {
                                type: 'string',
                                message: 'This is not a connection Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your connection Prize" />
                        </Form.Item>

                        <Form.Item name='followersPrize' label="Followers Prize" rules={[
                            { required: true, message: 'Please input your followers Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a followers Prize url link formate!',
                            },
                        ]}>
                            <Input placeholder="Type your followers Prize" />
                        </Form.Item>

                        <Form.Item name='commentsPrize' label="comments Prize" rules={[
                            { required: true, message: 'Please input your comments Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a comments Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your comments Prize" />
                        </Form.Item>

                        <Form.Item name='reactionsPrize' label="reactions Prize" rules={[
                            { required: true, message: 'Please input your reactions Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a reactions Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your reactions Prize" />
                        </Form.Item>

                        <Form.Item name='likesPrize' label="likes Prize" rules={[
                            { required: true, message: 'Please input your likes Prize!' },
                            {
                                type: 'string',
                                message: 'This is not a likes Prize account formate!',
                            },
                        ]}>
                            <Input placeholder="Type your likes Prize" />
                        </Form.Item>
                    </div>

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
