import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Hash, TrendingUp, Plus } from "lucide-react";

interface HashtagData {
  name: string;
  popularity: number;
  posts: number;
  trending: boolean;
}

interface RelatedHashtagsPanelProps {
  hashtags?: HashtagData[];
  onHashtagSelect?: (hashtag: string) => void;
  isLoading?: boolean;
}

const RelatedHashtagsPanel = ({
  hashtags = [
    { name: "travel", popularity: 85, posts: 450000000, trending: true },
    { name: "wanderlust", popularity: 72, posts: 120000000, trending: false },
    { name: "adventure", popularity: 78, posts: 180000000, trending: true },
    { name: "vacation", popularity: 65, posts: 220000000, trending: false },
    { name: "explore", popularity: 70, posts: 160000000, trending: true },
    {
      name: "travelphotography",
      popularity: 60,
      posts: 90000000,
      trending: false,
    },
    { name: "travelgram", popularity: 55, posts: 75000000, trending: false },
    { name: "instatravel", popularity: 50, posts: 65000000, trending: false },
  ],
  onHashtagSelect = (hashtag) => console.log(`Selected hashtag: ${hashtag}`),
  isLoading = false,
}: RelatedHashtagsPanelProps) => {
  // Function to format post numbers in a readable way
  const formatPostCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M posts`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K posts`;
    }
    return `${count} posts`;
  };

  // Function to determine badge color based on popularity
  const getPopularityColor = (popularity: number): string => {
    if (popularity >= 75) return "bg-green-100 text-green-800 border-green-200";
    if (popularity >= 50)
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-full max-w-md border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <Hash className="mr-2 h-5 w-5 text-blue-500" />
          Related Hashtags
        </h2>
        <Button variant="outline" size="sm" className="text-xs">
          <Plus className="h-3.5 w-3.5 mr-1" /> Add Custom
        </Button>
      </div>

      {isLoading ? (
        <div className="flex flex-col space-y-3 py-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-10 bg-gray-100 animate-pulse rounded-md"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {hashtags.map((hashtag) => (
            <TooltipProvider key={hashtag.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    onClick={() => onHashtagSelect(hashtag.name)}
                    className="flex items-center justify-between p-2.5 rounded-md hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-500 font-medium mr-1.5">
                        #
                      </span>
                      <span className="font-medium text-gray-700">
                        {hashtag.name}
                      </span>
                      {hashtag.trending && (
                        <TrendingUp className="h-3.5 w-3.5 ml-2 text-red-500" />
                      )}
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs px-2 py-0.5 ${getPopularityColor(hashtag.popularity)}`}
                    >
                      {hashtag.popularity}%
                    </Badge>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{formatPostCount(hashtag.posts)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-gray-100">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          onClick={() => console.log("View all related hashtags")}
        >
          View all related hashtags
        </Button>
      </div>
    </div>
  );
};

export default RelatedHashtagsPanel;
