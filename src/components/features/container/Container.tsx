import { useState } from "react";
import { FruitContainer } from "../fruit-panel/FruitContainer";
import { JarContainer } from "../jar-panel/JarContainer";

export const Container = () => {
    const [jar, setJar] = useState([])

  return (
    <div className="w-full flex justify-between">
          <FruitContainer setJar={setJar} />
          <JarContainer jar={jar} />
    </div>
  );
};
