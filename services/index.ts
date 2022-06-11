import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { APIResponse } from "./types";


const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
}
const coinMarketCap: AxiosInstance = axios.create(config);

export const FetchCoins = async(): Promise<APIResponse | any> => {
  try {
    const { data } = await coinMarketCap.get(
      '/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 10,
          page: 1,
          sparkline: false,
        }
      }
    )
    return data
  } catch (err) {
    console.log(err);
  }
}
