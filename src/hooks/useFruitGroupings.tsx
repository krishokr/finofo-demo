import { useFruitQuery } from "@/components/data-provider/query-service"
import { TFruit } from "@/types";

export const useFruitGroupigns = () => {
    const { data } = useFruitQuery();

    const cats = data.reduce((categories, fruit: TFruit) => {
        categories.genus.add(fruit.genus);
        categories.family.add(fruit.family);
        categories.order.add(fruit.order)
        return categories;
    }, { genus: new Set(), family: new Set(), order: new Set() });
    
    console.log(cats)

    return cats
}