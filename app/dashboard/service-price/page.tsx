const getServicesPrices = async () => {
    const response = await fetch(
        "https://linkedin-buy-server.vercel.app/api/services-price",
        {
            cache: "no-cache"
        }
    );
    return await response.json();
};

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
            <h2 className="text-lg font-semibold text-center pb-4">Services Prices List Now</h2>
            {data.map((item: any) => (
                <div key={item._id} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <p>Share Prize: {item.sharePrize}</p>
                    <p>Connection Prize: {item.connectionPrize}</p>
                    <p>Followers Prize: {item.followersPrize}</p>
                    <p>Comments Prize: {item.commentsPrize}</p>
                    <p>Reactions Prize: {item.reactionsPrize}</p>
                    <p>Likes Prize: {item.likesPrize}</p>
                    <p>Updated At: {formatDate(item.updatedAt)}</p>
                </div>
            ))}
        </div>
    );
};
