import Link from "next/link";

export default function Navbar() {
    return (
        <div className='border-b shadow'>
            <div className='container mx-auto flex items-center justify-between py-4'>
                <Link href={'/'}>Buy Sell</Link>
                <nav>
                    <Link href={'/quiz'} className="button">Buy LinkedIn</Link>
                </nav>
            </div>
        </div>
    );
};
