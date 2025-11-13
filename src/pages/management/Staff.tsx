import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Staff = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our Staff Team
            </h1>
            <p className="text-xl md:text-2xl">
              Meet the dedicated professionals who guide our institution toward
              excellence
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Staff;
