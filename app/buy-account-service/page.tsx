"use client";
import { Button, Form, Input, Select } from "antd";

export default function page() {
  return (
    <section className=" w-full lg:flex items-center justify-center lg:justify-end">
      <div className=" lg:w-[60%] w-full bg-white h-[85dvh] flex items-center justify-center lg:justify-end px-2">
        <div className="  h-full lg:px-10">
          <h1 className="  text-lg font-semibold my-14">SocialPlug</h1>
          <p>service selection</p>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className=" border p-6 space-y-2 rounded-sm">
              <h2>Linkdn Share/Reposts</h2>
              <div>
                <Select
                  defaultValue="share/repost"
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      options: [
                        {
                          label: "50 Share/Repost",
                          value: "50",
                        },
                        {
                          label: "100 Share/Repost",
                          value: "100",
                        },
                        {
                          label: "150 Share/Repost",
                          value: "150",
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
            <div className=" border p-6 space-y-2 rounded-sm">
              <h2>Linkdn Share/Reposts</h2>
              <div>
                <Select
                  defaultValue="share/repost"
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      options: [
                        {
                          label: "50 Share/Repost",
                          value: "50",
                        },
                        {
                          label: "100 Share/Repost",
                          value: "100",
                        },
                        {
                          label: "150 Share/Repost",
                          value: "150",
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
            <div className=" border p-6 space-y-2 rounded-sm">
              <h2>Linkdn Share/Reposts</h2>
              <div>
                <Select
                  defaultValue="share/repost"
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      options: [
                        {
                          label: "50 Share/Repost",
                          value: "50",
                        },
                        {
                          label: "100 Share/Repost",
                          value: "100",
                        },
                        {
                          label: "150 Share/Repost",
                          value: "150",
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
            <div className=" border p-6 space-y-2 rounded-sm">
              <h2>Linkdn Share/Reposts</h2>
              <div>
                <Select
                  defaultValue="share/repost"
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      options: [
                        {
                          label: "50 Share/Repost",
                          value: "50",
                        },
                        {
                          label: "100 Share/Repost",
                          value: "100",
                        },
                        {
                          label: "150 Share/Repost",
                          value: "150",
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
            <div className=" border p-6 space-y-2 rounded-sm">
              <h2>Linkdn Share/Reposts</h2>
              <div>
                <Select
                  defaultValue="share/repost"
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      options: [
                        {
                          label: "50 Share/Repost",
                          value: "50",
                        },
                        {
                          label: "100 Share/Repost",
                          value: "100",
                        },
                        {
                          label: "150 Share/Repost",
                          value: "150",
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
            <div className=" border p-6 space-y-2 rounded-sm">
              <h2>Linkdn Share/Reposts</h2>
              <div>
                <Select
                  defaultValue="share/repost"
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      options: [
                        {
                          label: "50 Share/Repost",
                          value: "50",
                        },
                        {
                          label: "100 Share/Repost",
                          value: "100",
                        },
                        {
                          label: "150 Share/Repost",
                          value: "150",
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
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
      <div className=" lg:w-[40%] w-full bg-[#007bff]  h-[85dvh]">
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
