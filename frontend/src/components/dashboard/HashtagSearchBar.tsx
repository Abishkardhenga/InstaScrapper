import React, { useState, useEffect } from "react";
import { Search, History, X, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HashtagSearchBarProps {
  onSearch?: (hashtag: string) => void;
  recentSearches?: string[];
  suggestedTags?: string[];
  isLoading?: boolean;
}

const HashtagSearchBar = ({
  onSearch = () => {},
  recentSearches = ["fashion", "travel", "food", "fitness", "photography"],
  suggestedTags = ["trending", "viral", "summer2023", "lifestyle"],
  isLoading = false,
}: HashtagSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const combined = [...suggestedTags, ...recentSearches];
      const filtered = combined
        .filter((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((tag, index, self) => self.indexOf(tag) === index) // Remove duplicates
        .slice(0, 5); // Limit to 5 suggestions

      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm, suggestedTags, recentSearches]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-background p-4 rounded-lg shadow-sm border border-border">
      <div className="flex flex-col space-y-2">
        <div className="relative">
          <div className="flex items-center">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <Search size={18} />
              </div>
              <Input
                type="text"
                placeholder="Search hashtags (e.g. #fashion, #travel)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() =>
                  setShowSuggestions(
                    searchTerm.length > 0 && filteredSuggestions.length > 0,
                  )
                }
                className="pl-10 pr-10 py-6 text-base w-full rounded-l-md"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <Button
              onClick={handleSearch}
              disabled={isLoading || !searchTerm.trim()}
              className="rounded-l-none py-6"
            >
              {isLoading ? "Searching..." : "Search"}
            </Button>
          </div>

          {/* Suggestions dropdown */}
          {showSuggestions && (
            <div className="absolute z-10 w-full bg-background border border-border rounded-md mt-1 shadow-md">
              <ul className="py-1">
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 hover:bg-accent cursor-pointer flex items-center"
                  >
                    {recentSearches.includes(suggestion) ? (
                      <History
                        size={16}
                        className="mr-2 text-muted-foreground"
                      />
                    ) : (
                      <TrendingUp
                        size={16}
                        className="mr-2 text-muted-foreground"
                      />
                    )}
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Recent searches */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-muted-foreground flex items-center">
            <History size={14} className="mr-1" /> Recent:
          </span>
          {recentSearches.slice(0, 5).map((search, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(search)}
              className={cn(
                "px-3 py-1 rounded-full text-xs",
                "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
              )}
            >
              #{search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HashtagSearchBar;
