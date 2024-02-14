import Link from "next/link";

export default function page() {
    return (
        <div className='min-h-screen flex items-center justify-center gap-6'>
            <Link href={'/buy-linkedin-account'} className="button">Buy Linkedin Account</Link>
            <Link href={'/buy-account-service'} className="button">Buy Other Services</Link>
        </div>
    );
};
