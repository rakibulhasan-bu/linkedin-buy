interface TOrderServices {
    _id: string;
    commentsPostLink?: string;
    connectionsPostLink?: string;
    email: string;
    followersPostLink?: string;
    likesPostLink?: string;
    reactionsPostLink?: string;
    sharePostLink?: string;
    skype?: string;
    telegram?: string;
    whatsApp?: string;
    share?: number;
    connections?: number;
    followers?: number;
    comments?: number;
    reactions?: number;
    likes?: number;
    totalPrize: string;
}


const getOrderServices = async () => {
    const response = await fetch(
        "https://linkedin-buy-server.vercel.app/api/order-services",
        {
            cache: "no-store"
        }
    );
    return await response.json();
};

export default async function page() {
    const { data } = await getOrderServices();

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((order: TOrderServices) => (
                <div key={order?._id} className="w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl p-4">
                    <div className="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold">Order Information</div>
                    {order?.email &&
                        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{order?.email}</h2>
                    }
                    {order?.totalPrize &&
                        <p className="mt-1 text-gray-500">Total Prize: {order?.totalPrize} $</p>
                    }
                    <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-1">
                        {order?.share &&
                            <p className="text-gray-500">Share: {order?.share}</p>
                        }
                        {order?.connections &&
                            <p className="text-gray-500">Connections: {order?.connections}</p>
                        }
                        {order?.followers &&
                            <p className="text-gray-500">Followers: {order?.followers}</p>
                        }
                        {order?.comments &&
                            <p className="text-gray-500">Comments: {order?.comments}</p>
                        }
                        {order?.reactions &&
                            <p className="text-gray-500">Reactions: {order?.reactions}</p>
                        }
                        {order?.likes &&
                            <p className="text-gray-500">Likes: {order?.likes}</p>
                        }
                    </div>
                    <div className="mt-2 space-y-2 text-sm">
                        {order?.sharePostLink &&
                            <p className="text-indigo-500">Share Post Link: {order?.sharePostLink}</p>
                        }
                        {order?.connectionsPostLink &&
                            <p className="text-indigo-500">Connections Post Link: {order?.connectionsPostLink}</p>
                        }
                        {order?.followersPostLink &&
                            <p className="text-indigo-500">Followers Post Link: {order?.followersPostLink}</p>
                        }
                        {order?.commentsPostLink &&
                            <p className="text-indigo-500">Comments Post Link: {order?.commentsPostLink}</p>
                        }
                        {order?.reactionsPostLink &&
                            <p className="text-indigo-500">Reactions Post Link: {order?.reactionsPostLink}</p>
                        }
                        {order?.likesPostLink &&
                            <p className="text-indigo-500">Likes Post Link: {order?.likesPostLink}</p>
                        }
                    </div>

                    <div className="mt-2 space-y-2 text-sm">
                        {order?.skype &&
                            <p className="text-green-500">Skype Account Link: {order?.skype}</p>
                        }
                        {order?.whatsApp &&
                            <p className="text-green-500">WhatsApp Account Link: {order?.whatsApp}</p>
                        }
                        {order?.telegram &&
                            <p className="text-green-500">Telegram Account Link: {order?.telegram}</p>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};
