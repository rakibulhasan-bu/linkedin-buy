import { Select } from "antd";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

export interface TServicesOptions {
    title: string;
    amount: string;
    name: string;
    options: {
        label: string;
        value: number;
    }[];
}

interface TServiceSelection {
    servicesOptions: TServicesOptions;
    handleChangeServices: any
}

export default function ServiceSelection({ handleChangeServices, servicesOptions }: TServiceSelection) {
    const [select, setSelect] = useState(false);

    const handleSelectClick = (e: any) => {
        e.stopPropagation();
    };

    const handleOptionChange = (value: number, name: string) => {
        handleChangeServices(value, name)
    };
    console.log("object");
    return (
        <div onClick={() => setSelect(prev => !prev)} className={`relative font-medium border p-6 space-y-2 rounded cursor-pointer ${select && "border-blue-500"}`}>

            <h2 className="pb-1">{servicesOptions?.title}</h2>
            {
                !select && <p>{servicesOptions?.amount}</p>
            }
            {
                select && <div onClick={handleSelectClick} className="w-full">
                    <Select
                        defaultValue={servicesOptions?.options[0].label}
                        className="w-full font-medium"
                        options={servicesOptions?.options.map((option: any) => ({
                            label: option.label,
                            value: option.value
                        }))}
                        onChange={(value: any) => handleOptionChange(value, servicesOptions.name)}
                    />
                </div>
            }

            {
                select && <div className='text-sm text-gray-900 pt-1'>
                    Select an Option...
                </div>
            }
            {
                select && <IoIosCheckmarkCircle className="absolute top-1 right-2 text-blue-500" />
            }
        </div>
    );
};
