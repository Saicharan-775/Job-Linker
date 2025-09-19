import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "For Job Seekers": [
      "Browse Jobs",
      "Browse Companies", 
      "Salary Guide",
      "Career Advice",
      "Resume Builder"
    ],
    "For Employers": [
      "Post a Job",
      "Browse Candidates",
      "Employer Branding",
      "Recruiting Solutions",
      "Pricing"
    ],
    "Company": [
      "About Us",
      "Careers",
      "Press",
      "Blog",
      "Contact"
    ],
    "Resources": [
      "Help Center",
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "API Documentation"
    ]
  };

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-8 lg:grid-cols-6">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">JobPortal</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                The modern job platform that connects talented professionals with 
                amazing companies. Find your dream job or hire the perfect candidate.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email"
                    className="bg-background border-border"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Get weekly job alerts and career tips.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 JobPortal. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;