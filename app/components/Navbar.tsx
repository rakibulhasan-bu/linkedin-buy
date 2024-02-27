import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const navLinks = [
        {
            label: "Services",
            path: "/services"
        },
        {
            label: "Customer Reviews",
            path: "/services"
        },
        {
            label: "Check Order",
            path: "/services"
        },
        {
            label: "Support",
            path: "/services"
        },
    ]
    return (
        <div style={{ position: "-webkit-sticky", top: "0" }} className='border-b shadow z-10 sticky top-0 bg-white'>
            <div className='container mx-auto flex items-center justify-between px-2 lg:px-8 py-2'>
                <Link className="flex items-center gap-2" href={'/'}>
                    <Image width={48} height={48} className="w-8 lg:w-12 h-8 lg:h-12 object-cover" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1707328885/Website-assets/linkedin-buy/logo_koap5s.png" alt="" />
                    <span className="font-medium">Buy Linkedin365</span>
                </Link>
                <nav className="flex items-center gap-8">
                    {
                        navLinks.map(navItem => (
                            <Link key={navItem?.label} href={navItem?.path} className="font-medium">{navItem?.label}</Link>
                        ))
                    }
                </nav>
            </div>
        </div>
    );
};
