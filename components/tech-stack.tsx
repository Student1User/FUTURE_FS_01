import type React from "react"
import { Code, Database, Server, Cloud, Shield, Zap } from "lucide-react"

export function TechStack() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-dark-forest/50">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-cyber-green glow-text">TECH STACK</h2>
            <div className="mt-2 h-1 w-24 bg-cyber-green mx-auto"></div>
            <p className="mt-4 text-gray-400 text-sm md:text-base">
              Comprehensive skillset across the full development lifecycle
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Frontend Technologies */}
            <TechCard
              title="Frontend Technologies"
              icon={<Code className="h-5 w-5 md:h-6 md:w-6" />}
              technologies={[
                "HTML5, CSS3, JavaScript (ES6+), TypeScript",
                "React.js, Vue.js, Angular, Svelte",
                "Tailwind CSS, Bootstrap, Material UI, Sass/SCSS",
                "Redux, Zustand, Pinia, Context API",
                "Vite, Webpack, Babel, ESLint, Prettier",
                "Jest, React Testing Library, Cypress, Vitest",
                "Responsive Design, Mobile-first, Accessibility (a11y)",
              ]}
            />

            {/* Backend Technologies */}
            <TechCard
              title="Backend Technologies"
              icon={<Server className="h-5 w-5 md:h-6 md:w-6" />}
              technologies={[
                "Node.js, Express.js, NestJS",
                "PHP (Laravel, CodeIgniter)",
                "Python (Django, Flask, FastAPI)",
                "Ruby on Rails, Java (Spring Boot)",
                "JWT, OAuth2, Passport.js, Firebase Auth",
                "RESTful APIs, GraphQL, WebSockets",
                "Mocha, Chai, Supertest, PHPUnit",
              ]}
            />

            {/* Databases */}
            <TechCard
              title="Databases"
              icon={<Database className="h-5 w-5 md:h-6 md:w-6" />}
              technologies={[
                "MySQL, PostgreSQL, SQLite, MS SQL Server",
                "MongoDB, Redis, Firebase Realtime DB, DynamoDB",
                "Prisma, Sequelize, TypeORM, Mongoose, Eloquent",
                "Database Design & Optimization",
                "Data Modeling & Schema Design",
              ]}
            />

            {/* DevOps & Deployment */}
            <TechCard
              title="DevOps & Deployment"
              icon={<Cloud className="h-5 w-5 md:h-6 md:w-6" />}
              technologies={[
                "Git, GitHub, GitLab, Bitbucket",
                "GitHub Actions, GitLab CI, Jenkins, CircleCI",
                "Vercel, Netlify, Heroku, Railway, Render",
                "DigitalOcean, AWS, GCP, Azure",
                "Docker, Docker Compose, Kubernetes",
              ]}
            />

            {/* Security & Performance */}
            <TechCard
              title="Security & Performance"
              icon={<Shield className="h-5 w-5 md:h-6 md:w-6" />}
              technologies={[
                "HTTPS, CORS, CSRF/XSS protection",
                "Helmet.js, Bcrypt, Rate limiting",
                "Lazy loading, Code splitting, CDN",
                "Server-side rendering (SSR)",
                "Caching (Redis, Varnish)",
              ]}
            />

            {/* Other Skills */}
            <TechCard
              title="Other Skills"
              icon={<Zap className="h-5 w-5 md:h-6 md:w-6" />}
              technologies={[
                "Agile/Scrum, Jira, Trello, Asana",
                "Swagger/OpenAPI, Postman",
                "Figma, Adobe XD, UX/UI principles",
                "Problem-solving, Team collaboration",
                "Git branching, Issue tracking",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface TechCardProps {
  title: string
  icon: React.ReactNode
  technologies: string[]
}

function TechCard({ title, icon, technologies }: TechCardProps) {
  return (
    <div className="rounded-xl border border-cyber-green/20 bg-dark-forest p-4 md:p-6 gradient-border hover:border-cyber-green/40 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-md bg-cyber-green/10 text-cyber-green mr-3">{icon}</div>
        <h3 className="text-lg md:text-xl font-semibold text-cyber-green">{title}</h3>
      </div>
      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1.5 h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-cyber-green flex-shrink-0"></span>
            <span className="text-xs md:text-sm text-gray-300 leading-relaxed">{tech}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
