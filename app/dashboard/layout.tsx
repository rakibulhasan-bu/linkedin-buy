'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    const navLinks = [
        {
            label: "Service Price",
            path: "/dashboard/service-price"
        },
        {
            label: "Service Price Update",
            path: "/dashboard/service-price-update"
        },
        {
            label: "Order Services",
            path: "/dashboard/order-services"
        },
        {
            label: "Zero Connection Price",
            path: "/dashboard/zero-connection-price"
        },
        {
            label: "Zero Price Update",
            path: "/dashboard/zero-connection-price-update"
        },
        {
            label: "Organic Price",
            path: "/dashboard/organic-price"
        },
        {
            label: "Organic Price Update",
            path: "/dashboard/organic-price-update"
        },
        {
            label: "Manually Price",
            path: "/dashboard/manual-price"
        },
        {
            label: "Manually Price Update",
            path: "/dashboard/manual-price-update"
        },
    ]
    return (
        <div className='flex h-screen overflow-auto'>
            <div className='w-1/6 h-full flex flex-col gap-4 bg-slate-100 py-8 px-3'>
                {
                    navLinks.map(nav => (
                        <Link key={nav?.label} href={nav?.path} className={`dashboardBtn ${pathname === nav?.path && 'bg-blue-500 text-white'}`}>{nav?.label}</Link>
                    ))
                }
            </div>
            <div className='w-5/6'>
                {children}
            </div>
        </div>
    );
};
