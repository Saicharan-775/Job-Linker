import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Star } from "lucide-react";

const FeaturedCompanies = () => {
  const companies = [
    {
      id: 1,
      name: "TechCorp Inc.",
      logo: "🚀",
      description: "Leading innovation in cloud computing and AI solutions",
      location: "San Francisco, CA",
      employees: "1,000-5,000",
      rating: 4.8,
      openJobs: 23,
      industry: "Technology",
      founded: "2015",
    },
    {
      id: 2,
      name: "InnovateLabs",
      logo: "💡",
      description: "Building the future of sustainable technology",
      location: "New York, NY",
      employees: "500-1,000",
      rating: 4.6,
      openJobs: 15,
      industry: "Green Tech",
      founded: "2018",
    },
    {
      id: 3,
      name: "DesignStudio Pro",
      logo: "🎨",
      description: "Creative solutions for modern digital experiences",
      location: "Los Angeles, CA",
      employees: "50-200",
      rating: 4.9,
      openJobs: 8,
      industry: "Design",
      founded: "2020",
    },
    {
      id: 4,
      name: "CloudNext",
      logo: "☁️",
      description: "Enterprise cloud infrastructure and DevOps solutions",
      location: "Austin, TX",
      employees: "200-500",
      rating: 4.7,
      openJobs: 18,
      industry: "Cloud Services",
      founded: "2017",
    },
    {
      id: 5,
      name: "AI Dynamics",
      logo: "📊",
      description: "Machine learning and data science consultancy",
      location: "Seattle, WA",
      employees: "100-500",
      rating: 4.5,
      openJobs: 12,
      industry: "AI/ML",
      founded: "2019",
    },
    {
      id: 6,
      name: "AppVentures",
      logo: "📱",
      description: "Mobile-first solutions for the next generation",
      location: "Miami, FL",
      employees: "50-200",
      rating: 4.4,
      openJobs: 9,
      industry: "Mobile",
      founded: "2021",
    },
  ];

  return (
    <section className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Featured Companies</h2>
          <p className="text-lg text-muted-foreground">
            Discover amazing companies that are actively hiring
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <Card
              key={company.id}
              className="group overflow-hidden gradient-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-6">
                {/* Company Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background-tertiary text-xl">
                      {company.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{company.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{company.rating}</span>
                  </div>
                </div>

                {/* Company Description */}
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {company.description}
                </p>

                {/* Company Details */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{company.employees} employees</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4 flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Founded {company.founded}
                  </Badge>
                  <Badge className="text-xs bg-primary/10 text-primary">
                    {company.openJobs} open jobs
                  </Badge>
                </div>

                {/* Footer */}
                <Button 
                  className="w-full bg-background-tertiary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  variant="ghost"
                >
                  View Company
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-border hover:bg-background-secondary">
            View All Companies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;