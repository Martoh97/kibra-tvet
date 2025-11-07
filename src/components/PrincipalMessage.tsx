import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import principalImage from "@/assets/female-principal.jpg";

export const PrincipalMessage = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={principalImage} 
                alt="Principal"
                className="w-2/3 h-[400px] object-cover mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-30"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Principal's Message
            </h2>
            
            <div className="h-1 w-20 bg-primary rounded-full"></div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am delighted to extend a warm welcome to you on behalf of Kibra Technical and
              Vocational Training College, a premier institution dedicated to providing
              high-quality technical and vocational education. As the Principal, I take pride in
              our commitment to nurturing talent, fostering innovation, and preparing our students
              for successful careers in a rapidly evolving global landscape.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Kibra TVC, we recognize the importance of practical skills and hands-on training in today's
              competitive world. State-of-the-art facilities, cutting-edge laboratories, and industry-relevant
              curriculum ensure that our students receive a comprehensive education that aligns
              with the demands of the modern workforce.
            </p>

            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-4"
            >
              <Link to="/apply">Apply for January 2026 Intake</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
