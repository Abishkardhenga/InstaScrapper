import React from "react";
import { Search, Bell, Settings, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DashboardHeaderProps {
  username?: string;
  userAvatar?: string;
  onLogout?: () => void;
  onSettingsClick?: () => void;
  onHelpClick?: () => void;
}

const DashboardHeader = ({
  username = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  onLogout = () => console.log("Logout clicked"),
  onSettingsClick = () => console.log("Settings clicked"),
  onHelpClick = () => console.log("Help clicked"),
}: DashboardHeaderProps) => {
  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        <div className="mr-8">
          <h1 className="text-xl font-bold text-primary">Hashtag Analyzer</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-primary font-medium">
            Dashboard
          </a>
          <a href="#" className="text-gray-500 hover:text-primary">
            Reports
          </a>
          <a href="#" className="text-gray-500 hover:text-primary">
            Analytics
          </a>
          <a href="#" className="text-gray-500 hover:text-primary">
            Saved
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 hover:text-primary hover:bg-gray-100 rounded-full"
        >
          <Bell size={20} />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 hover:text-primary hover:bg-gray-100 rounded-full"
        >
          <HelpCircle size={20} onClick={onHelpClick} />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarImage src={userAvatar} alt={username} />
                <AvatarFallback>
                  {username
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onSettingsClick}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
