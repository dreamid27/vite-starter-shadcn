import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How much does it cost to deploy an app?",
      answer:
        "You can start for free. Most paid plans are just IDR 15,000–25,000 per month.",
    },
    {
      question: "Is my app secure?",
      answer: "Yes! Every app is HTTPS-secured by default.",
    },
    {
      question: "Can I use my own domain?",
      answer: "Custom domains are coming soon. Stay tuned!",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Can't find the answer you're looking for? Reach out to our support
              team.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-lg text-muted-foreground">Need more help?</p>
          <Button size="lg" variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
