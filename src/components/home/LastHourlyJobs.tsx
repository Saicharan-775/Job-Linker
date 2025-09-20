import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Bookmark, ExternalLink } from "lucide-react";

const LastHorlyJobs = () => {
  const featuredJobs = [
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
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignStudio Pro",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $120k",
      posted: "3 days ago",
      logo: "🎨",
      tags: ["Figma", "Design Systems", "Prototyping"],
      remote: true,
      featured: true,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudNext",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $160k",
      posted: "1 day ago",
      logo: "☁️",
      tags: ["AWS", "Docker", "Kubernetes"],
      remote: true,
      featured: false,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "AI Dynamics",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$140k - $190k",
      posted: "4 days ago",
      logo: "📊",
      tags: ["Python", "Machine Learning", "SQL"],
      remote: false,
      featured: false,
    },
    {
      id: 6,
      title: "Mobile Developer",
      company: "AppVentures",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$100k - $150k",
      posted: "2 days ago",
      logo: "📱",
      tags: ["React Native", "iOS", "Android"],
      remote: true,
      featured: false,
    },
  ];
type HourlyJobsProps = {
  title: string;
  organization: string;
  location: string;
  employmentType: string;
  datePosted: string;
  url: string;
  featured?: boolean;
  remote?: boolean;
};

const GetLastHourlyJobs=async()=>{
    const data= await fetch("https://linkedin-job-search-api.p.rapidapi.com/active-jb-1h?offset=0&description_type=text");
    const json=data.json();
    console.log(json);
}


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Personalized For You</h2>
          <p className="text-lg text-muted-foreground">
            Hand-picked opportunities from top companies
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <Card
              key={job.id}
              className="group relative overflow-hidden gradient-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {job.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                  High Paying
                </div>
              )}
              
              <div className="p-6">
                {/* Company Logo & Info */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background-tertiary text-xl">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>

                {/* Job Details */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                      {job.remote && (
                        <Badge variant="secondary" className="text-xs">Remote</Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{job.posted}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Apply Now
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-border hover:bg-background-secondary">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LastHorlyJobs;