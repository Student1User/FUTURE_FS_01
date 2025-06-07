import { GraduationCap, Calendar, MapPin, Award, BookOpen, Code2 } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-dark-forest/30">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-cyber-green glow-text">EDUCATION</h2>
            <div className="mt-2 h-1 w-24 bg-cyber-green mx-auto"></div>
            <p className="mt-4 text-gray-400 text-sm md:text-base">
              Continuous learning journey in technology and software development
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyber-green/30 transform md:-translate-x-1/2"></div>

            {/* Education items */}
            <div className="space-y-12">
              <EducationItem
                title="Diploma in Information Technology"
                institution="Jomo Kenyatta University of Technology"
                location="Nairobi, Kenya"
                period="2023 - 2024"
                description="Comprehensive program covering fundamental IT concepts, programming, database management, and system administration."
                achievements={[
                  "Completed with credit",
                  "Specialized in software development",
                  "Gained expertise in database design and management",
                ]}
                align="right"
                type="formal"
              />

              <EducationItem
                title="Multiple Technology Certifications"
                institution="Cisco Networking Academy"
                location="Online"
                period="2023 - 2025"
                description="Comprehensive certification program covering multiple programming languages and system administration."
                achievements={[
                  "Python Programming Certification",
                  "JavaScript Development Certification",
                  "Linux System Administration",
                  "DevOps Fundamentals Certification",
                ]}
                align="left"
                type="certification"
              />

              <EducationItem
                title="AI Essentials & AI Starter Kit"
                institution="ALX"
                location="Online"
                period="2024 - 2025"
                description="Specialized training in artificial intelligence fundamentals and practical AI implementation."
                achievements={[
                  "AI Essentials Certificate",
                  "AI Starter Kit Completion",
                  "Machine Learning Fundamentals",
                ]}
                align="right"
                type="certification"
              />

              <EducationItem
                title="Python Programming Certification"
                institution="Uniathena"
                location="Online"
                period="2025"
                description="Advanced Python programming course focusing on modern development practices and frameworks."
                achievements={[
                  "Advanced Python Programming",
                  "Web Development with Python",
                  "Data Structures and Algorithms",
                ]}
                align="left"
                type="certification"
              />

              <EducationItem
                title="Software Engineering & Full Stack MERN"
                institution="Power Learn Project"
                location="Online"
                period="2025 - Present"
                description="Comprehensive full-stack development program focusing on modern web technologies and software engineering principles."
                achievements={[
                  "MongoDB, Express.js, React, Node.js",
                  "Software Engineering Best Practices",
                  "Agile Development Methodologies",
                  "Currently in progress",
                ]}
                align="right"
                type="ongoing"
              />

              {/* Continuous Learning Note */}
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-gradient-to-r from-cyber-green to-cyber-green-dark border-4 border-dark-forest z-10"></div>
                <div className="ml-8 md:ml-0 md:text-center">
                  <div className="inline-block rounded-lg border border-cyber-green/20 bg-dark-forest/80 p-4 gradient-border">
                    <div className="flex items-center justify-center mb-2">
                      <BookOpen className="mr-2 h-5 w-5 text-cyber-green" />
                      <h3 className="text-lg font-semibold text-cyber-green">Continuous Learning</h3>
                    </div>
                    <p className="text-sm text-gray-300 text-center max-w-md">
                      I continue to expand my knowledge through hands-on projects, exploring new technologies, and
                      staying current with industry trends and best practices in software development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface EducationItemProps {
  title: string
  institution: string
  location: string
  period: string
  description: string
  achievements: string[]
  align: "left" | "right"
  type: "formal" | "certification" | "ongoing"
}

function EducationItem({
  title,
  institution,
  location,
  period,
  description,
  achievements,
  align,
  type,
}: EducationItemProps) {
  const getIcon = () => {
    switch (type) {
      case "formal":
        return <GraduationCap className="h-5 w-5" />
      case "certification":
        return <Award className="h-5 w-5" />
      case "ongoing":
        return <Code2 className="h-5 w-5" />
      default:
        return <GraduationCap className="h-5 w-5" />
    }
  }

  const getStatusBadge = () => {
    if (type === "ongoing") {
      return (
        <span className="inline-block px-2 py-1 text-xs bg-cyber-green/20 text-cyber-green rounded-full border border-cyber-green/30">
          In Progress
        </span>
      )
    }
    return null
  }

  return (
    <div className={`relative ${align === "right" ? "md:ml-auto" : "md:mr-auto"} md:w-[calc(50%-20px)]`}>
      {/* Timeline dot */}
      <div
        className={`absolute left-0 md:left-auto md:right-auto md:-translate-x-1/2 top-0 w-5 h-5 rounded-full border-4 border-dark-forest z-10 ${
          type === "ongoing"
            ? "bg-gradient-to-r from-cyber-green to-cyber-green-dark animate-pulse-glow"
            : "bg-cyber-green"
        }`}
      ></div>

      {/* Content */}
      <div
        className={`ml-8 md:ml-0 relative rounded-lg border border-cyber-green/20 bg-dark-forest p-5 gradient-border hover:border-cyber-green/40 transition-all duration-300 ${
          align === "right" ? "md:ml-0" : "md:mr-0"
        }`}
      >
        {/* Triangle pointer */}
        <div
          className={`hidden md:block absolute top-2 ${
            align === "right"
              ? "left-0 -translate-x-full border-r-cyber-green/20"
              : "right-0 translate-x-full border-l-cyber-green/20"
          } w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${
            align === "right" ? "border-r-[12px]" : "border-l-[12px]"
          }`}
        ></div>

        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center text-cyber-green">
              {getIcon()}
              <h3 className="ml-2 text-lg md:text-xl font-semibold">{title}</h3>
            </div>
            {getStatusBadge()}
          </div>

          <div className="space-y-1 text-sm md:text-base">
            <div className="flex items-center text-gray-300">
              <Award className="mr-2 h-4 w-4 text-cyber-green/70" />
              <span>{institution}</span>
            </div>

            <div className="flex items-center text-gray-400">
              <MapPin className="mr-2 h-4 w-4 text-cyber-green/70" />
              <span>{location}</span>
            </div>

            <div className="flex items-center text-gray-400">
              <Calendar className="mr-2 h-4 w-4 text-cyber-green/70" />
              <span>{period}</span>
            </div>
          </div>

          <p className="text-gray-300 text-sm">{description}</p>

          {achievements.length > 0 && (
            <div className="pt-2">
              <h4 className="text-cyber-green text-sm font-medium mb-1">Achievements & Certifications:</h4>
              <ul className="space-y-1">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start text-xs md:text-sm text-gray-300">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-green flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
