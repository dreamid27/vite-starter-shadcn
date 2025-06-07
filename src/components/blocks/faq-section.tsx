import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

export const FAQSection = ({
  heading = "Frequently asked questions",
  items = [
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
    {
      question: "Do I need technical skills to use Sumopod?",
      answer:
        "No advanced technical skills are required. Our templates and guided deployment make it easy for anyone to get started.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We use a trusted payment provider to process payments securely. Various payment methods are supported.",
    },
    {
      question: "How long does it take to deploy an app?",
      answer:
        "Most templates are ready to use in just 15 seconds, so you can go live almost instantly.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-32" id="faq">
      <div className="container mx-auto max-w-3xl lg:max-w-5xl px-6">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-md">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
