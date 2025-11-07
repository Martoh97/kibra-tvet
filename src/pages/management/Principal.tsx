import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import principalImage from "@/assets/principal-tabitha.jpg";
const Principal = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Office of the Principal</h1>
            <p className="text-xl md:text-2xl">Academic Leadership</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Button variant="outline" asChild className="mb-8">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Tabitha M. Maina</CardTitle>
                  <CardDescription>Principal, Kibra Technical and Vocational College</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <img src={principalImage} alt="Principal Tabitha M. Maina" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-2xl font-semibold">Welcome Message</h3>
                      <p className="text-muted-foreground">
                        Welcome to Kibra Technical and Vocational College. As Principal, I am honored to lead an institution 
                        dedicated to transforming lives through quality technical and vocational education.
                      </p>
                      <p className="text-muted-foreground">
                        Our college is committed to providing industry-relevant training that equips our students with practical 
                        skills and knowledge needed to excel in their chosen careers. We maintain strong partnerships with 
                        industry stakeholders to ensure our programs meet current market demands.
                      </p>
                      <p className="text-muted-foreground">
                        I encourage all students to take full advantage of the excellent facilities, dedicated faculty, and 
                        comprehensive programs we offer. Together, we can build a brighter future for our community and nation.
                      </p>
                      
                      
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Principal;