import { SelectItems } from "@/components/common/SelectItems";
import { useEffect, useState } from "react";
import { FruitItem } from "./FruitItem";
import { SingleAccordion } from "@/components/common/SingleAccordion";
import { useFruitQuery } from "@/data-provider/query-service";
import { TFruit, TGrouping } from "@/types";
import { useFruitGroupigns } from "@/hooks/useFruitGroupings";

type TFruitContainerProps = {
  updateFruitJar: (prev: React.SetStateAction<TFruit[]>) => void;
  fruitJar: TFruit[]
}

const groupings = ["None", "Family", "Genus", "Order"];
const DEFAULT_GROUPING = groupings[0];

export const FruitContainer: React.FC<TFruitContainerProps> = ({updateFruitJar, fruitJar}) => {
  const [selectedGrouping, setSelectedGrouping] = useState<
    TGrouping | ''
    >('');
  
  const { data: fruitData, isLoading, isError } = useFruitQuery();

  const fruitGroupings = useFruitGroupigns(selectedGrouping.toLowerCase() as TGrouping)

  const handleClick = (fruit: TFruit) => {
    return updateFruitJar((prev: TFruit[]) => [...prev, fruit])
  };

  const isInFruitJar = (fruit: TFruit) => fruitJar?.some(jaredFruit => jaredFruit.id === fruit.id)

  useEffect(() => {
    console.log(fruitJar)
  },[])

  if (isLoading) return <h1>loading...</h1>
  if (isError) return <h1>Something went wrong fetching fruit.</h1>

  return (
    <div className="w-full text-center m-4">
      <h1>Fruit List</h1>
      <SelectItems
        items={groupings as TGrouping[]}
        selectedItem={selectedGrouping}
        setSelectedItem={setSelectedGrouping}
        placeholder="Group By"
      />
      <div className="overflow-y-scroll h-[500px] p-4 my-4">
        {!selectedGrouping || selectedGrouping === DEFAULT_GROUPING ? (
          fruitData?.map((fruit: TFruit, i: number) => (
            <FruitItem
              key={`${fruit} - ${i}`}
              fruit={fruit}
              handleClick={() => handleClick(fruit)}
              isDisabled={isInFruitJar(fruit)}
            />
          ))
        ) : (
          Object.keys(fruitGroupings).map(grouping => <SingleAccordion
            header={grouping}
            content={
              <div>
                {fruitGroupings[grouping]?.map((fruit: TFruit, i: number) => (
                  <FruitItem
                    key={`${fruit} - ${i}`}
                    fruit={fruit}
                    handleClick={() => handleClick(fruit)}
                    isDisabled={isInFruitJar(fruit)}
                  />
                ))}
              </div>
            }
          />)
          )}
          </div>
    </div>
  );
};
