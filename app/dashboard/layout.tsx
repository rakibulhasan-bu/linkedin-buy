import Link from "next/link";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex h-screen overflow-auto'>
            <div className='w-1/6 h-full flex flex-col gap-4 bg-slate-100 py-8 px-2'>
                <Link href={'/dashboard/service-price'} className="border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded font-medium">Service Price</Link>
                <Link href={'/dashboard/service-price-update'} className="border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded font-medium">Service Price Update</Link>
                <Link href={'/dashboard/order-services'} className="border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded font-medium">Order Services</Link>
            </div>
            <div className='w-5/6'>
                {children}
            </div>
        </div>
    );
};
