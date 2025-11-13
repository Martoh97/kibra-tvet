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
          <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
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
        </main>
      </div>
      <div className="flex justify-center align-middle">
        <h1>Principal</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <h2>Tabitha M. Maina</h2>
            </CardTitle>
            <CardDescription>Principal</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Dedicated to excellence and leadership in education, inspiring
              students and staff alike.
            </p>
          </CardContent>
        </Card>
      </div>
      <div>
        <div className="flex justify-center align-middle">
          <h1>Deputy Principals</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2>Edwin Waweru</h2>
              </CardTitle>
              <CardDescription> Deputy Principal</CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Dedicated to excellence and leadership in education, inspiring
                students and staff alike.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center align-middle">
          <h1>Deputy Principal</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2>Julius Mukoya</h2>
              </CardTitle>
              <CardDescription> Deputy Principal</CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Dedicated to excellence and leadership in education, inspiring
                students and staff alike.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <div className="flex justify-center align-middle">
          <h1>Department & Section Leaders</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2>Edwin Waweru</h2>
              </CardTitle>
              <CardDescription> Deputy Principal</CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Dedicated to excellence and leadership in education, inspiring
                students and staff alike.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center align-middle">
          <h1>Deputy Principal</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2>Julius Mukoya</h2>
              </CardTitle>
              <CardDescription> Deputy Principal</CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Dedicated to excellence and leadership in education, inspiring
                students and staff alike.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center align-middle">
          <h1>Deputy Principal</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2>Julius Mukoya</h2>
              </CardTitle>
              <CardDescription> Deputy Principal</CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Dedicated to excellence and leadership in education, inspiring
                students and staff alike.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center align-middle">
          <h1>Deputy Principal</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2>Julius Mukoya</h2>
              </CardTitle>
              <CardDescription> Deputy Principal</CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Dedicated to excellence and leadership in education, inspiring
                students and staff alike.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center align-middle">
          <h1>Deputy Principal</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2>Julius Mukoya</h2>
              </CardTitle>
              <CardDescription> Deputy Principal</CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Dedicated to excellence and leadership in education, inspiring
                students and staff alike.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center align-middle">
          <h1>Deputy Principal</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2>Julius Mukoya</h2>
              </CardTitle>
              <CardDescription> Deputy Principal</CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Dedicated to excellence and leadership in education, inspiring
                students and staff alike.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center align-middle">
          <h1>Deputy Principal</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2>Julius Mukoya</h2>
              </CardTitle>
              <CardDescription> Deputy Principal</CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Dedicated to excellence and leadership in education, inspiring
                students and staff alike.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center align-middle">
          <h1>Deputy Principal</h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <h2>Julius Mukoya</h2>
              </CardTitle>
              <CardDescription> Deputy Principal</CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Dedicated to excellence and leadership in education, inspiring
                students and staff alike.
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Staff;
