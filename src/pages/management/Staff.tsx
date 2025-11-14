import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Staff = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="relative h-[250px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Our Staff Team
              </h1>
              <p className="text-xl md:text-2xl">
                Meet the dedicated professionals who guide our institution
                toward excellence
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 py-12">
            {/* Principal Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Principal</h2>
              <div className="max-w-md mx-auto">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <span className="text-gray-400 text-sm">Photo</span>
                    </div>
                    <CardTitle>Tabitha M. Maina</CardTitle>
                    <CardDescription>Principal</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Dedicated to excellence and leadership in education,
                      inspiring students and staff alike.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Deputy Principals Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                Deputy Principals
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <span className="text-gray-400 text-sm">Photo</span>
                    </div>
                    <CardTitle>Edwin Waweru</CardTitle>
                    <CardDescription>Deputy Principal</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Dedicated to excellence and leadership in education,
                      inspiring students and staff alike.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <span className="text-gray-400 text-sm">Photo</span>
                    </div>
                    <CardTitle>Julius Mukoya</CardTitle>
                    <CardDescription>Deputy Principal</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Dedicated to excellence and leadership in education,
                      inspiring students and staff alike.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Department & Section Leaders */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                Department & Section Leaders
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                        <span className="text-gray-400 text-xs">Photo</span>
                      </div>
                      <CardTitle className="text-lg">
                        Name {index + 1}
                      </CardTitle>
                      <CardDescription>Department Head</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center text-sm">
                      <p>
                        Leading the department with expertise and dedication.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Staff;
