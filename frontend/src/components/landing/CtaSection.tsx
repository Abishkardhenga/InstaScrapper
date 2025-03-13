import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <div className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Instagram Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of marketers and businesses who are already
            leveraging our platform to grow their Instagram presence and drive
            real results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-medium"
              onClick={() => (window.location.href = "/signup")}
            >
              Get Started for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-medium"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-medium">Limited Time Offer:</span> Sign up
            today and get 50% off your first month of Pro plan!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
