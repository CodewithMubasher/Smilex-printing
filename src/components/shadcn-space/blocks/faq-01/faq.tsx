import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "What printing services do you offer?",
    answer:
      "We offer a full range of printing services including digital printing, offset printing, large format printing, UV printing, photocopying, binding, laminating, graphic design, and custom stationery like wedding cards, business cards, and brochures.",
  },
  {
    question: "How long does a typical print job take?",
    answer:
      "Turnaround time depends on the complexity and quantity. Most small to medium jobs are completed within 24–48 hours. Rush orders are available upon request.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes! We offer competitive rates and special discounts for bulk orders. Contact us with your quantity and requirements and we'll provide the best quote.",
  },
  {
    question: "Can I get a proof before printing?",
    answer:
      "Absolutely. We provide a digital proof for approval before starting the print run. This ensures the design, colors, and layout are exactly what you need.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "We accept PDF, AI, PSD, CDR, EPS, JPG, and PNG files. If you don't have a print-ready file, our graphic design team can help create one for you.",
  },
];

export default function Faq() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center animate-in fade-in slide-in-from-top-8 duration-500 ease-in-out fill-mode-both">
          <Badge
            variant="outline"
            className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
          >
            FAQs
          </Badge>
          <h2 className="text-2xl sm:text-5xl font-medium text-center max-w-lg">
            Got questions? We've got answers
          </h2>
        </div>
        <div>
          <Accordion className="w-full flex flex-col gap-6">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "p-4 sm:p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-all duration-300",
                  index === 0 && "animate-in fade-in slide-in-from-bottom-4 duration-400",
                  index === 1 && "animate-in fade-in slide-in-from-bottom-4 duration-400 delay-75",
                  index === 2 && "animate-in fade-in slide-in-from-bottom-4 duration-400 delay-100",
                  index === 3 && "animate-in fade-in slide-in-from-bottom-4 duration-400 delay-150",
                  index === 4 && "animate-in fade-in slide-in-from-bottom-4 duration-400 delay-200",
                )}
              >
                    <AccordionTrigger className="p-0 text-sm sm:text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                      {faq.question}
                      <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                    </AccordionTrigger>
                <AccordionContent className="p-0 text-muted-foreground text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
