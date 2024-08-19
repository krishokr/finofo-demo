import { useQuery } from "@tanstack/react-query"
import { baseURL, allFruit, fruitFamily, fruitGenus, fruitOrder } from "./endpoints"

enum queryKeys {
    fruit = "fruit",
    family = "family",
    genus = "genus",
    order = "order"
}
export const useFruitQuery = () => {
    return useQuery({
        queryKey: [queryKeys.fruit],
        queryFn: async () => {
            const response = await fetch('https://www.fruityvice.com/api/fruit/all')
            return response.json()
        }
    })
}

export const useFruitFamilyQuery = (family: string) => {
    return useQuery({
        queryKey: [queryKeys.family],
        queryFn: async () => {
            const response = await fetch(baseURL + fruitFamily(family))
            return response.json()
        }
    })
}

export const useFruitGenusQuery = (genus: string) => {
    return useQuery({
        queryKey: [queryKeys.genus],
        queryFn: async () => {
            const response = await fetch(baseURL + fruitGenus(genus))
            return response.json()
        }
    })
}

export const useFruitOrderQuery = (order: string) => {
    return useQuery({
        queryKey: [queryKeys.order],
        queryFn: async () => {
            const response = await fetch(baseURL + fruitOrder(order))
            return response.json()
        }
    })
}