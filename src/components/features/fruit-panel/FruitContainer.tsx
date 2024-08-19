import { SelectItems } from "@/components/common/SelectItems";
import { useState } from "react";
import { FruitItem } from "./FruitItem";
import { SingleAccordion } from "@/components/common/SingleAccordion";

const groupings = ["None", "Family", "Genus", "Order"];
const DEFAULT_GROUPING = groupings[0];

const fruit = ["orange", "pineapple"];

export const FruitContainer = () => {
  const [selectedGrouping, setSelectedGrouping] = useState<
    string | undefined
  >();
  const handleClick = (fruitType: string) => {
    return fruitType;
  };

  return (
    <div className="w-full text-center m-4">
      <h1>Fruit List</h1>
      <SelectItems
        items={groupings}
        selectedItem={selectedGrouping}
        setSelectedItem={setSelectedGrouping}
        placeholder="Group By"
      />
      <div>
        {!selectedGrouping || selectedGrouping === DEFAULT_GROUPING ? (
          fruit.map((fruit, i) => (
            <FruitItem
              key={`${fruit} - ${i}`}
              fruitType={fruit}
              handleClick={() => handleClick(fruit)}
              calories={"100"}
            />
          ))
        ) : (
          <SingleAccordion
            header={selectedGrouping}
            content={
              <div>
                {fruit.map((fruit, i) => (
                  <FruitItem
                    key={`${fruit} - ${i}`}
                    fruitType={fruit}
                    handleClick={() => handleClick(fruit)}
                    calories={"100"}
                  />
                ))}
              </div>
            }
          />
        )}
      </div>
    </div>
  );
};
