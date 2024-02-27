'use client'

import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface TServicePricing {
    sharePrize: string;
    connectionPrize: string;
    followersPrize: string;
    commentsPrize: string;
    reactionsPrize: string;
    likesPrize: string;
}

export default function ServicesPricePage() {
    const [servicePrice, setServicePrice] = useState<TServicePricing>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://linkedin-buy-server.vercel.app/api/services-price');
                setServicePrice(response?.data?.data[0]);
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
        console.log('Form data:', formData);
        const { data } = await axios.patch("https://linkedin-buy-server.vercel.app/api/services-price/65cd6546fe68c1eab068525f", { ...formData })

        if (data.success) {
            toast.success(data.message)
            router.push('/dashboard/service-price')
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

    if (loading || !servicePrice) {
        return <div className="h-[60vh] flex items-center justify-center text-center text-2xl font-semibold">Please wait ...</div>;
    }

    return (
        <div className='p-8'>
            <h2 className="text-lg font-semibold text-center">Update Services Price</h2>
            <div className='max-w-5xl mx-auto'>
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    initialValues={{
                        sharePrize: servicePrice?.sharePrize,
                        connectionPrize: servicePrice?.connectionPrize,
                        followersPrize: servicePrice?.followersPrize,
                        commentsPrize: servicePrice?.commentsPrize,
                        reactionsPrize: servicePrice?.reactionsPrize,
                        likesPrize: servicePrice?.likesPrize,
                    }}
                >

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
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
