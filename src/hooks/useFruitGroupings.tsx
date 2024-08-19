
import { useFruitQuery } from "@/data-provider/query-service";
import { TFruit, TGrouping } from "@/types";

export const useFruitGroupigns = (groupType: TGrouping) => {
    const { data: fruit } = useFruitQuery();

    if (!groupType || groupType === "none") return {}

    const uniqueFruitTypes = [...new Set(fruit?.map(fruit => fruit[groupType].trim()))]


    const fruitGrouping = uniqueFruitTypes.reduce((fruitGrouping, uniqueFruitType) => {
        fruitGrouping[uniqueFruitType] = fruit?.filter(fruit => fruit[groupType] === uniqueFruitType);
        return fruitGrouping
    }, {})

    return fruitGrouping
}