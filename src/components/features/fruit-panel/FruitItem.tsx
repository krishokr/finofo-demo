import { Button } from "@/components/ui/button";
import { TFruit } from "@/types";
import { PlusIcon } from "@radix-ui/react-icons";

type TFruitItemProps = {
    fruit: TFruit;
    handleClick: () => void;
}

export const FruitItem: React.FC<TFruitItemProps> = ({ fruit, handleClick }) => {
    return <div className="flex justify-between m-2">
        <p>{fruit.name}</p>
        <p>{fruit.nutritions.calories} kcal</p>
        <Button onClick={handleClick}>Add <PlusIcon /></Button>
    </div>
}