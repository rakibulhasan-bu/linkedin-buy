import { Select } from "antd";

export default function ServiceSelection() {
    return (
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
    );
};
