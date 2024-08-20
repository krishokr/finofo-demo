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
    }, 0)
    
    return <div className="w-full m-4 flex flex-col">
        <h1 className="text-center text-xl">Fruit Jar</h1>
        <h1 className="bg-primary rounded text-white p-2 m-2">Total calories: {totalCalories} kcal</h1>
        <div className="overflow-y-scroll sm:h-[500px] md:h-[575px] p-4 my-4">
            {
                fruitJar.map((item,i) => <FruitItem key={`${i} - ${item}`}  fruit={item} handleClick={() => removeFruit(item)} buttonContent={<>
                    Remove <MinusIcon />
                </>} />)
            }
        </div>
    </div>
}