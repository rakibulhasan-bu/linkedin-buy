"use client";

import { Button, Form, Input, Select } from "antd";
import ServiceSelection from "../components/account-service/ServiceSelection";

export default function page() {
  const services = [
    { a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 1 },
  ]
  return (
    <section className="w-full lg:flex">
      <div className=" lg:w-[70%] w-full bg-white px-2 lg:min-h-screen">
        <div className="  h-full lg:px-10">
          <h1 className="  text-lg font-semibold my-14">SocialPlug</h1>
          <p>service selection</p>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
            {
              services.map((service: any, index: number) => (
                <ServiceSelection key={index} />
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
