import { Phone, Mail, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import kibraTvcLogo from "@/assets/kibra-tvc-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AccessibilityToolbar } from "./AccessibilityToolbar";
import { useState } from "react";
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a
              href="mailto:info@kibratvc.ac.ke"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              info@kibratvc.ac.ke
            </a>
            <a
              href="tel:+254716066759"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              +254 716066759
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b shadow-sm sticky top-0 z-50">
        <div className="container flex mb-4 mt-5 gap-3 mx-auto px-4 g-9 justify-between">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mr-7">
              <img
                src={kibraTvcLogo}
                alt="Kibra TVC Logo"
                className="h-14 w-14 object-contain"
              />
              <div className="">
                <h1 className="text-lg font-bold text-foreground">Kibra TVC</h1>
                <p className="text-[10px] text-muted-foreground">
                  Technical & Vocational College
                </p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-4 text-sm">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid min-w-[300px] max-w-[400px] gap-3 p-4">
                        <Link to="/about/history">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Kibra TVC History
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our journey and milestones
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <a
                          href="/downloads/service-charter.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          download="Kibra_TVC_Service_Charter.pdf"
                        >
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Service Charter
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our commitment to excellence
                            </p>
                          </NavigationMenuLink>
                        </a>
                        <Link to="/about/mission-vision">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Mission/Vision Values
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our purpose and principles
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      Management
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid min-w-[300px] max-w-[400px] gap-3 p-4">
                        <Link to="/management/board-of-governors">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Board of Governors
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our governing body
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/management/principal">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Principal
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Office of the Principal
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/management/deputy-principals">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Deputy Principals
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Deputy leadership team
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/management/registrar">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Registrar
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Academic registry office
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/management/dean-of-students">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Dean of Students
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Student affairs office
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      Departments
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid min-w-[300px] gap-3 p-4 md:grid-cols-2 md:min-w-[500px] lg:min-w-[600px]">
                        <Link to="/departments/ict">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Computing & Informatics
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Digital skills and programming
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/building">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Building & Civil Engineering
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Construction and infrastructure
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/cosmetology">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Cosmetology
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Beauty therapy and hairdressing
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/fashion">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Fashion and Garment Making
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Design and clothing technology
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/electrical">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Electrical & Electronics
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Power and electronics engineering
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/hospitality">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Hospitality and Tourism
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Culinary arts and hotel management
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/business">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Business
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Management and entrepreneurship
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/departments/mechanical">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Mechanical and Automotive Engineering
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Design and manufacturing systems
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      Admissions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid min-w-[300px] max-w-[400px] gap-3 p-4">
                        <Link to="/admissions/registration">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Application/Registration
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Start your journey with us
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/admissions/entry-requirements">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Entry Requirements
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Admission criteria and qualifications
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/admissions/payment-details">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Payment Details
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fee payment information and methods
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/downloads/application-forms">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Application Form
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Download admission forms
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link
                to="/our-programmes"
                className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
              >
                Our Programmes
              </Link>
              <a
                href="#news"
                className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
              >
                News
              </a>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      Downloads
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid min-w-[300px] max-w-[400px] gap-3 p-4">
                        <Link to="/downloads/application-forms">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Application Forms
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Download admission application forms
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/downloads/prospectus">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Prospectus/Brochures
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              College information and programs
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/downloads/course-catalogs">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Course Catalogs
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Detailed course descriptions
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/downloads/fee-structures">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Fee Structures
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Tuition and payment information
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/downloads/academic-calendar">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Academic Calendar
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Important dates and schedules
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/downloads/student-handbook">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Student Handbook
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Policies and guidelines
                            </p>
                          </NavigationMenuLink>
                        </Link>
                        <Link to="/about/service-charter">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Service Charter
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our service commitment
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-medium mr-5"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu & Accessibility Toolbar & Apply Button */}
            <div className="flex items-center gap-2">
              <AccessibilityToolbar />
              <Button asChild size="sm" className="hidden sm:flex">
                <Link to="/downloads/application-forms">Apply Now</Link>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] overflow-y-auto"
                >
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-6">
                    <Link
                      to="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    >
                      Home
                    </Link>

                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2 text-sm text-muted-foreground">
                        About
                      </p>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link
                          to="/about/history"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Kibra TVC History
                        </Link>
                        <a
                          href="/downloads/service-charter.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Service Charter
                        </a>

                        <Link
                          to="/about/mission-vision"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Mission/Vision Values
                        </Link>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2 text-sm text-muted-foreground">
                        Management
                      </p>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link
                          to="/management/board-of-governors"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Board of Governors
                        </Link>
                        <Link
                          to="/management/principal"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Principal
                        </Link>
                        <Link
                          to="/management/deputy-principals"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Deputy Principals
                        </Link>
                        <Link
                          to="/management/registrar"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Registrar
                        </Link>
                        <Link
                          to="/management/dean-of-students"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Dean of Students
                        </Link>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2 text-sm text-muted-foreground">
                        Departments
                      </p>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link
                          to="/departments/ict"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Computing & Informatics
                        </Link>
                        <Link
                          to="/departments/building"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Building & Civil Engineering
                        </Link>
                        <Link
                          to="/departments/cosmetology"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Cosmetology
                        </Link>
                        <Link
                          to="/departments/fashion"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Fashion and Garment Making
                        </Link>
                        <Link
                          to="/departments/electrical"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Electrical & Electronics
                        </Link>
                        <Link
                          to="/departments/hospitality"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Hospitality and Tourism
                        </Link>
                        <Link
                          to="/departments/business"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Business
                        </Link>
                        <Link
                          to="/departments/mechanical"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Mechanical and Automotive Engineering
                        </Link>
                      </div>
                    </div>

                    <Link
                      to="/our-programmes"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-foreground hover:text-primary transition-colors font-medium py-2 border-t pt-4"
                    >
                      Our Programmes
                    </Link>

                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2 text-sm text-muted-foreground">
                        Admissions
                      </p>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link
                          to="/admissions/registration"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Application/Registration
                        </Link>
                        <Link
                          to="/admissions/entry-requirements"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Entry Requirements
                        </Link>
                        <Link
                          to="/admissions/payment-details"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Payment Details
                        </Link>
                        <Link
                          to="/downloads/application-forms"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Application Form
                        </Link>
                      </div>
                    </div>

                    <a
                      href="#news"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    >
                      News
                    </a>

                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2 text-sm text-muted-foreground">
                        Downloads
                      </p>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link
                          to="/downloads/application-forms"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Application Forms
                        </Link>
                        <Link
                          to="/downloads/prospectus"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Prospectus/Brochures
                        </Link>
                        <Link
                          to="/downloads/course-catalogs"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Course Catalogs
                        </Link>
                        <Link
                          to="/downloads/fee-structures"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Fee Structures
                        </Link>
                        <Link
                          to="/downloads/academic-calendar"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Academic Calendar
                        </Link>
                        <Link
                          to="/downloads/student-handbook"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Student Handbook
                        </Link>
                        <a
                          href="/downloads/service-charter.pdf" // path to your PDF file
                          target="_blank" // opens in new tab
                          rel="noopener noreferrer" // security best practice
                          download // triggers download
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-foreground hover:text-primary transition-colors py-1"
                        >
                          Service Charter
                        </a>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-foreground hover:text-primary transition-colors font-medium py-2 border-t pt-4"
                    >
                      Contact
                    </a>
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-6 shadow-2xl"
                    >
                      <Link to="/apply">Apply Now</Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
