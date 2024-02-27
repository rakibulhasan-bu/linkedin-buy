const getServicesPrices = async () => {
    const response = await fetch(
        "https://linkedin-buy-server.vercel.app/api/zero-connection-price",
        {
            cache: "no-cache"
        }
    );
    return await response.json();
};

export interface TZeroConnectionPricing {
    _id: string;
    sevenDays: string;
    fifteenDays: string;
    thirtyDays: string;
    threeMonths: string;
    sixMonths: string;
    oneYear: string;
    fourYear: string;
    tenYear: string;
    moreThanTenYear: string;
    updatedAt: string;
}

export default async function page() {

    const { data } = await getServicesPrices();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        const formattedTime = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        });
        const period = date.getHours() < 12 ? 'AM' : 'PM';
        return `${formattedDate} at ${formattedTime} ${period}`;
    };
    //     {
    //         sevenDays:,
    //             fifteenDays:,
    //         thirtyDays:,
    //             threeMonths:,
    //         sixMonths:,
    //             oneYear:,
    //         fourYear:,
    //             tenYear:,
    //         moreThanTenYear:,

    // }

    return (
        <div className="max-w-5xl mx-auto py-6 px-12">
            <h2 className="text-lg font-semibold text-center pb-4">Organically Growed Prices List</h2>

            <div className='grid grid-cols-2 gap-8'>
                {/* <div className='py-2 '>
                <h3>1 to 9 Connections Accounts</h3>
                <p>3 to 6 Months Prize: {item?.sixMonths}</p>
                <p>6 to 12 Months Prize: {item?.oneYear}</p>
                <p>1 to 4 Year Prize: {item?.fourYear}</p>
                <p>5 to 10 Year Prize: {item?.tenYear}</p>
                <p>More Than 10 Year Prize: {item?.moreThanTenYear}</p>
            </div>

            <div className='py-2 '>
                <h3>10+ Connections Accounts</h3>
                <p>3 to 6 Months Prize: {item?.sixMonths}</p>
                <p>6 to 12 Months Prize: {item?.oneYear}</p>
                <p>1 to 4 Year Prize: {item?.fourYear}</p>
                <p>5 to 10 Year Prize: {item?.tenYear}</p>
                <p>More Than 10 Year Prize: {item?.moreThanTenYear}</p>
            </div>

            <div className='py-2 '>
                <h3>100+ Connections Accounts</h3>
                <p>3 to 6 Months Prize: {item?.sixMonths}</p>
                <p>6 to 12 Months Prize: {item?.oneYear}</p>
                <p>1 to 4 Year Prize: {item?.fourYear}</p>
                <p>5 to 10 Year Prize: {item?.tenYear}</p>
                <p>More Than 10 Year Prize: {item?.moreThanTenYear}</p>
            </div>

            <div className='py-2 '>
                <h3>200+ Connections Accounts</h3>
                <p>6 to 12 Months Prize: {item?.oneYear}</p>
                <p>1 to 4 Year Prize: {item?.fourYear}</p>
                <p>5 to 10 Year Prize: {item?.tenYear}</p>
                <p>More Than 10 Year Prize: {item?.moreThanTenYear}</p>
            </div>

            <div className='py-2 '>
                <h3>300+ Connections Accounts</h3>
                <p>6 to 12 Months Prize: {item?.oneYear}</p>
                <p>1 to 4 Year Prize: {item?.fourYear}</p>
                <p>5 to 10 Year Prize: {item?.tenYear}</p>
                <p>More Than 10 Year Prize: {item?.moreThanTenYear}</p>
            </div>

            <div className='py-2 '>
                <h3>500+ Connections Accounts</h3>
                <p>6 to 12 Months Prize: {item?.oneYear}</p>
                <p>1 to 4 Year Prize: {item?.fourYear}</p>
                <p>5 to 10 Year Prize: {item?.tenYear}</p>
                <p>More Than 10 Year Prize: {item?.moreThanTenYear}</p>
            </div>

            <div className='py-2 '>
                <h3>1000+ Connections Accounts</h3>
                <p>1 to 4 Year Prize: {item?.fourYear}</p>
                <p>5 to 10 Year Prize: {item?.tenYear}</p>
                <p>More Than 10 Year Prize: {item?.moreThanTenYear}</p>
            </div>

            <div className='py-2 '>
                <h3>2000+ Connections Accounts</h3>
                <p>1 to 4 Year Prize: {item?.fourYear}</p>
                <p>5 to 10 Year Prize: {item?.tenYear}</p>
                <p>More Than 10 Year Prize: {item?.moreThanTenYear}</p>
            </div> */}
            </div>

            {data?.map((item: TZeroConnectionPricing) => (
                <div key={item?._id} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <p>Seven Days Prize: {item?.sevenDays}</p>
                    <p>Fifteen Days Prize: {item?.fifteenDays}</p>
                    <p>Thirty Days Prize: {item?.thirtyDays}</p>
                    <p>Three Months Prize: {item?.threeMonths}</p>
                    <p>Six Months Prize: {item?.sixMonths}</p>
                    <p>One Year Prize: {item?.oneYear}</p>
                    <p>Four Year Prize: {item?.fourYear}</p>
                    <p>Ten Year Prize: {item?.tenYear}</p>
                    <p>More Than Ten Year Prize: {item?.moreThanTenYear}</p>
                    <p>Updated At: {formatDate(item?.updatedAt)}</p>
                </div>
            ))}
        </div>
    );
};
