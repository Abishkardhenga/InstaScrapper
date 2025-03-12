import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
              Unlock Instagram Insights Instantly – Scrape, Analyze, and Grow
              Faster!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover trending hashtags, analyze engagement metrics, and make
              data-driven decisions to skyrocket your Instagram growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-medium"
                onClick={() => (window.location.href = "/signup")}
              >
                Start Scraping Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-medium"
                onClick={() => (window.location.href = "#demo")}
              >
                Watch Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              <span className="font-medium">
                Trusted by 5,000+ Marketers & Businesses
              </span>{" "}
              • No credit card required
            </p>
          </div>
          <div className="relative w-full max-w-xl">
            <div className="relative overflow-hidden rounded-xl border border-border shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
                alt="Hashtag Analyzer Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center pb-4">
                <Button variant="secondary" size="sm" className="opacity-90">
                  See Dashboard in Action
                </Button>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
