import { useState } from "react";
import { FruitContainer } from "../fruit-panel/FruitContainer";
import { JarContainer } from "../jar-panel/JarContainer";
import { TFruit } from "@/types";
import { useFruitQuery } from "@/data-provider/query-service";
import Spinner from "@/components/ui/spinner";

export const Container = () => {
  const [fruitJar, updateFruitJar] = useState<TFruit[]>([])
  const {isLoading, isError} = useFruitQuery()

  if (isLoading) return <div className="flex items-center justify-center w-full h-full">
    <Spinner className="w-[40px] h-[40px]"/>
  </div>

  if (isError) return <div className="flex items-center justify-center w-full h-full">
    <h1>Something went wrong.</h1>
  </div>
  return (
    <div className="w-full flex justify-between">
          <FruitContainer updateFruitJar={updateFruitJar} fruitJar={fruitJar}/>
          <JarContainer fruitJar={fruitJar} setFruitJar={updateFruitJar}/>
    </div>
  );
};
