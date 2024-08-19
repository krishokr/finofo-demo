import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const groupings = ["None", "Family", "Order", "Genus"];

export const SelectFruits = () => {
  const [selectedGrouping, setSelectedGrouping] = useState<
    string | undefined
  >();

  const handleValueChange = (grouping: string) => setSelectedGrouping(grouping);

  return (
    <Select
      onValueChange={handleValueChange}
      value={selectedGrouping}
      defaultValue={selectedGrouping}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Group By" />
      </SelectTrigger>
      <SelectContent>
        {groupings.map((grouping) => (
          <SelectItem key={grouping} value={grouping}>
            {grouping}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
