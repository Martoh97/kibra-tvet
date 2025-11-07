import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedStories } from "@/components/FeaturedStories";
import { PrincipalMessage } from "@/components/PrincipalMessage";
import { Departments } from "@/components/Departments";
import { CallToAction } from "@/components/CallToAction";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedStories />
      <PrincipalMessage />
      <Departments />
      <CallToAction />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
