import { TFruit } from "@/types";
import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4000'
  });

enum queryKeys {
    fruit = "fruit",
    family = "family",
    genus = "genus",
    order = "order"
}
export const useFruitQuery = () => {
    return useQuery<TFruit[], Error>({
        queryKey: [queryKeys.fruit],
        queryFn: async (): Promise<TFruit[]>  => {
            const response = await api.get('/api/fruits')
            return response.data
        }
    })
}