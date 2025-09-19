import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Briefcase, 
  BookmarkCheck, 
  TrendingUp, 
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Eye,
  MessageCircle,
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit,
  Upload
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { icon: Briefcase, label: "Applications", value: "24", change: "+3 this week" },
    { icon: BookmarkCheck, label: "Saved Jobs", value: "12", change: "2 new matches" },
    { icon: Eye, label: "Profile Views", value: "89", change: "+12% this month" },
    { icon: MessageCircle, label: "Messages", value: "5", change: "3 unread" },
  ];

  const applications = [
    {
      id: 1,
      jobTitle: "Senior React Developer",
      company: "TechCorp Inc.",
      logo: "🚀",
      appliedDate: "2024-01-15",
      status: "interview",
      salary: "$120k - $180k",
      location: "San Francisco, CA",
      remote: true,
    },
    {
      id: 2,
      jobTitle: "Product Manager",
      company: "InnovateLabs",
      logo: "💡",
      appliedDate: "2024-01-12",
      status: "pending",
      salary: "$130k - $200k",
      location: "New York, NY",
      remote: false,
    },
    {
      id: 3,
      jobTitle: "UX Designer",
      company: "DesignStudio",
      logo: "🎨",
      appliedDate: "2024-01-10",
      status: "rejected",
      salary: "$90k - $130k",
      location: "Remote",
      remote: true,
    },
  ];

  const savedJobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      logo: "⚡",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$100k - $150k",
      posted: "1 day ago",
      matchPercentage: 95,
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "CloudNext",
      logo: "☁️",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $160k",
      posted: "3 days ago",
      matchPercentage: 88,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "interview":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "rejected":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "offered":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      default:
        return "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "interview":
        return <Calendar className="h-3 w-3" />;
      case "pending":
        return <AlertCircle className="h-3 w-3" />;
      case "rejected":
        return <XCircle className="h-3 w-3" />;
      case "offered":
        return <CheckCircle className="h-3 w-3" />;
      default:
        return <Clock className="h-3 w-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-muted-foreground">
                Here's what's happening with your job search
              </p>
            </div>
            <Button className="mt-4 sm:mt-0 bg-primary hover:bg-primary/90">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="gradient-card border-border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.change}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-background-secondary">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Recent Applications */}
              <Card className="gradient-card border-border p-6">
                <h3 className="font-semibold mb-4">Recent Applications</h3>
                <div className="space-y-4">
                  {applications.slice(0, 3).map((app) => (
                    <div key={app.id} className="flex items-center space-x-3 p-3 rounded-lg bg-background-secondary/50">
                      <div className="text-2xl">{app.logo}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{app.jobTitle}</p>
                        <p className="text-sm text-muted-foreground">{app.company}</p>
                      </div>
                      <Badge className={`text-xs ${getStatusColor(app.status)}`}>
                        {getStatusIcon(app.status)}
                        <span className="ml-1 capitalize">{app.status}</span>
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Applications
                </Button>
              </Card>

              {/* Profile Completeness */}
              <Card className="gradient-card border-border p-6">
                <h3 className="font-semibold mb-4">Profile Completeness</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Overall Progress</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Basic Information</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Work Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      <span>Skills Assessment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Portfolio Links</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Upload className="h-4 w-4 mr-2" />
                  Complete Profile
                </Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card className="gradient-card border-border p-6">
              <h3 className="font-semibold mb-4">All Applications</h3>
              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="p-4 rounded-lg border border-border bg-background-secondary/30">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{app.logo}</div>
                        <div>
                          <h4 className="font-medium">{app.jobTitle}</h4>
                          <p className="text-sm text-muted-foreground">{app.company}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(app.status)}`}>
                        {getStatusIcon(app.status)}
                        <span className="ml-1 capitalize">{app.status}</span>
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{app.location}</span>
                        {app.remote && (
                          <Badge variant="secondary" className="text-xs ml-1">Remote</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{app.salary}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Applied {app.appliedDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Message HR
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            <Card className="gradient-card border-border p-6">
              <h3 className="font-semibold mb-4">Saved Jobs</h3>
              <div className="space-y-4">
                {savedJobs.map((job) => (
                  <div key={job.id} className="p-4 rounded-lg border border-border bg-background-secondary/30">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{job.logo}</div>
                        <div>
                          <h4 className="font-medium">{job.title}</h4>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary">
                        {job.matchPercentage}% Match
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <span>{job.posted}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm">
                        Remove from Saved
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="gradient-card border-border p-6">
                <h3 className="font-semibold mb-4">Profile Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-16 w-16 rounded-full bg-background-tertiary flex items-center justify-center text-2xl">
                      👨‍💻
                    </div>
                    <div>
                      <h4 className="font-medium">John Doe</h4>
                      <p className="text-sm text-muted-foreground">Senior Frontend Developer</p>
                      <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Node.js", "GraphQL", "AWS"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </Card>

              <Card className="gradient-card border-border p-6">
                <h3 className="font-semibold mb-4">Job Preferences</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Desired Role:</span>
                    <p className="font-medium">Senior Frontend Developer</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Salary Range:</span>
                    <p className="font-medium">$120k - $180k</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Work Type:</span>
                    <p className="font-medium">Remote, Hybrid</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Preferred Locations:</span>
                    <p className="font-medium">San Francisco, Remote, New York</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Update Preferences
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;