import React from "react";
import {
  BarChart3,
  Hash,
  Download,
  TrendingUp,
  Search,
  Shield,
  Clock,
  Zap,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border transition-all hover:shadow-md hover:border-primary/20">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Hash className="h-6 w-6" />,
      title: "Hashtag Analysis",
      description:
        "Discover trending hashtags and analyze their performance metrics to maximize your content reach.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Engagement Metrics",
      description:
        "Track likes, comments, shares, and overall engagement rates to understand what resonates with your audience.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Competitor Insights",
      description:
        "Analyze competitor strategies and performance to identify opportunities and stay ahead of trends.",
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Data Export",
      description:
        "Export your analysis in multiple formats (CSV, Excel, PDF) for presentations or further analysis.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Tracking",
      description:
        "Monitor your account growth and engagement improvements over time with visual analytics.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe Scraping",
      description:
        "Our smart rate-limiting technology ensures your scraping activities remain undetected and account-safe.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Saving",
      description:
        "Save 10+ hours of manual research weekly with automated data collection and analysis.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Updates",
      description:
        "Get the latest data with real-time updates and notifications for your tracked hashtags.",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features to Supercharge Your Instagram Strategy
          </h2>
          <p className="text-xl text-muted-foreground">
            Our comprehensive toolkit gives you everything you need to analyze,
            optimize, and grow your Instagram presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
