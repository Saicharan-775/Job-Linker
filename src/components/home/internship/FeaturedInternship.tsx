import { useEffect, useState } from "react";
import InternshipCard from "./internshipCard";
import { API_OPTIONS } from "../../utils/constants";
import { Button } from "@/components/ui/button";

const FeaturedInternships = () => {
  const [internships, setInternships] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await fetch("https://internships-api.p.rapidapi.com/active-ats-7d", API_OPTIONS);
        const data = await res.json();
        console.log(data)
        setInternships(data || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchInternships();
  }, []);

  const visibleInternships = showAll ? internships : internships.slice(0, 6);

  return (
    <section className="py-20 m-5 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Featured Internships</h2>
          <p className="text-lg text-muted-foreground">
            Hand-picked internships from top organizations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleInternships.map((intern) => (
            <InternshipCard
              key={intern.id}
              title={intern.title}
              organization={intern.organization}
              location={intern.locations_derived?.[0] || "Remote"}
              employmentType={intern.employment_type?.[0] || "Internship"}
              datePosted={intern.date_posted}
              url={intern.url}
              remote={intern.remote_derived || false}
              featured={false}
            />
          ))}
        </div>

        {internships.length > 6 && (
          <div className="mt-12 text-center">
            <Button onClick={() => setShowAll(!showAll)} size="lg" variant="outline">
              {showAll ? "View Less" : "View All Internships"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedInternships;
