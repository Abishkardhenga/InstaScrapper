import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarSeed: string;
  rating?: number;
}

const Testimonial = ({
  quote,
  author,
  role,
  company,
  avatarSeed,
  rating = 5,
}: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center space-x-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-lg mb-6">"{quote}"</blockquote>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`}
              alt={author}
            />
            <AvatarFallback>
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-muted-foreground">
              {role}, {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "This tool has completely transformed our Instagram strategy. We've seen a 43% increase in engagement since using the hashtag analyzer.",
      author: "Sarah Johnson",
      role: "Social Media Manager",
      company: "StyleBrand",
      avatarSeed: "sarah",
      rating: 5,
    },
    {
      quote:
        "The data export feature saves me hours every week. I can quickly generate reports for clients and show them real results.",
      author: "Michael Chen",
      role: "Digital Marketing Consultant",
      company: "GrowthHackers",
      avatarSeed: "michael",
      rating: 5,
    },
    {
      quote:
        "As an influencer, understanding which hashtags actually work has been game-changing. My reach has doubled in just two months!",
      author: "Alex Rivera",
      role: "Content Creator",
      company: "TravelVibes",
      avatarSeed: "alex",
      rating: 5,
    },
    {
      quote:
        "The competitor analysis feature gives us insights we couldn't get anywhere else. Worth every penny for our agency.",
      author: "Jessica Williams",
      role: "Agency Owner",
      company: "Social Spark",
      avatarSeed: "jessica",
      rating: 4,
    },
    {
      quote:
        "I was skeptical at first, but the ROI has been incredible. We've grown our account by 15K followers using the trending hashtag recommendations.",
      author: "David Thompson",
      role: "E-commerce Manager",
      company: "Urban Outfitters",
      avatarSeed: "david",
      rating: 5,
    },
    {
      quote:
        "The interface is so intuitive, and the insights are actionable. It's become an essential part of our content planning process.",
      author: "Emma Rodriguez",
      role: "Brand Strategist",
      company: "Creative Collective",
      avatarSeed: "emma",
      rating: 5,
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Marketers & Businesses Worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it. See what our customers have to say
            about their results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatarSeed={testimonial.avatarSeed}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">
            Trusted by brands you know
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[
              "Nike",
              "Adidas",
              "Puma",
              "Reebok",
              "Under Armour",
              "New Balance",
            ].map((brand, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-muted-foreground"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
