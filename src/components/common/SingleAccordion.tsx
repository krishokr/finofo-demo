import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

type TSingleAccordion = {
  header: ReactNode | string;
  content: ReactNode;
};

export const SingleAccordion: React.FC<TSingleAccordion> = ({
  header,
  content,
}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="selected-fruit">
        <AccordionTrigger>{header}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
