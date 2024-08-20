
import { useFruitQuery } from "@/data-provider/query-service";
import { TFruit } from "@/types";

type TFruitGrouping = {
    [key: string]: TFruit[];
}

export const useFruitGroupigns = (groupType: string): TFruitGrouping => {
    const { data: fruitData } = useFruitQuery();

    if (!groupType || groupType === "none" || !fruitData) return {}

    const fruitGroupNames: string[] = [...new Set(fruitData?.map(fruit => (fruit[groupType as keyof TFruit] as string).trim()))]

    const groupings = fruitGroupNames.reduce((fruitGroupings, groupName) => {
        fruitGroupings[groupName] = fruitData.filter(fruit => fruit[groupType as keyof TFruit] === groupName);
        return fruitGroupings
    }, {} as TFruitGrouping)

    return groupings
}