import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import HashtagSearchBar from "./HashtagSearchBar";
import EngagementMetricsPanel from "./EngagementMetricsPanel";
import RelatedHashtagsPanel from "./RelatedHashtagsPanel";
import DataExportPanel from "./DataExportPanel";
import RateLimitIndicator from "./RateLimitIndicator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  History,
  BookmarkCheck,
  TrendingUp,
  Settings,
} from "lucide-react";

const Dashboard = () => {
  const [currentHashtag, setCurrentHashtag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showRateLimit, setShowRateLimit] = useState(true);

  const handleSearch = (hashtag: string) => {
    setIsLoading(true);
    setCurrentHashtag(hashtag);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleExport = (format: string) => {
    console.log(`Exporting in ${format} format`);
    // Implementation would go here
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader />

      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="lg"
                  >
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="lg"
                  >
                    <History className="mr-2 h-5 w-5" />
                    Recent Searches
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="lg"
                  >
                    <BookmarkCheck className="mr-2 h-5 w-5" />
                    Saved Reports
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="lg"
                  >
                    <Settings className="mr-2 h-5 w-5" />
                    Settings
                  </Button>
                </nav>

                <div className="mt-8">
                  <Button className="w-full" size="lg">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    New Analysis
                  </Button>
                </div>

                {showRateLimit && (
                  <div className="mt-6">
                    <RateLimitIndicator
                      currentUsage={75}
                      maxLimit={100}
                      timeRemaining={30}
                      isWarning={true}
                      onDismiss={() => setShowRateLimit(false)}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <HashtagSearchBar onSearch={handleSearch} isLoading={isLoading} />

            {currentHashtag ? (
              <div className="space-y-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="engagement">Engagement</TabsTrigger>
                    <TabsTrigger value="audience">Audience</TabsTrigger>
                    <TabsTrigger value="competitors">Competitors</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-0 space-y-6">
                    <EngagementMetricsPanel hashtag={currentHashtag} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <RelatedHashtagsPanel onHashtagSelect={handleSearch} />
                      <DataExportPanel onExport={handleExport} />
                    </div>
                  </TabsContent>

                  <TabsContent value="engagement" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-4">
                          Detailed Engagement Analysis
                        </h2>
                        <p className="text-muted-foreground">
                          More detailed engagement metrics would be shown here.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="audience" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-4">
                          Audience Demographics
                        </h2>
                        <p className="text-muted-foreground">
                          Audience insights and demographics would be shown
                          here.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="competitors" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-4">
                          Competitor Analysis
                        </h2>
                        <p className="text-muted-foreground">
                          Competitor hashtag usage and performance would be
                          shown here.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                <TrendingUp className="h-16 w-16 text-primary/20 mb-4" />
                <h2 className="text-2xl font-semibold mb-2">
                  Start Your Hashtag Analysis
                </h2>
                <p className="text-muted-foreground max-w-md mb-6">
                  Enter a hashtag in the search bar above to analyze its
                  performance, engagement metrics, and discover related
                  hashtags.
                </p>
                <Button
                  size="lg"
                  onClick={() => document.querySelector("input")?.focus()}
                >
                  Search a Hashtag
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
