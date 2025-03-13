import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import {
  BarChart,
  LineChart,
  PieChart,
  TrendingUp,
  Users,
  Eye,
  MessageSquare,
  Share2,
  Download,
} from "lucide-react";

interface EngagementMetricsPanelProps {
  hashtag?: string;
  totalPosts?: number;
  avgLikes?: number;
  avgComments?: number;
  avgShares?: number;
  reachData?: {
    date: string;
    value: number;
  }[];
  engagementData?: {
    date: string;
    likes: number;
    comments: number;
    shares: number;
  }[];
  audienceData?: {
    category: string;
    percentage: number;
  }[];
}

const EngagementMetricsPanel: React.FC<EngagementMetricsPanelProps> = ({
  hashtag = "#examplehashtag",
  totalPosts = 1248,
  avgLikes = 342,
  avgComments = 87,
  avgShares = 56,
  reachData = [
    { date: "Jan", value: 1200 },
    { date: "Feb", value: 1800 },
    { date: "Mar", value: 2400 },
    { date: "Apr", value: 2100 },
    { date: "May", value: 2800 },
    { date: "Jun", value: 3200 },
  ],
  engagementData = [
    { date: "Jan", likes: 300, comments: 80, shares: 40 },
    { date: "Feb", likes: 420, comments: 95, shares: 55 },
    { date: "Mar", likes: 380, comments: 105, shares: 60 },
    { date: "Apr", likes: 450, comments: 110, shares: 70 },
    { date: "May", likes: 520, comments: 125, shares: 85 },
    { date: "Jun", likes: 580, comments: 140, shares: 95 },
  ],
  audienceData = [
    { category: "Fashion", percentage: 35 },
    { category: "Beauty", percentage: 25 },
    { category: "Lifestyle", percentage: 20 },
    { category: "Travel", percentage: 15 },
    { category: "Food", percentage: 5 },
  ],
}) => {
  return (
    <Card className="w-full max-w-[1000px] mx-auto bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">
          Engagement Metrics for {hashtag}
        </CardTitle>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Download size={16} />
          Export Data
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <MetricCard
            title="Total Posts"
            value={totalPosts.toLocaleString()}
            icon={<BarChart className="h-5 w-5 text-blue-500" />}
            trend="+12%"
          />
          <MetricCard
            title="Avg. Likes"
            value={avgLikes.toLocaleString()}
            icon={<Users className="h-5 w-5 text-green-500" />}
            trend="+8%"
          />
          <MetricCard
            title="Avg. Comments"
            value={avgComments.toLocaleString()}
            icon={<MessageSquare className="h-5 w-5 text-yellow-500" />}
            trend="+5%"
          />
          <MetricCard
            title="Avg. Shares"
            value={avgShares.toLocaleString()}
            icon={<Share2 className="h-5 w-5 text-purple-500" />}
            trend="+15%"
          />
        </div>

        <Tabs defaultValue="reach" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="reach">Reach & Impressions</TabsTrigger>
            <TabsTrigger value="engagement">Engagement Trends</TabsTrigger>
            <TabsTrigger value="audience">Audience Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="reach" className="space-y-4">
            <div className="h-[300px] w-full bg-gray-50 rounded-lg flex items-center justify-center border">
              <div className="text-center p-4">
                <LineChart className="h-10 w-10 mx-auto mb-2 text-blue-500" />
                <p className="text-sm text-gray-500">
                  Reach & Impressions Chart
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Showing data for the last 6 months
                </p>

                {/* Placeholder for actual chart */}
                <div className="mt-4 h-[200px] w-full flex items-end justify-between px-4">
                  {reachData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="bg-blue-500 w-10"
                        style={{ height: `${(item.value / 3500) * 180}px` }}
                      ></div>
                      <span className="text-xs mt-1">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Total Reach
                      </p>
                      <p className="text-2xl font-bold">1.2M</p>
                    </div>
                    <Eye className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Growth Rate
                      </p>
                      <p className="text-2xl font-bold">+24.8%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-4">
            <div className="h-[300px] w-full bg-gray-50 rounded-lg flex items-center justify-center border">
              <div className="text-center p-4">
                <BarChart className="h-10 w-10 mx-auto mb-2 text-green-500" />
                <p className="text-sm text-gray-500">Engagement Trends Chart</p>
                <p className="text-xs text-gray-400 mt-1">
                  Comparing likes, comments, and shares
                </p>

                {/* Placeholder for actual chart */}
                <div className="mt-4 h-[200px] w-full flex items-end justify-between px-4">
                  {engagementData.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="flex items-end gap-1">
                        <div
                          className="bg-green-500 w-3"
                          style={{ height: `${(item.likes / 600) * 180}px` }}
                        ></div>
                        <div
                          className="bg-yellow-500 w-3"
                          style={{ height: `${(item.comments / 150) * 180}px` }}
                        ></div>
                        <div
                          className="bg-purple-500 w-3"
                          style={{ height: `${(item.shares / 100) * 180}px` }}
                        ></div>
                      </div>
                      <span className="text-xs mt-1">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-green-50">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-medium text-gray-500">
                      Likes Growth
                    </p>
                    <p className="text-2xl font-bold text-green-600">+18.3%</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-yellow-50">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-medium text-gray-500">
                      Comments Growth
                    </p>
                    <p className="text-2xl font-bold text-yellow-600">+12.7%</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-50">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-medium text-gray-500">
                      Shares Growth
                    </p>
                    <p className="text-2xl font-bold text-purple-600">+22.1%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audience" className="space-y-4">
            <div className="h-[300px] w-full bg-gray-50 rounded-lg flex items-center justify-center border">
              <div className="text-center p-4">
                <PieChart className="h-10 w-10 mx-auto mb-2 text-purple-500" />
                <p className="text-sm text-gray-500">Audience Interests</p>
                <p className="text-xs text-gray-400 mt-1">
                  Distribution by category
                </p>

                {/* Placeholder for actual chart */}
                <div className="mt-4 flex justify-center">
                  <div className="relative h-[180px] w-[180px] rounded-full bg-gray-200 overflow-hidden">
                    {audienceData.map((item, index) => {
                      const prevPercentages = audienceData
                        .slice(0, index)
                        .reduce((sum, curr) => sum + curr.percentage, 0);

                      return (
                        <div
                          key={index}
                          className="absolute top-0 left-0 w-full h-full"
                          style={{
                            clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((2 * Math.PI * prevPercentages) / 100)}% ${50 + 50 * Math.sin((2 * Math.PI * prevPercentages) / 100)}%, ${50 + 50 * Math.cos((2 * Math.PI * (prevPercentages + item.percentage)) / 100)}% ${50 + 50 * Math.sin((2 * Math.PI * (prevPercentages + item.percentage)) / 100)}%)`,
                            background: getColorByIndex(index),
                          }}
                        />
                      );
                    })}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[120px] w-[120px] rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {audienceData.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-3">
                    <div className="flex flex-col items-center">
                      <div
                        className="h-3 w-3 rounded-full mb-1"
                        style={{ background: getColorByIndex(index) }}
                      ></div>
                      <p className="text-xs font-medium">{item.category}</p>
                      <p className="text-sm font-bold">{item.percentage}%</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  trend,
}) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
        </div>
        <div className="mt-3 flex items-center">
          <span className="text-xs font-medium text-green-600">{trend}</span>
          <span className="text-xs text-gray-500 ml-1">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper function to get colors for pie chart
const getColorByIndex = (index: number): string => {
  const colors = [
    "#8b5cf6", // Purple
    "#ec4899", // Pink
    "#3b82f6", // Blue
    "#10b981", // Green
    "#f59e0b", // Amber
  ];
  return colors[index % colors.length];
};

export default EngagementMetricsPanel;
