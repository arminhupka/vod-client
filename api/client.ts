import { QueryClient } from "react-query";
import axios from "axios";

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
