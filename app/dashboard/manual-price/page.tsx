import { TManualPrice } from "@/app/interface/manual-price";

const getServicesPrices = async () => {
    const response = await fetch(
        "https://linkedin-buy-server.vercel.app/api/manual-price/65ded3011ec8223f23f25e6f",
        {
            cache: "no-cache"
        }
    );
    return await response.json();
};

export default async function page() {

    const { data }: { data: TManualPrice } = await getServicesPrices();
    console.log(data);
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
        return `${formattedDate} at ${formattedTime}`;
    };

    return (
        <div className="container mx-auto py-6 px-12">
            <h2 className="text-lg font-semibold text-center pb-4">Organically Growed Prices List</h2>

            <p className="text-center font-medium">Updated At: <span className="text-primary">{formatDate(data?.updatedAt as string)}</span></p>
            <div className='grid grid-cols-3 gap-4 pt-4'>

                <div className='border border-slate-200 shadow rounded p-4'>
                    <h3 className="text-lg font-medium">10+ Connections Accounts</h3>
                    <p>0 to 7 Days Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.tenConnection?.sevenDays}</span></p>
                    <p>8 to 15 Days Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.tenConnection?.fifteenDays}</span></p>
                    <p>16 to 30 Days Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.tenConnection?.thirtyDays}</span></p>
                    <p>1 to 3 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.tenConnection?.threeMonths}</span></p>
                    <p>3 to 6 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.tenConnection?.sixMonths}</span></p>
                    <p>6 to 12 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.tenConnection?.oneYear}</span></p>
                    <p>1 to 4 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.tenConnection?.fourYear}</span></p>
                    <p>5 to 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.tenConnection?.tenYear}</span></p>
                    <p>More Than 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.tenConnection?.moreThanTenYear}</span></p>
                </div>

                <div className='border border-slate-200 shadow rounded p-4'>
                    <h3 className="text-lg font-medium">50+ Connections Accounts</h3>
                    <p>16 to 30 Days Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.fiftyConnection?.thirtyDays}</span></p>
                    <p>1 to 3 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.fiftyConnection?.threeMonths}</span></p>
                    <p>3 to 6 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.fiftyConnection?.sixMonths}</span></p>
                    <p>6 to 12 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.fiftyConnection?.oneYear}</span></p>
                    <p>1 to 4 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.fiftyConnection?.fourYear}</span></p>
                    <p>5 to 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.fiftyConnection?.tenYear}</span></p>
                    <p>More Than 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.fiftyConnection?.moreThanTenYear}</span></p>
                </div>

                <div className='border border-slate-200 shadow rounded p-4'>
                    <h3 className="text-lg font-medium">100+ Connections Accounts</h3>
                    <p>1 to 3 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.hundredConnection?.threeMonths}</span></p>
                    <p>3 to 6 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.hundredConnection?.sixMonths}</span></p>
                    <p>6 to 12 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.hundredConnection?.oneYear}</span></p>
                    <p>1 to 4 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.hundredConnection?.fourYear}</span></p>
                    <p>5 to 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.hundredConnection?.tenYear}</span></p>
                    <p>More Than 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.hundredConnection?.moreThanTenYear}</span></p>
                </div>

                <div className='border border-slate-200 shadow rounded p-4'>
                    <h3 className="text-lg font-medium">200+ Connections Accounts</h3>
                    <p>3 to 6 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.twoHundredConnection?.sixMonths}</span></p>
                    <p>6 to 12 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.twoHundredConnection?.oneYear}</span></p>
                    <p>1 to 4 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.twoHundredConnection?.fourYear}</span></p>
                    <p>5 to 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.twoHundredConnection?.tenYear}</span></p>
                    <p>More Than 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.twoHundredConnection?.moreThanTenYear}</span></p>
                </div>

                <div className='border border-slate-200 shadow rounded p-4'>
                    <h3 className="text-lg font-medium">300+ Connections Accounts</h3>
                    <p>6 to 12 Months Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.threeHundredConnection?.oneYear}</span></p>
                    <p>1 to 4 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.threeHundredConnection?.fourYear}</span></p>
                    <p>5 to 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.threeHundredConnection?.tenYear}</span></p>
                    <p>More Than 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.threeHundredConnection?.moreThanTenYear}</span></p>
                </div>

                <div className='border border-slate-200 shadow rounded p-4'>
                    <h3 className="text-lg font-medium">500+ Connections Accounts</h3>
                    <p>1 to 4 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.fiveHundredConnection?.fourYear}</span></p>
                    <p>5 to 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.fiveHundredConnection?.tenYear}</span></p>
                    <p>More Than 10 Year Prize: <span className="text-red-500 text-lg font-medium pl-1">{data?.fiveHundredConnection?.moreThanTenYear}</span></p>
                </div>

            </div>
        </div>
    );
};
