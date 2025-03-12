import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Is this tool safe to use with my Instagram account?",
      answer:
        "Yes, absolutely. Our tool uses smart rate-limiting technology to ensure your scraping activities remain undetected. We follow Instagram's API guidelines and implement protective measures to keep your account safe from any restrictions or bans.",
    },
    {
      question: "How accurate is the data provided?",
      answer:
        "Our data is highly accurate and updated in real-time. We collect information directly from Instagram using advanced scraping techniques and process it through our analytics engine. Our accuracy rate is over 99% for engagement metrics and hashtag performance data.",
    },
    {
      question: "Do I need coding skills to use this tool?",
      answer:
        "Not at all! Our platform is designed with a user-friendly interface that requires zero coding knowledge. Everything is accessible through an intuitive dashboard where you can easily search, analyze, and export data with just a few clicks.",
    },
    {
      question: "How often is the data updated?",
      answer:
        "Data is updated in real-time for most features. Hashtag performance metrics are refreshed hourly, while deeper analytics like audience insights are updated daily to ensure you always have the most current information for your decision-making.",
    },
    {
      question: "Can I export the data to use in my reports?",
      answer:
        "Yes! We offer multiple export options including CSV, Excel, and PDF formats. You can easily download your data for presentations, client reports, or further analysis in other tools. Custom report templates are also available on Business plans.",
    },
    {
      question: "What happens if I reach my daily search limit?",
      answer:
        "If you reach your plan's daily search limit, you'll be notified within the platform. You can either wait until your limit resets the next day or upgrade to a higher plan for immediate access to more searches. Unused searches do not roll over to the next day.",
    },
    {
      question: "Can I analyze my competitors' hashtag strategies?",
      answer:
        "Yes, our Pro and Business plans include competitor analysis features. You can track which hashtags your competitors are using, how they're performing, and identify opportunities to improve your own strategy based on their successes and failures.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Currently, we offer a fully responsive web application that works seamlessly on mobile devices. A dedicated mobile app is in development and will be released soon, with notifications and on-the-go analytics features.",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. If you can't find what you're
            looking for, feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
