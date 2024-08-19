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

export const useFruitFamilyQuery = (family: string, enabled?: { enabled?: boolean }) => {
    return useQuery({
        queryKey: [queryKeys.family],
        queryFn: async () => {
            const response = await api.get(`/api/family/${family}`)
            return response.data
        },
        ...enabled
    })
}

export const useFruitGenusQuery = (genus: string, enabled?: { enabled?: boolean }) => {
    return useQuery({
        queryKey: [queryKeys.genus],
        queryFn: async () => {
            const response = await api.get(`/api/genus/${genus}`)
            return response.data
        },
        ...enabled
    })
}

export const useFruitOrderQuery = (order: string, enabled?: { enabled?: boolean }) => {
    return useQuery({
        queryKey: [queryKeys.order],
        queryFn: async () => {
            const response = await api.get(`/api/order/${order}`)
            return response.data
        },
        ...enabled
    })
}