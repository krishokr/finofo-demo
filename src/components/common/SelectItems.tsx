import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TGrouping } from "@/types";

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

  return (
    <Select
      onValueChange={handleValueChange}
      value={selectedItem}
      defaultValue="None"
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
