const getServicesPrices = async () => {
  const response = await fetch(
    "https://linkedin-buy-server.vercel.app/api/services-price"
  );
  return await response.json().finally();
};

export default getServicesPrices;
