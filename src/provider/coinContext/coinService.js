import axios from "axios";

export const fetchCoins = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  //   const response = await axios.get(
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc"
  //   );
  //   const response = await axios.get(
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //   );
  //   https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-XjwDzQ1wQEAkeoByZmSe8haR

  return response.data.coins;
};

export const fetchCoin = async (coinId) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${coinId}`
  );
  return response.data;
};
