import React, { useState } from "react";
import { Download, FileDown, Save } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface DataExportPanelProps {
  onExport?: (format: string) => void;
  onSaveReport?: () => void;
  isExporting?: boolean;
}

const DataExportPanel = ({
  onExport = () => {},
  onSaveReport = () => {},
  isExporting = false,
}: DataExportPanelProps) => {
  const [selectedFormat, setSelectedFormat] = useState("csv");

  const handleExport = () => {
    onExport(selectedFormat);
  };

  return (
    <Card className="w-full max-w-[450px] h-[200px] bg-white">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Download className="h-5 w-5" />
          Data Export
        </CardTitle>
        <CardDescription>
          Export your hashtag analysis data in various formats
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Select value={selectedFormat} onValueChange={setSelectedFormat}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="csv">CSV</SelectItem>
              <SelectItem value="excel">Excel</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2"
          >
            <FileDown className="h-4 w-4" />
            {isExporting ? "Exporting..." : "Export"}
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Report
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={onSaveReport}>
              Save to My Reports
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onExport("pdf")}>
              Save as PDF
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="text-xs text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </CardFooter>
    </Card>
  );
};

export default DataExportPanel;
