import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

type TFruitItemProps = {
    fruitType: string;
    calories: string;
    handleClick: () => void;
}

export const FruitItem: React.FC<TFruitItemProps> = ({ fruitType, calories, handleClick }) => {
    return <div className="flex justify-between m-2">
        <p>{fruitType}</p>
        <p>{calories} kcal</p>
        <Button onClick={handleClick}>Add <PlusIcon /></Button>
    </div>
}