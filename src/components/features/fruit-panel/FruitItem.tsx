import { Button } from "@/components/ui/button";
import { TFruit } from "@/types";
import { ReactNode } from "react";

type TFruitItemProps = {
  fruit: TFruit;
  handleClick: () => void;
  isDisabled?: boolean;
  buttonContent: ReactNode;
};

export const FruitItem: React.FC<TFruitItemProps> = ({
  fruit,
  handleClick,
  isDisabled,
  buttonContent,
}) => {
  return (
    <div className="flex m-2 justify-between">
      <div className="flex w-full gap-x-2">
        <p>{fruit.name}</p>
        <p>({fruit.nutritions.calories} kcal)</p>
      </div>
      <Button disabled={isDisabled} onClick={handleClick}>
        {buttonContent}
      </Button>
    </div>
  );
};
