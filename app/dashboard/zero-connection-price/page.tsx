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
        return `${formattedDate} at ${formattedTime}`;
    };

    return (
        <div className="max-w-5xl mx-auto py-6 px-12">
            <h2 className="text-lg font-semibold text-center pb-4">Zero Connection Services Prices List</h2>
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
