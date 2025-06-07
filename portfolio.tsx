"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, ExternalLink, Download, Code } from "lucide-react"
import Image from "next/image"
import { Sidebar } from "./components/sidebar"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { TechStack } from "./components/tech-stack"
import { Terminal } from "./components/terminal"
import { Education } from "./components/education"
import { useEffect, useState } from "react"
import { Experience } from "./components/experience"
import { BackgroundAnimations } from "./components/background-animations"

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    // Check on initial load
    checkMobile()

    // Handle resize
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="min-h-screen bg-dark-forest text-white relative">
      {/* Background Animations */}
      <BackgroundAnimations />

      {/* Floating Sidebar - Only rendered on desktop */}
      <Sidebar />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className={isMobile ? "pt-20" : "ml-0 lg:ml-20 pt-20"}>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen py-12 md:py-20 flex items-center overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-20 right-10 w-12 h-12 md:w-20 md:h-20 rounded-full bg-cyber-green/10 blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-cyber-green-dark/10 blur-xl"></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-cyber-green"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-cyber-green-dark"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
              {/* Content */}
              <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-4">
                  <p className="text-cyber-green text-sm md:text-base">TURNING IDEAS INTO REALITY</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                    Building the Future
                    <br />
                    <span className="text-cyber-green">One Line of Code</span> at a Time
                  </h1>
                  <p className="text-gray-400 max-w-[600px] mx-auto lg:mx-0 text-sm md:text-base">
                    Specializing in modern web technologies and creating exceptional digital experiences from Nairobi,
                    Kenya
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    className="bg-cyber-green hover:bg-cyber-green/80 text-dark-forest text-sm md:text-base"
                    onClick={() => window.open("/files/emmanuel-jesse-cv.pdf", "_blank")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyber-green text-cyber-green hover:bg-cyber-green/10 text-sm md:text-base"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    View Projects
                  </Button>
                </div>
              </div>

              {/* Terminal */}
              <div className="order-1 lg:order-2">
                <Terminal />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-forest/30 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-10 lg:grid-cols-2 items-center">
              {/* Image */}
              <div className="relative order-1 lg:order-1">
                <div className="relative h-64 w-64 md:h-80 md:w-80 mx-auto overflow-hidden rounded-full border-4 border-cyber-green glow-border">
                  <Image
                    src="/images/emmanuel-profile.jpg"
                    alt="Emmanuel M Jesse - Professional Portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-16 w-16 md:h-24 md:w-24 bg-gradient-to-br from-cyber-green to-cyber-green-dark rounded-full opacity-30 blur-xl"></div>
              </div>

              {/* Content */}
              <div className="space-y-6 order-2 lg:order-2">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-cyber-green">About Me</h2>
                  <div className="mt-2 h-1 w-12 bg-cyber-green"></div>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
                  <p>
                    As a <span className="text-cyber-green font-semibold">Fullstack Developer</span>, I bring a
                    comprehensive understanding of both front-end and back-end technologies to build seamless,
                    high-performing web applications. On the front end, I specialize in crafting responsive and
                    intuitive user interfaces using HTML, CSS (with frameworks like Tailwind or Bootstrap), and
                    JavaScript (leveraging modern libraries like React or Vue.js). I focus on delivering exceptional
                    user experiences with clean design, component reusability, and accessibility.
                  </p>

                  <p>
                    On the back end, I build robust, scalable APIs and server-side logic using languages like{" "}
                    <span className="text-cyber-green">PHP, Node.js, or Python</span>, and work with databases such as
                    MySQL, PostgreSQL, or MongoDB to ensure efficient data storage and retrieval. I'm well-versed in
                    version control using Git, and I follow best practices in clean code, testing, and continuous
                    integration/deployment to maintain code quality and reliability.
                  </p>

                  <p>
                    Beyond technical implementation, I excel at{" "}
                    <span className="text-cyber-green font-semibold">
                      bridging the gap between business requirements and software solutions
                    </span>
                    . I can take a project from concept to deployment—gathering requirements, designing system
                    architecture, coding, testing, and finally deploying it to production environments like Vercel,
                    Netlify, or traditional VPS/cloud services (e.g., AWS, DigitalOcean).
                  </p>

                  <p>
                    I'm comfortable working in <span className="text-cyber-green">Agile teams</span>, collaborating with
                    UI/UX designers, DevOps, and product managers to deliver value quickly and iteratively. Whether
                    building a data-driven dashboard, a RESTful API, or a full-fledged SaaS platform, I prioritize
                    performance, security, and maintainability to create solutions that scale with user needs.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400 pt-4">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-cyber-green" />
                    Nairobi, Kenya
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-1 h-4 w-4 text-cyber-green" />
                    Available for work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <Education />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-forest/30 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-cyber-green glow-text">PROJECTS</h2>
                <div className="mt-2 h-1 w-24 bg-cyber-green mx-auto"></div>
              </div>

              {/* Featured Projects */}
              <div className="space-y-16">
                {/* WeatherVerse Project */}
                <Card className="bg-navy border-cyber-blue/20 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Project Images */}
                    <div className="space-y-4 p-4 md:p-6">
                      <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                        <Image
                          src="/images/weatherverse/wv1.png"
                          alt="WeatherVerse Dashboard"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image
                            src="/images/weatherverse/wv2.png"
                            alt="5-Day Forecast and Life Index"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold">23°C</div>
                            <div className="text-xs">Dynamic Weather</div>
                          </div>
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-800 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-sm font-bold">Auto Location</div>
                            <div className="text-xs">Detection</div>
                          </div>
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-sm font-bold">Day/Night</div>
                            <div className="text-xs">Auto Switch</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-4 md:p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="flex items-center justify-between text-cyber-blue text-xl md:text-2xl">
                          WeatherVerse
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-cyber-blue h-8 w-8"
                            onClick={() => window.open("https://lnkd.in/dYFrMr77", "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          Advanced Weather Dashboard with Real-time Updates
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          WeatherVerse is a sleek and powerful weather dashboard created during my internship at Future
                          Interns. This application provides comprehensive weather information with a beautiful,
                          responsive interface featuring dynamic backgrounds that change based on weather conditions and
                          time of day. The dashboard delivers real-time weather updates, forecasts, and practical
                          lifestyle recommendations.
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-cyber-blue text-sm font-medium">Key Features:</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Real-time weather updates with current conditions
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              5-day and hourly forecasts with detailed information
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Automatic location detection for instant local weather
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Search history tracking and favorite cities saving
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Life index suggestions based on current conditions
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Dynamic backgrounds that reflect weather conditions
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Automatic day/night mode switching based on local time
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-cyber-blue text-sm font-medium">Technical Implementation:</h4>
                          <p className="text-xs text-gray-300">
                            Built with modern web technologies, WeatherVerse integrates with the OpenWeatherMap API to
                            fetch accurate weather data. The application features a responsive design that works
                            seamlessly across all devices, with special attention to performance optimization and
                            accessibility features.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            React
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            JavaScript
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Tailwind CSS
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            OpenWeatherMap API
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Geolocation API
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Local Storage
                          </Badge>
                        </div>

                        <div className="pt-2">
                          <p className="text-xs text-gray-400 italic">
                            Future Interns project - Created as part of my internship to demonstrate modern web
                            development skills and API integration.
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>

                {/* Eventika Project */}
                <Card className="bg-navy border-cyber-blue/20 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Project Images */}
                    <div className="space-y-4 p-4 md:p-6">
                      <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                        <Image src="/images/eventika/ev1.png" alt="Eventika Homepage" fill className="object-cover" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/eventika/ev2.png" alt="Featured Events" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/eventika/ev4.png" alt="Checkout Process" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/eventika/ev5.png" alt="Payment Methods" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/eventika/ev6.png" alt="Payment Success" fill className="object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-4 md:p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="flex items-center justify-between text-cyber-blue text-xl md:text-2xl">
                          Eventika Kenya
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-cyber-blue h-8 w-8"
                            onClick={() => window.open("https://eventikakenya.netlify.app/", "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          Modern Event Ticketing Platform for Kenya
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Eventika Kenya is a comprehensive event ticketing platform that enables users to browse
                          events, purchase tickets, and manage bookings seamlessly. Event organizers can create and
                          manage events while users enjoy a smooth ticket purchasing experience.
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-cyber-blue text-sm font-medium">Key Features:</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Event browsing and discovery with search functionality
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Multiple payment methods (M-Pesa, Airtel Money, Google Pay)
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Digital ticket management and receipt generation
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Responsive design for all devices
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            React
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            TypeScript
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Tailwind CSS
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Vite
                          </Badge>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>

                {/* E-Commerce Store Project */}
                <Card className="bg-navy border-cyber-blue/20 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Project Images */}
                    <div className="space-y-4 p-4 md:p-6">
                      <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                        <Image src="/images/ecommerce/s1.png" alt="E-Commerce Homepage" fill className="object-cover" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/ecommerce/s2.png" alt="Featured Products" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/ecommerce/s3.png" alt="Shop Categories" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/ecommerce/s4.png" alt="Company Stats" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/ecommerce/s5.png" alt="Our Mission" fill className="object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-4 md:p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="flex items-center justify-between text-cyber-blue text-xl md:text-2xl">
                          E-Commerce Store
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-cyber-blue h-8 w-8"
                            onClick={() => window.open("https://ecommercestorek.netlify.app/", "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </CardTitle>
                        <CardDescription className="text-gray-400">Full-Featured E-Commerce Platform</CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          A comprehensive e-commerce platform built with React and TypeScript, featuring modern design
                          principles and complete shopping functionality. The platform includes product management, user
                          authentication, and admin dashboard capabilities.
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-cyber-blue text-sm font-medium">Key Features:</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Product browsing and filtering system
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Shopping cart functionality with order management
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              User authentication and account management
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Admin dashboard with sales analytics
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            React 18
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            TypeScript
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Tailwind CSS
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Vite
                          </Badge>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>

                {/* Hotel Management Website Project */}
                <Card className="bg-navy border-cyber-blue/20 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Project Images */}
                    <div className="space-y-4 p-4 md:p-6">
                      <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                        <Image src="/images/hotel/lh1.png" alt="Luxury Haven Homepage" fill className="object-cover" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/hotel/lh3.png" alt="Exquisite Menu" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/hotel/lh4.png" alt="Beverages Menu" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/hotel/lh5.png" alt="Available Rooms" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/hotel/lh2.png" alt="Contact & Footer" fill className="object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-4 md:p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="flex items-center justify-between text-cyber-blue text-xl md:text-2xl">
                          Luxury Haven Hotel
                          <div className="text-xs text-gray-400 bg-navy/50 px-2 py-1 rounded">JKUAT Project</div>
                        </CardTitle>
                        <CardDescription className="text-gray-400">Elegant Hotel Management Website</CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          A sophisticated hotel management website built for JKUAT coursework, featuring luxury design
                          aesthetics and comprehensive hotel services. The site showcases rooms, dining options,
                          beverages, and booking functionality with elegant user interface design.
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-cyber-blue text-sm font-medium">Key Features:</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Visually appealing design with luxury hotel aesthetics
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Interactive modal windows for rooms, menu, and beverages
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Dynamic features with smooth animations and transitions
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Responsive design optimized for all devices
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Comprehensive hotel services showcase
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Professional contact and booking interface
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            HTML5
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            CSS3
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            JavaScript
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Responsive Design
                          </Badge>
                        </div>

                        <div className="pt-2">
                          <p className="text-xs text-gray-400 italic">
                            Academic project demonstrating web development skills and modern design principles.
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>

                {/* SmartStore Tracker Project */}
                <Card className="bg-navy border-cyber-blue/20 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Project Images */}
                    <div className="space-y-4 p-4 md:p-6">
                      <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                        <Image
                          src="/images/smartstore/st1.png"
                          alt="SmartStore Tracker Homepage"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image
                            src="/images/smartstore/st5.png"
                            alt="Financial Dashboard"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image
                            src="/images/smartstore/st6.png"
                            alt="Financial Reports"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image
                            src="/images/smartstore/st8.png"
                            alt="Analytics Dashboard"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image
                            src="/images/smartstore/st9.png"
                            alt="OCR Receipt Scanning"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-4 md:p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="flex items-center justify-between text-cyber-blue text-xl md:text-2xl">
                          SmartStore Tracker
                          <div className="flex items-center space-x-2">
                            <div className="text-xs text-gray-400 bg-navy/50 px-2 py-1 rounded">Team Lead</div>
                          </div>
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          Advanced Business Financial Tracking System
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          A comprehensive financial tracking solution for small businesses featuring voice input, OCR
                          receipt scanning, and real-time analytics. Led a team of 5 developers to create this
                          sophisticated web application that addresses the critical problem of profit visibility for
                          small traders. The platform includes user authentication, transaction management, detailed
                          financial reporting, and advanced data visualization capabilities.
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-cyber-blue text-sm font-medium">Advanced Features:</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Voice-to-text transaction entry with speech recognition
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              OCR receipt scanning with automatic data extraction
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Real-time profit/loss tracking and analytics dashboard
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Multi-user authentication with secure session management
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Comprehensive reporting with CSV export functionality
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Team collaboration with 5 developers across different specialties
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-cyber-blue text-sm font-medium">Team Leadership:</h4>
                          <p className="text-xs text-gray-300">
                            Led a diverse team including backend developers, frontend specialists, QA engineers, and
                            technical writers. Managed project architecture, system design, and coordinated development
                            across multiple specializations.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            PHP 7.4+
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            MySQL
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            JavaScript
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Tailwind CSS
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Chart.js
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Tesseract.js
                          </Badge>
                        </div>

                        <div className="pt-2">
                          <p className="text-xs text-gray-400 italic">
                            Collaborative project addressing real-world business challenges with advanced web
                            technologies.
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>

                {/* TypeVerse Project */}
                <Card className="bg-navy border-cyber-blue/20 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Project Images */}
                    <div className="space-y-4 p-4 md:p-6">
                      <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                        <Image src="/images/typeverse/tv1.png" alt="TypeVerse Homepage" fill className="object-cover" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image
                            src="/images/typeverse/tv2.png"
                            alt="Font Browsing Interface"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/typeverse/tv3.png" alt="Font Categories" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/typeverse/tv4.png" alt="Category Cards" fill className="object-cover" />
                        </div>
                        <div className="relative h-20 md:h-24 rounded overflow-hidden">
                          <Image src="/images/typeverse/tv5.png" alt="About Page" fill className="object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-4 md:p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="flex items-center justify-between text-cyber-blue text-xl md:text-2xl">
                          TypeVerse
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-cyber-blue h-8 w-8"
                            onClick={() => window.open("https://lnkd.in/dphbAyu4", "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          Font Discovery Experience Inspired by Google Fonts
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          TypeVerse is a sophisticated font discovery platform created during my internship with Future
                          Interns. Inspired by Google Fonts, this educational project features a stunning purple
                          gradient design, interactive font previews, smooth category filtering, and comprehensive font
                          browsing capabilities. The platform demonstrates modern web development techniques while
                          providing an intuitive user experience for typography exploration.
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-cyber-blue text-sm font-medium">Key Features:</h4>
                          <ul className="space-y-1 text-xs text-gray-300">
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Beautiful purple gradient design with modern UI aesthetics
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Interactive font previews with real-time text customization
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Smooth category filters (All, Sans Serif, Serif, Monospace, Handwriting, Display)
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Font popularity indicators and style count displays
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Comprehensive about page with educational mission statement
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-blue flex-shrink-0"></span>
                              Responsive design optimized for all devices
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-cyber-blue text-sm font-medium">Learning Outcomes:</h4>
                          <p className="text-xs text-gray-300">
                            This project enhanced my UI thinking and taught me the power of recreating interfaces with
                            original creativity. It demonstrates the ability to analyze existing designs and rebuild
                            them with personal innovation and technical excellence.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            React
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            TypeScript
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Tailwind CSS
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Google Fonts API
                          </Badge>
                          <Badge variant="outline" className="text-xs border-cyber-blue/30 text-cyber-blue">
                            Responsive Design
                          </Badge>
                        </div>

                        <div className="pt-2">
                          <p className="text-xs text-gray-400 italic">
                            Future Interns project - Original design inspired by Google Fonts for learning purposes.
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>

                {/* Additional Projects Note */}
                <div className="text-center py-8">
                  <div className="max-w-2xl mx-auto">
                    <p className="text-gray-300 text-sm md:text-base mb-4">
                      The above projects showcase some of my work and technical capabilities. I have additional projects
                      available that demonstrate various skills and technologies.
                    </p>
                    <p className="text-cyber-blue text-sm font-medium">
                      Other projects are available upon request - feel free to get in touch to see more of my work!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-cyber-blue glow-text">
                  GET IN TOUCH
                </h2>
                <div className="mt-2 h-1 w-24 bg-cyber-blue mx-auto"></div>
              </div>
              <div className="mx-auto max-w-2xl text-center space-y-6">
                <p className="text-gray-300 text-sm md:text-base">
                  I'm always interested in new opportunities and exciting projects. Let's discuss how we can work
                  together!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 text-sm md:text-base"
                    onClick={() => window.open("mailto:emmanuejjesseofficial1@gmail.com", "_blank")}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">emmanuejjesseofficial1@gmail.com</span>
                    <span className="sm:hidden">Email</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 text-sm md:text-base"
                    onClick={() => window.open("https://wa.me/254796070811", "_blank")}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">+254 796 070 811</span>
                    <span className="sm:hidden">WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
