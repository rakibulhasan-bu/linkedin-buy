import Link from "next/link";

export default function Navbar() {
    return (
        <div style={{ position: "-webkit-sticky", top: "0" }} className='border-b shadow z-10 sticky top-0 bg-white'>
            <div className='container mx-auto flex items-center justify-between py-2'>
                <Link className="flex items-center gap-2" href={'/'}>
                    <img className="w-12 h-12 object-cover" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1707328885/Website-assets/linkedin-buy/logo_koap5s.png" alt="" />
                    <span className="text-xl font-semibold text-primary">Buy Linkedin Account</span>
                </Link>
                <nav className="flex items-center gap-4">

                    <Link href={'/buy-linkedin'} className="button">Buy LinkedIn Acc</Link>
                    <button className="button">Buy Account Service</button>
                </nav>
            </div>
        </div>
    );
};
