import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TFruit, TGrouping } from "@/types";

// Generic component for reusability
type TSelectItems = {
  items: TGrouping[];
  selectedItem: string;
  setSelectedItem: (item: TGrouping) => void;
  placeholder: string;
};

export const SelectItems: React.FC<TSelectItems> = ({
  items,
  selectedItem,
  setSelectedItem,
  placeholder,
}) => {
  const handleValueChange = (item: string) => setSelectedItem(item as TGrouping);

  console.log(items)
  return (
    <Select
      onValueChange={handleValueChange}
      value={selectedItem}
      defaultValue={selectedItem}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, i) => (
          <SelectItem key={`${item} - ${i}`} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
