import Link from "next/link";

export default function page() {
    return (
        <div className='min-h-screen container mx-auto px-4 py-4 lg:py-10'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10'>
                <div className='myShadow rounded-md'>
                    <img src="/buy.jpg" className="h-[30dvh] lg:h-[55dvh] w-full object-cover" alt="" />
                    <div className='px-4 lg:px-6 py-4'>
                        <h2 className="lg:text-lg">Now you can buy LinkedIn Accounts at an affordable price. Whether you want them for your business or personal goals on LinkedIn, BuyLinkedin365 is here to help.Choose from our wide selection of carefully crafted LinkedIn account packages. It’s cheap and 100% safe to get the worry-free service that you deserve. Let BuyLinkedin365 give you the push that you need for your LinkedIn accounts.</h2>
                        <div className='flex items-center justify-center py-4 '>
                            <Link href={'/buy-linkedin-account'} className="button">Buy Linkedin Account</Link>
                        </div>
                    </div>
                </div>

                <div className='myShadow rounded-md'>
                    <img src="/service.jpg" className="h-[30dvh] lg:h-[55dvh] w-full object-cover" alt="" />
                    <div className='px-4 lg:px-6 py-4'>
                        <h2 className="lg:text-lg">Unlock Your LinkedIn Potential!
                            Elevate your LinkedIn profile with our exclusive services. By purchasing our services, you can strategically grow your network with targeted connections, increase your visibility with more followers, amplify your posts with reactions, extend your reach with shares, and foster meaningful interactions with comments. Don&apos;t miss out on expanding your reach and engagement.
                        </h2>
                        <div className='flex items-end justify-center py-4'>
                            <Link href={'/buy-account-service'} className="button">Buy Other Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
