"use client"

import { useEffect, useState } from "react"

export function BackgroundAnimations() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyber-green/20 rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path
              d="M50 50h100v50h-50v50h-50z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-cyber-green"
            />
            <circle cx="50" cy="50" r="3" fill="currentColor" className="text-cyber-green" />
            <circle cx="150" cy="50" r="3" fill="currentColor" className="text-cyber-green" />
            <circle cx="150" cy="100" r="3" fill="currentColor" className="text-cyber-green" />
            <circle cx="100" cy="150" r="3" fill="currentColor" className="text-cyber-green" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Animated code snippets */}
      <div className="absolute top-20 left-10 opacity-5 animate-pulse">
        <div className="font-mono text-xs text-cyber-green">
          <div>const developer = {`{`}</div>
          <div className="ml-4">name: "Emmanuel",</div>
          <div className="ml-4">skills: ["React", "Node.js"]</div>
          <div>{`}`}</div>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 opacity-5 animate-pulse" style={{ animationDelay: "2s" }}>
        <div className="font-mono text-xs text-cyber-green">
          <div>function buildFuture() {`{`}</div>
          <div className="ml-4">return innovation;</div>
          <div>{`}`}</div>
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyber-green/5 rounded-full blur-xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-cyber-green-dark/5 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
