import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PricingTier = ({
  name,
  price,
  description,
  features,
  cta,
  popular = false,
}: PricingTierProps) => {
  return (
    <Card
      className={`flex flex-col h-full ${popular ? "border-primary shadow-lg relative" : ""}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Free" && (
            <span className="text-muted-foreground">/month</span>
          )}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={popular ? "default" : "outline"}
          onClick={() => (window.location.href = "/signup")}
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingSection = () => {
  const pricingTiers = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for beginners exploring Instagram analytics",
      features: [
        "5 hashtag searches per day",
        "Basic engagement metrics",
        "7-day data history",
        "CSV export",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "Ideal for content creators and small businesses",
      features: [
        "50 hashtag searches per day",
        "Advanced engagement analytics",
        "30-day data history",
        "CSV & Excel exports",
        "Competitor analysis",
        "Related hashtags suggestions",
        "Priority email support",
      ],
      cta: "Start 7-Day Free Trial",
      popular: true,
    },
    {
      name: "Business",
      price: "$79",
      description: "For agencies and professional marketers",
      features: [
        "Unlimited hashtag searches",
        "Full analytics suite",
        "90-day data history",
        "All export formats (CSV, Excel, PDF)",
        "Advanced competitor analysis",
        "Custom reports",
        "API access",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that's right for your needs. No hidden fees or
            surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              cta={tier.cta}
              popular={tier.popular}
            />
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-6">
            All plans include a 7-day money-back guarantee. No questions asked.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="link">Compare Plans</Button>
            <Button variant="link">Enterprise Solutions</Button>
            <Button variant="link">Refund Policy</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
