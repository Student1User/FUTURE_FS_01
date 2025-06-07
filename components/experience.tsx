import { Briefcase, Calendar, MapPin, Users, TrendingUp, Code } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-cyber-green glow-text">EXPERIENCE</h2>
            <div className="mt-2 h-1 w-24 bg-cyber-green mx-auto"></div>
            <p className="mt-4 text-gray-400 text-sm md:text-base">
              Professional journey in software development and technology
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyber-green/30 transform md:-translate-x-1/2"></div>

            {/* Experience items */}
            <div className="space-y-12">
              <ExperienceItem
                title="Full Stack Developer Intern"
                company="Future Interns"
                location="Remote"
                period="May 2025 - June 2025"
                type="current"
                description="Intensive 1-month internship program focused on full-stack development with real-world project challenges that tested technical abilities and problem-solving skills."
                responsibilities={[
                  "Developed multiple full-stack applications using modern web technologies",
                  "Collaborated with team members on complex project requirements",
                  "Implemented responsive designs and optimized application performance",
                  "Participated in code reviews and agile development processes",
                  "Delivered projects within tight deadlines while maintaining code quality",
                ]}
                technologies={["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3"]}
                align="right"
              />

              <ExperienceItem
                title="MERN Stack Developer"
                company="Power Learn Project (PLP)"
                location="Online Program"
                period="2024 - 2025"
                type="current"
                description="Comprehensive full-stack development program focusing on MERN stack technologies with hands-on project development and collaborative learning."
                responsibilities={[
                  "Built multiple full-stack applications using MongoDB, Express.js, React, and Node.js",
                  "Developed RESTful APIs and integrated with various databases",
                  "Implemented user authentication and authorization systems",
                  "Created responsive web applications with modern UI/UX principles",
                  "Collaborated on team projects using Git version control",
                  "Applied software engineering best practices and agile methodologies",
                ]}
                technologies={["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "Bootstrap", "Git"]}
                align="left"
              />

              <ExperienceItem
                title="Student Project Mentor & Developer"
                company="Jomo Kenyatta University of Technology"
                location="Nairobi, Kenya"
                period="2023 - 2025"
                type="previous"
                description="Provided technical guidance and mentorship to fellow students while developing various web applications and enhancing programming skills through practical projects."
                responsibilities={[
                  "Mentored students in web development technologies and best practices",
                  "Assisted in debugging and troubleshooting complex programming issues",
                  "Developed multiple projects using Python, databases, and web technologies",
                  "Conducted code reviews and provided constructive feedback",
                  "Enhanced technical skills through continuous project development",
                  "Collaborated on academic projects and assignments",
                ]}
                technologies={["Python", "HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL", "Git"]}
                align="right"
              />

              <ExperienceItem
                title="Final Year Project Developer"
                company="Jomo Kenyatta University of Technology"
                location="Nairobi, Kenya"
                period="2024"
                type="previous"
                description="Developed a comprehensive e-commerce website as final year project, demonstrating full-stack development skills and understanding of web technologies."
                responsibilities={[
                  "Designed and developed a complete e-commerce platform from scratch",
                  "Implemented user authentication, product management, and shopping cart functionality",
                  "Created responsive frontend using HTML, CSS, and JavaScript",
                  "Built backend APIs using PHP and integrated with MySQL database",
                  "Set up local development environment using XAMPP",
                  "Documented project architecture and implementation details",
                ]}
                technologies={["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "XAMPP"]}
                align="left"
              />

              <ExperienceItem
                title="Frontend Developer (Self-taught)"
                company="Independent Learning"
                location="Nairobi, Kenya"
                period="2022 - 2023"
                type="previous"
                description="Started programming journey with frontend development, building foundational skills in web technologies through self-directed learning and practice projects."
                responsibilities={[
                  "Learned HTML, CSS, and JavaScript fundamentals through online resources",
                  "Built responsive websites and interactive web applications",
                  "Practiced modern CSS techniques and responsive design principles",
                  "Developed problem-solving skills through coding challenges",
                  "Created portfolio projects to demonstrate growing technical abilities",
                  "Established foundation for advanced web development concepts",
                ]}
                technologies={["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"]}
                align="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ExperienceItemProps {
  title: string
  company: string
  location: string
  period: string
  type: "current" | "previous"
  description: string
  responsibilities: string[]
  technologies: string[]
  align: "left" | "right"
}

function ExperienceItem({
  title,
  company,
  location,
  period,
  type,
  description,
  responsibilities,
  technologies,
  align,
}: ExperienceItemProps) {
  const getStatusBadge = () => {
    if (type === "current") {
      return (
        <span className="inline-block px-2 py-1 text-xs bg-cyber-green/20 text-cyber-green rounded-full border border-cyber-green/30">
          Current
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
          type === "current"
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

        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center text-cyber-green">
              <Briefcase className="mr-2 h-5 w-5" />
              <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
            </div>
            {getStatusBadge()}
          </div>

          <div className="space-y-1 text-sm md:text-base">
            <div className="flex items-center text-gray-300">
              <Users className="mr-2 h-4 w-4 text-cyber-green/70" />
              <span>{company}</span>
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

          <div>
            <div className="flex items-center mb-2">
              <TrendingUp className="mr-2 h-4 w-4 text-cyber-green/70" />
              <h4 className="text-cyber-green text-sm font-medium">Key Responsibilities:</h4>
            </div>
            <ul className="space-y-1">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start text-xs md:text-sm text-gray-300">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyber-green flex-shrink-0"></span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Code className="mr-2 h-4 w-4 text-cyber-green/70" />
              <h4 className="text-cyber-green text-sm font-medium">Technologies Used:</h4>
            </div>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-cyber-green/10 text-cyber-green rounded border border-cyber-green/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
