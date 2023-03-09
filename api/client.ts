import axios from "axios";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
    },
  },
});

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
