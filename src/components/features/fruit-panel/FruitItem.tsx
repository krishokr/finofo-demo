import { Button } from "@/components/ui/button";
import { TFruit } from "@/types";
import { ReactNode } from "react";

type TFruitItemProps = {
    fruit: TFruit;
    handleClick: () => void;
    isDisabled?: boolean;
    buttonContent: ReactNode;
}

export const FruitItem: React.FC<TFruitItemProps> = ({ fruit, handleClick, isDisabled, buttonContent }) => {
    return <div className="flex justify-between m-2">
        <p>{fruit.name}</p>
        <p>{fruit.nutritions.calories} kcal</p>
        <Button disabled={isDisabled} onClick={handleClick}>{buttonContent}</Button>
    </div>
}