import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import deputyAdminImage from "@/assets/deputy-admin-finance.jpg";
import deputyAcademicImage from "@/assets/deputy-academic.jpg";

const DeputyPrincipals = () => {
  const deputies = [
    {
      name: "Edwin Waweru",
      title: "Deputy Principal - Administration and Finance",
      icon: Briefcase,
      responsibilities: [
        "Financial management and budgeting",
        "Human resource administration",
        "Infrastructure development",
        "Procurement and supplies",
      ],
    },
    {
      name: "Julius Mukoya",
      title: "Deputy Principal - Academic Affairs",
      icon: BookOpen,
      responsibilities: [
        "Curriculum development and implementation",
        "Academic quality assurance",
        "Examination coordination",
        "Faculty development programs",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[250px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Deputy Principals
            </h1>
            <p className="text-xl md:text-2xl">Executive Leadership Team</p>
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

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Our Deputy Leadership
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The Deputy Principals work closely with the Principal to
                  ensure effective management and strategic direction of the
                  college across all operational areas.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {deputies.map((deputy, index) => {
                  const Icon = deputy.icon;
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="mb-4 flex justify-center">
                          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-center">
                          {deputy.name}
                        </CardTitle>
                        <CardDescription className="text-center">
                          {deputy.title}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-3 text-sm">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {deputy.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Deputy Principal - Administration Message */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-muted/30 rounded-lg shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={deputyAdminImage}
                        alt="Edwin Waweru - Deputy Principal Administration and Finance"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-xl">Edwin Waweru</h3>
                      <p className="text-sm text-muted-foreground">
                        Deputy Principal
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Administration and Finance
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-4">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                      Message from Deputy Principal - Administration and Finance
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                      Welcome to Kibra Technical and Vocational College. As the
                      Deputy Principal for Administration and Finance, I am
                      committed to ensuring that our institution maintains the
                      highest standards of administrative excellence and
                      financial stewardship.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Our administrative team works tirelessly to create an
                      enabling environment where both students and staff can
                      thrive. We believe that efficient administration is the
                      backbone of quality education, and we continuously invest
                      in modern systems and infrastructure to support our
                      academic mission.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      We are dedicated to transparent financial management,
                      ensuring that every resource is optimally utilized to
                      enhance the learning experience. From state-of-the-art
                      facilities to well-maintained learning spaces, our goal is
                      to provide an environment that inspires excellence.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      I encourage all students to take advantage of the support
                      services available and to approach our offices whenever
                      you need assistance. Together, we are building a college
                      that not only imparts technical skills but also instills
                      values of integrity, accountability, and service.
                    </p>

                    <div className="mt-6 pt-6 border-t">
                      <p className="font-semibold">Edwin Waweru</p>
                      <p className="text-sm text-muted-foreground">
                        Deputy Principal - Administration and Finance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deputy Principal - Academic Affairs Message */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-lg shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={deputyAcademicImage}
                        alt="Julius Mukoya - Deputy Principal Academic Affairs"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-xl">Julius Mukoya</h3>
                      <p className="text-sm text-muted-foreground">
                        Deputy Principal
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Academic Affairs
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-4">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                      Message from Deputy Principal - Academic Affairs
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                      As the Deputy Principal for Academic Affairs at Kibra
                      Technical and Vocational College, I am delighted to
                      welcome you to an institution that places academic
                      excellence at the heart of everything we do.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Our commitment to quality education is reflected in our
                      comprehensive curriculum, which has been carefully
                      designed to meet both national standards and industry
                      requirements. We continuously review and update our
                      programs to ensure they remain relevant and responsive to
                      the changing needs of the job market.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Our experienced and dedicated faculty members bring a
                      wealth of knowledge and practical experience to the
                      classroom. They are committed not only to imparting
                      technical skills but also to nurturing critical thinking,
                      creativity, and a lifelong love of learning among our
                      students.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      I encourage all students to take full advantage of the
                      academic resources available, participate actively in your
                      learning journey, and strive for excellence in all your
                      endeavors. Remember, your success is our priority, and we
                      are here to support you every step of the way.
                    </p>

                    <div className="mt-6 pt-6 border-t">
                      <p className="font-semibold">Julius Mukoya</p>
                      <p className="text-sm text-muted-foreground">
                        Deputy Principal - Academic Affairs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DeputyPrincipals;
