import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import FeaturedCompanies from "@/components/home/FeaturedCompanies";
import Footer from "@/components/layout/Footer";
import FeaturedInternship from "@/components/home/internship/FeaturedInternship";
import LastHorlyJobs from "@/components/home/LastHourlyJobs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedInternship/>
        <FeaturedJobs />
        <FeaturedCompanies />
       <LastHorlyJobs/>
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
