import React from "react";
import { AlertTriangle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface RateLimitIndicatorProps {
  currentUsage?: number;
  maxLimit?: number;
  timeRemaining?: number;
  isWarning?: boolean;
  onDismiss?: () => void;
}

const RateLimitIndicator = ({
  currentUsage = 75,
  maxLimit = 100,
  timeRemaining = 30,
  isWarning = false,
  onDismiss = () => {},
}: RateLimitIndicatorProps) => {
  const usagePercentage = Math.min(
    Math.round((currentUsage / maxLimit) * 100),
    100,
  );

  return (
    <Card className="w-full max-w-[300px] bg-background border-muted shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            {isWarning ? (
              <AlertTriangle className="h-4 w-4 text-destructive" />
            ) : (
              <Info className="h-4 w-4 text-muted-foreground" />
            )}
            Rate Limit Status
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={onDismiss}
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                  >
                    <path
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Dismiss notification</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Usage</span>
              <span
                className={
                  isWarning
                    ? "text-destructive font-medium"
                    : "text-muted-foreground"
                }
              >
                {currentUsage}/{maxLimit} requests
              </span>
            </div>
            <Progress
              value={usagePercentage}
              className={isWarning ? "h-1.5 bg-destructive/20" : "h-1.5"}
            />
          </div>

          {isWarning && (
            <div className="text-xs text-muted-foreground">
              <p className="text-destructive font-medium mb-1">
                Rate limit warning
              </p>
              <p>
                You're approaching Instagram's rate limit. Wait {timeRemaining}{" "}
                minutes before making more requests to avoid temporary blocks.
              </p>
            </div>
          )}

          {!isWarning && (
            <div className="text-xs text-muted-foreground">
              <p>Current API usage is within acceptable limits.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RateLimitIndicator;
