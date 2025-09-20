import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Bell, Menu, Briefcase, User, LogIn } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 mx-3">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
               <a href="/">Job Linker</a> 
                </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/jobs"className="text-muted-foreground hover:text-foreground transition-smooth m-3">
              Find Jobs
              </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Companies
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Salary Guide
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Resources
            </a>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:px-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies, keywords..."
                className="pl-10 bg-background-secondary border-border"
              />
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-primary">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
               <Button size="lg" className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
              </Button>
            {/* <Button size="sm" className="bg-primary hover:bg-primary/90">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button> */}
              <Button size="lg" className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              <LogIn className="h-4 w-4 mr-2" />
              Dashboard
              </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-10 bg-background-secondary border-border"
                />
              </div>
              
              <a href="#" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Find Jobs
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Companies
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Salary Guide
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Resources
              </a>
              
              <div className="flex space-x-2 px-3 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  Profile
                </Button>
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;