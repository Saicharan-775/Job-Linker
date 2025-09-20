// src/components/ui/internshipCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ExternalLink, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

type InternshipCardProps = {
  title: string;
  organization: string;
  location: string;
  employmentType: string;
  datePosted: string;
  url: string;
  featured?: boolean;
  remote?: boolean;
};

const InternshipCard = ({
  title,
  organization,
  location,
  employmentType,
  datePosted,
  url,
  featured,
  remote,
}: InternshipCardProps) => {
  return (
    <Card className="group relative overflow-hidden gradient-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {featured && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
          Featured
        </div>
      )}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{organization}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>

        {/* Details */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
            {remote && <Badge variant="secondary" className="text-xs">Remote</Badge>}
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{employmentType}</span>
          </div>
        </div>

        {/* Footer */}
          <div className="flex items-center justify-between">
  <span className="text-xs text-muted-foreground">{datePosted}</span>
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Button size="sm" className="bg-primary hover:bg-primary/90">
      Apply Now
      <ExternalLink className="ml-1 h-3 w-3" />
    </Button>
  </a>
</div>
      </div>

   
    </Card>
  );
};

export default InternshipCard;
