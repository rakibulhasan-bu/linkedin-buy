"use client";

import { Button, Form, Input, Select } from "antd";
import ServiceSelection, { TServicesOptions } from "../components/account-service/ServiceSelection";
import { useState } from "react";

export default function ServicesPage() {

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
          value: 50
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
  console.log(services);
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
            <Form layout="vertical">
              <Form.Item label="Email">
                <Input placeholder="Type your email" />
              </Form.Item>
              <Form.Item label="Post Link for Shares / Reposts">
                <Input placeholder="https://www.linkedin.com/posts/gatski/" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  style={{ width: "100%", backgroundColor: "#4096ff" }}
                >
                  Complete purchase
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className=" lg:w-[30%] w-full bg-gradient-to-br from-blue-700 to-blue-400 lg:min-h-screen pb-12">
        <h1 className=" text-white text-xl font-semibold my-14 pl-10">
          Summery
        </h1>
        <div className=" w-full lg:w-2/4 flex justify-between items-center pl-10 text-white">
          <p>Total usd</p>
          <p>$ 0.00</p>
        </div>
      </div>
    </section>
  );
}
