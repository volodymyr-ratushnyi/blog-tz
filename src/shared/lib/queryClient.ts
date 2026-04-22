import { QueryClient } from '@tanstack/react-query'
import axios from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: (failureCount, error) => {
        if (axios.isAxiosError(error) && error.response?.status === 404) return false
        return failureCount < 3
      },
    },
  },
})
