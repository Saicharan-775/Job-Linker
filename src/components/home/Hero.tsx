import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const popularSearches = ["React Developer", "Product Manager", "Data Scientist", "UX Designer", "DevOps Engineer"];
  const stats = [
    { icon: Briefcase, label: "Active Jobs", value: "50,000+" },
    { icon: TrendingUp, label: "Success Rate", value: "94%" },
    { icon: MapPin, label: "Countries", value: "150+" },
  ];

  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-primary-glow/10 blur-3xl" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            ✨ Over 10,000 new jobs added this week
          </Badge>
          
          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Find Your Dream Job in
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Tech & Beyond
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            Connect with top employers, discover opportunities that match your skills,
            and take the next step in your career journey.
          </p>
          
          {/* Search Form */}
          <div className="mx-auto mb-8 max-w-2xl">
            <div className="flex flex-col gap-4 rounded-xl bg-background-secondary/50 p-6 backdrop-blur-sm border border-border/50 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Job title, keywords, or company"
                  className="pl-10 bg-background border-border"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="City, state, or remote"
                  className="pl-10 bg-background border-border"
                />
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                Search Jobs
              </Button>
            </div>
          </div>
          
          {/* Popular Searches */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            {popularSearches.map((search) => (
              <Badge
                key={search}
                variant="secondary"
                className="cursor-pointer hover:bg-secondary/80 transition-smooth"
              >
                {search}
              </Badge>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;