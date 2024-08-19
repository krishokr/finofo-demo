import { TFruit } from "@/types"

type TJarContainer = {
    fruitJar: TFruit[]
}

export const JarContainer: React.FC<TJarContainer> = ({ fruitJar }) => {
    
    return <div className="w-full text-center">
        <h1>Fruit Jar</h1>
    </div>
}