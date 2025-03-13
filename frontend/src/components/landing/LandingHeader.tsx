import React from "react";
import { Button } from "@/components/ui/button";

const LandingHeader = () => {
  return (
    <header className="w-full h-20 bg-background/80 backdrop-blur-sm border-b border-border px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <div className="mr-8">
          <h1 className="text-xl font-bold text-primary">Hashtag Analyzer</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#features"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Features
          </a>
          <a href="#demo" className="text-gray-500 hover:text-primary">
            Demo
          </a>
          <a href="#testimonials" className="text-gray-500 hover:text-primary">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-500 hover:text-primary">
            Pricing
          </a>
          <a href="#faq" className="text-gray-500 hover:text-primary">
            FAQ
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          className="hidden md:inline-flex"
          onClick={() => (window.location.href = "/login")}
        >
          Log In
        </Button>
        <Button onClick={() => (window.location.href = "/signup")}>
          Sign Up Free
        </Button>
      </div>
    </header>
  );
};

export default LandingHeader;
