import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DemoSection = () => {
  return (
    <div className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our Hashtag Analyzer in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful insights at your fingertips. Discover how our tool
            transforms raw data into actionable strategies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="dashboard">Dashboard Overview</TabsTrigger>
              <TabsTrigger value="analysis">Hashtag Analysis</TabsTrigger>
              <TabsTrigger value="export">Data Export</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="mt-0">
              <div className="overflow-hidden rounded-xl border border-border shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                  alt="Dashboard Demo"
                  className="w-full h-auto"
                />
                <div className="bg-card p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Comprehensive Dashboard
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get a bird's-eye view of your Instagram performance with our
                    intuitive dashboard. Track multiple hashtags, monitor
                    engagement metrics, and identify growth opportunities at a
                    glance.
                  </p>
                  <div className="flex justify-end">
                    <Button>Try Dashboard Now</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="mt-0">
              <div className="overflow-hidden rounded-xl border border-border shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Analysis Demo"
                  className="w-full h-auto"
                />
                <div className="bg-card p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Deep Hashtag Analysis
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Dive deep into hashtag performance with detailed analytics.
                    Understand engagement patterns, audience demographics, and
                    content performance to refine your strategy.
                  </p>
                  <div className="flex justify-end">
                    <Button>Explore Analysis</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="export" className="mt-0">
              <div className="overflow-hidden rounded-xl border border-border shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=80"
                  alt="Export Demo"
                  className="w-full h-auto"
                />
                <div className="bg-card p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Flexible Data Export
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Export your data in multiple formats for further analysis or
                    presentations. Create custom reports, share insights with
                    clients, or integrate with your existing workflow.
                  </p>
                  <div className="flex justify-end">
                    <Button>Try Export Features</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
