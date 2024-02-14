"use client";

import { Button, Form, Input, Select } from "antd";
import ServiceSelection, { TServicesOptions } from "../components/account-service/ServiceSelection";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "antd/es/form/Form";

export default function ServicesPage() {
  const [form] = useForm();
  const [services, setServices] = useState({
    share: 0,
    connections: 0,
    followers: 0,
    comments: 0,
    reactions: 0,
    likes: 0
  })

  const servicesOptions = [
    {
      title: "Linkedin Share / Reposts",
      name: "share",
      amount: "6.50$ - 70.00$",
      options: [
        {
          label: "Amount Of Shares/Reposts",
          value: 0,
        },
        {
          label: "50 Shares / Reposts",
          value: 50
        },
        {
          label: "100 Shares / Reposts",
          value: 100
        },
        {
          label: "250 Shares / Reposts",
          value: 250
        },
        {
          label: "500 Shares / Reposts",
          value: 500
        },
        {
          label: "800 Shares / Reposts",
          value: 800
        },
      ]
    },
    {
      title: "Linkedin Connections",
      name: "connections",
      amount: "5.00$ - 350.00$",
      options: [
        {
          label: "Amount Of Connections",
          value: 0
        },
        {
          label: "50 Connections",
          value: 50
        },
        {
          label: "100 Connections",
          value: 100
        },
        {
          label: "250 Connections",
          value: 250
        },
        {
          label: "500 Connections",
          value: 500
        },
        {
          label: "1000 Connections",
          value: 1000
        },
        {
          label: "2500 Connections",
          value: 2500
        },
        {
          label: "5000 Connections",
          value: 5000
        },
      ]
    },
    {
      title: "Linkedin Followers",
      name: "followers",
      amount: "3.50$ - 2600.00$",
      options: [
        {
          label: "Amount Of Followers",
          value: 0
        },
        {
          label: "100 Followers",
          value: 100
        },
        {
          label: "250 Followers",
          value: 250
        },
        {
          label: "500 Followers",
          value: 500
        },
        {
          label: "1000 Followers",
          value: 1000
        },
        {
          label: "2500 Followers",
          value: 2500
        },
        {
          label: "5000 Followers",
          value: 5000
        },
        {
          label: "10000 Followers",
          value: 10000
        },
        {
          label: "25000 Followers",
          value: 25000
        },
        {
          label: "50000 Followers",
          value: 50000
        },
        {
          label: "100000 Followers",
          value: 100000
        },
      ]
    },
    {
      title: "Linkedin Random Comments",
      name: "comments",
      amount: "9.00$ - 220.00$",
      options: [
        {
          label: "Amount Of Random Comments",
          value: 0
        },
        {
          label: "5 Comments",
          value: 5
        },
        {
          label: "10 Comments",
          value: 10
        },
        {
          label: "25 Comments",
          value: 25
        },
        {
          label: "50 Comments",
          value: 50
        },
        {
          label: "100 Comments",
          value: 100
        },
        {
          label: "150 Comments",
          value: 150
        },

      ]
    },
    {
      title: "Linkedin Reactions",
      name: "reactions",
      amount: "7.00$ - 90.00$",
      options: [
        {
          label: "Amount Of Reactions",
          value: 0
        },
        {
          label: "50 Reactions",
          value: 50
        },
        {
          label: "100 Reactions",
          value: 100
        },
        {
          label: "250 Reactions",
          value: 250
        },
        {
          label: "500 Reactions",
          value: 500
        },
        {
          label: "800 Reactions",
          value: 800
        },

      ]
    },
    {
      title: "Linkedin Likes",
      name: "likes",
      amount: "7.00$ - 520.00$",
      options: [
        {
          label: "Amount Of Likes",
          value: 0
        },
        {
          label: "50 Likes",
          value: 50
        },
        {
          label: "100 Likes",
          value: 100
        },
        {
          label: "250 Likes",
          value: 250
        },
        {
          label: "500 Likes",
          value: 500
        },
        {
          label: "1000 Likes",
          value: 1000
        },
        {
          label: "2500 Likes",
          value: 2500
        },
        {
          label: "5000 Likes",
          value: 5000
        },
      ]
    },
  ]

  const handleChangeServices = (value: number, name: string) => {
    if (services.hasOwnProperty(name)) {
      // Update the services object with the new value
      const updatedServices = { ...services, [name]: value };
      setServices(updatedServices);
    }
  }

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
    <section className="w-full lg:flex">

      <div className="lg:w-[70%] w-full bg-white px-2 lg:min-h-screen">
        <div className="h-full lg:px-10">
          <h1 className="text-lg font-semibold py-6">Buy Linkedin services</h1>

          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
            {
              servicesOptions.map((servicesOptions: TServicesOptions, index: number) => (
                <ServiceSelection handleChangeServices={handleChangeServices} servicesOptions={servicesOptions} key={index} />
              ))
            }
          </div>

          <div className=" mt-6">
            <Form
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed} layout="vertical">
              <Form.Item name='email' label="Email" rules={[
                { required: true, message: 'Please input your email!' },
                {
                  type: 'email',
                  message: 'This is not a email formate!',
                },
              ]}>
                <Input placeholder="Type your email" />
              </Form.Item>
              {
                services.share > 0 &&
                <Form.Item name='share' label="Post Link for Shares / Reposts"
                  rules={[
                    { required: true, message: 'Please input your Link for Shares / Reposts!' },
                    {
                      type: 'url',
                      message: 'Link for Shares / Reposts must be a valid URL!',
                    },
                  ]}>
                  <Input placeholder="https://www.linkedin.com/posts/gatski/" />
                </Form.Item>
              }
              {
                services.connections > 0 &&
                <Form.Item name='connections' label="Profile Link for Connections"
                  rules={[
                    { required: true, message: 'Please input your Link for Connections!' },
                    {
                      type: 'url',
                      message: 'Link for Connections must be a valid URL!',
                    },
                  ]}>
                  <Input placeholder="https://www.linkedin.com/posts/gatski/" />
                </Form.Item>
              }
              {
                services.followers > 0 &&
                <Form.Item name='followers' label="Profile Link for Followers"
                  rules={[
                    { required: true, message: 'Please input your Link for Followers!' },
                    {
                      type: 'url',
                      message: 'Link for Followers must be a valid URL!',
                    },
                  ]}>
                  <Input placeholder="https://www.linkedin.com/posts/gatski/" />
                </Form.Item>
              }
              {
                services.comments > 0 &&
                <Form.Item name='comments' label="Post Link for Random Comments" rules={[
                  { required: true, message: 'Please input your Link for Random Comments!' },
                  {
                    type: 'url',
                    message: 'Link for Random Comments must be a valid URL!',
                  },
                ]}>
                  <Input placeholder="https://www.linkedin.com/posts/gatski/" />
                </Form.Item>
              }
              {
                services.reactions > 0 &&
                <Form.Item name='reactions' label="Post Link for Reactions" rules={[
                  { required: true, message: 'Please input your Link for Reactions!' },
                  {
                    type: 'url',
                    message: 'Link for Reactions must be a valid URL!',
                  },
                ]}>
                  <Input placeholder="https://www.linkedin.com/posts/gatski/" />
                </Form.Item>
              }
              {
                services.likes > 0 &&
                <Form.Item name='likes' label="Post Link for Likes" rules={[
                  { required: true, message: 'Please input your Link for Likes !' },
                  {
                    type: 'url',
                    message: 'Link for Likes must be a valid URL!',
                  },
                ]}>
                  <Input placeholder="https://www.linkedin.com/posts/gatski/" />
                </Form.Item>
              }

              <Form.Item>
                <Button
                  type="primary"
                  className="w-full bg-blue-600 !hover:bg-blue-700"
                  htmlType="submit">
                  Complete purchase
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      {/* this is right div  */}
      <div className=" lg:w-[30%] w-full bg-gradient-to-br from-blue-700 to-blue-400 lg:min-h-screen pb-12">
        <div className='w-full lg:w-5/6 mx-auto space-y-4'>
          <h1 className=" text-white text-xl font-semibold mt-14">
            Summery
          </h1>
          {
            services.share > 0 &&
            <div className="text-white space-y-1 p-2 rounded  border-b border-white/50">
              <div className='flex items-center justify-between  text-base'>
                <p className="">Linkedin Shares / Reposts</p>
                <p className="">$ {services.share}</p>
              </div>
              <div className="text-gray-300 text-sm max-w-[80%]">Amount of Shares / Reposts <span className="text-white">{services.share} Shares / Reposts</span></div>
            </div>
          }

          {
            services.connections > 0 &&
            <div className="text-white space-y-1 p-2 rounded  border-b border-white/50">
              <div className='flex items-center justify-between  text-base'>
                <p className="">Linkedin Connections</p>
                <p className="">$ {services.connections}</p>
              </div>
              <div className="text-gray-300 text-sm">Amount of Connections <span className="text-white">{services.connections} Connections</span></div>
            </div>
          }

          {
            services.followers > 0 &&
            <div className="text-white space-y-1 p-2 rounded  border-b border-white/50">
              <div className='flex items-center justify-between  text-base'>
                <p className="">Linkedin Followers</p>
                <p className="">$ {services.followers}</p>
              </div>
              <div className="text-gray-300 text-sm">Amount of Followers <span className="text-white">{services.followers} Followers</span></div>
            </div>
          }

          {
            services.comments > 0 &&
            <div className="text-white space-y-1 p-2 rounded  border-b border-white/50">
              <div className='flex items-center justify-between  text-base'>
                <p className="">Linkedin Comments</p>
                <p className="">$ {services.comments}</p>
              </div>
              <div className="text-gray-300 text-sm">Amount of Comments <span className="text-white">{services.comments} Comments</span></div>
            </div>
          }

          {
            services.reactions > 0 &&
            <div className="text-white space-y-1 p-2 rounded  border-b border-white/50">
              <div className='flex items-center justify-between  text-base'>
                <p className="">Linkedin Reactions</p>
                <p className="">$ {services.reactions}</p>
              </div>
              <div className="text-gray-300 text-sm">Amount of Reactions <span className="text-white">{services.reactions} Reactions</span></div>
            </div>
          }

          {
            services.likes > 0 &&
            <div className="text-white space-y-1 p-2 rounded border-b border-white/50">
              <div className='flex items-center justify-between  text-base'>
                <p className="">Linkedin Likes</p>
                <p className="">$ {services.likes}</p>
              </div>
              <div className="text-gray-300 text-sm">Amount of Likes <span className="text-white">{services.likes} Likes</span></div>
            </div>
          }
          {/* {
            (services.share > 0 || services.connections > 0 || services.followers > 0 || services.comments > 0 || services.reactions > 0 || services.likes > 0) &&
            <div className='text-white p-0.5 rounded shadow shadow-blue-400'>

            </div>
          } */}
          <div className="flex justify-between items-center mx-auto text-white p-2 rounded shadow shadow-white/30">
            <div className=''>
              <p className="text-lg">Total</p>
              <p className="text-gray-300">USD</p>
            </div>
            <p className="text-xl font-semibold">$ {services.share + services.connections + services.followers + services.comments + services.reactions + services.likes}</p>
          </div>




        </div>



      </div>
    </section>
  );
}
