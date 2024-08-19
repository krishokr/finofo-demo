import { TFruit } from "@/types"
import { FruitItem } from "../fruit-panel/FruitItem"
import { MinusIcon } from "@radix-ui/react-icons";

type TJarContainer = {
    fruitJar: TFruit[];
    setFruitJar: (prev: React.SetStateAction<TFruit[]>) => void;
}

export const JarContainer: React.FC<TJarContainer> = ({ fruitJar, setFruitJar }) => {

    const removeFruit = (fruitItem: TFruit) => {
        const _fruitJar = fruitJar.filter(fruit => fruit.id !== fruitItem.id)
        return setFruitJar(_fruitJar);
    }

    const totalCalories = fruitJar.reduce((total, fruitItem) => {
        return total += fruitItem.nutritions.calories
    },0)
    
    return <div className="w-full text-center">
        <h1>Fruit Jar</h1>
        <div className="overflow-y-scroll h-[500px] p-4 my-4">
            {
                fruitJar.map(item => <FruitItem fruit={item} handleClick={() => removeFruit(item)} buttonContent={<>
                    Remove <MinusIcon />
                </>} />)
            }
        </div>
        <h1>Total calories: {totalCalories}</h1>
    </div>
}