import { cn } from "@/lib/utils";
import { SymbolIcon } from "@radix-ui/react-icons";

const Spinner = ({ className }: { className?: string }) => {
  return <SymbolIcon className={cn("animate-spin", className)} />;
};

export default Spinner;