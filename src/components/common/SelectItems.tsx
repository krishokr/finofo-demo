import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Generic component for reusability
type TSelectItems = {
  items: string[];
  selectedItem?: string;
  setSelectedItem: (item?: string) => void;
  placeholder: string;
};

export const SelectItems: React.FC<TSelectItems> = ({
  items,
  selectedItem,
  setSelectedItem,
  placeholder,
}) => {
  const handleValueChange = (item: string) => setSelectedItem(item);

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
          <SelectItem key={`item ${i}`} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
