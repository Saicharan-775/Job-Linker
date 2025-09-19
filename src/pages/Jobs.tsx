import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Filter, Bookmark, Clock, DollarSign, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $180k",
      posted: "2 days ago",
      logo: "🚀",
      tags: ["React", "TypeScript", "Node.js"],
      remote: true,
      featured: true,
      description: "We're looking for a senior React developer to lead our frontend team...",
      applicants: 45,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLabs",
      location: "New York, NY",
      type: "Full-time", 
      salary: "$130k - $200k",
      posted: "1 day ago",
      logo: "💡",
      tags: ["Strategy", "Analytics", "Leadership"],
      remote: false,
      featured: true,
      description: "Join our product team to drive innovation and growth...",
      applicants: 62,
    },
    // Add more jobs...
  ];

  const filters = {
    jobType: ["Full-time", "Part-time", "Contract", "Internship"],
    experience: ["Entry Level", "Mid Level", "Senior Level", "Executive"],
    remote: ["Remote", "Hybrid", "On-site"],
    salaryRange: ["$50k+", "$75k+", "$100k+", "$150k+", "$200k+"],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 rounded-xl bg-background-secondary/50 p-6 backdrop-blur-sm border border-border/50 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Job title, keywords, or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="City, state, or remote"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Search Jobs
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="gradient-card border-border p-6">
              <div className="mb-4 flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <h3 className="font-semibold">Filters</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Job Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      {filters.jobType.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Experience Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {filters.experience.map((exp) => (
                        <SelectItem key={exp} value={exp.toLowerCase()}>
                          {exp}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Remote Options</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select remote option" />
                    </SelectTrigger>
                    <SelectContent>
                      {filters.remote.map((option) => (
                        <SelectItem key={option} value={option.toLowerCase()}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Salary Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select salary range" />
                    </SelectTrigger>
                    <SelectContent>
                      {filters.salaryRange.map((range) => (
                        <SelectItem key={range} value={range.toLowerCase()}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </div>
            </Card>
          </div>

          {/* Job Results */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {jobs.length} jobs
              </p>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="salary-high">Highest Salary</SelectItem>
                  <SelectItem value="salary-low">Lowest Salary</SelectItem>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="group relative overflow-hidden gradient-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  {job.featured && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                      Featured
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background-tertiary text-xl">
                          {job.logo}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-muted-foreground mb-2">{job.company}</p>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {job.description}
                          </p>
                          
                          {/* Job Details */}
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                              {job.remote && (
                                <Badge variant="secondary" className="text-xs ml-2">Remote</Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span>{job.salary}</span>
                            </div>
                          </div>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {job.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        <Button variant="ghost" size="sm">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <div className="text-xs text-muted-foreground text-right">
                          <div>{job.posted}</div>
                          <div>{job.applicants} applicants</div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Apply Now
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button size="sm" className="bg-primary">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;