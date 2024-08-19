import { useState } from "react";
import { FruitContainer } from "../fruit-panel/FruitContainer";
import { JarContainer } from "../jar-panel/JarContainer";
import { TFruit } from "@/types";

export const Container = () => {
  const [fruitJar, updateFruitJar] = useState<TFruit[]>([])

  return (
    <div className="w-full flex justify-between">
          <FruitContainer updateFruitJar={updateFruitJar} />
          <JarContainer fruitJar={fruitJar} />
    </div>
  );
};
