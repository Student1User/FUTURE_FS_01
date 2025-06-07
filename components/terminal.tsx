"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface Command {
  input: string
  output: string[]
}

export function Terminal() {
  const [commands, setCommands] = useState<Command[]>([
    {
      input: "const developer = {",
      output: [
        '  name: "Emmanuel M Jesse",',
        '  role: "Full-Stack Developer",',
        '  location: "Nairobi, Kenya",',
        '  skills: ["React", "TypeScript", "Node.js"]',
        "};",
      ],
    },
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const availableCommands = {
    help: [
      "Available commands:",
      "  help     - Show this help message",
      "  about    - About Emmanuel",
      "  skills   - List technical skills",
      "  contact  - Contact information",
      "  projects - Recent projects",
      "  clear    - Clear terminal",
    ],
    about: [
      "Emmanuel M Jesse - Full Stack Developer",
      "Location: Nairobi, Kenya",
      "Experience: 5+ years in web development",
      "Specializes in modern web technologies",
    ],
    skills: [
      "Frontend: React, Vue.js, TypeScript, Tailwind CSS",
      "Backend: Node.js, PHP, Python, Express.js",
      "Database: MySQL, PostgreSQL, MongoDB",
      "Tools: Git, Docker, AWS, Vercel",
    ],
    contact: [
      "Email: emmanuejjesseofficial1@gmail.com",
      "Phone: +254 796 070 811",
      "GitHub: github.com/Student1User",
      "LinkedIn: linkedin.com/in/emmanuel-magachi-jesse-385011298",
    ],
    projects: [
      "1. E-Commerce Platform - Next.js, Stripe, PostgreSQL",
      "2. SmartStore Tracker - PHP, MySQL, Chart.js",
      "3. TypeVerse - React, TypeScript, Tailwind CSS",
      "4. WeatherVerse - React, OpenWeatherMap API",
    ],
    clear: [],
  }

  const handleCommand = (input: string) => {
    const trimmedInput = input.trim().toLowerCase()

    if (trimmedInput === "clear") {
      setCommands([])
      return
    }

    const output = availableCommands[trimmedInput as keyof typeof availableCommands] || [
      `Command not found: ${input}`,
      "Type 'help' for available commands",
    ]

    setCommands((prev) => [...prev, { input: `> ${input}`, output }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentInput.trim()) {
      handleCommand(currentInput)
      setCurrentInput("")
    }
  }

  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg border border-cyber-green/30 bg-dark-forest/80 overflow-hidden shadow-lg glow-border">
      <div className="flex items-center px-4 py-2 bg-dark-forest border-b border-cyber-green/20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm text-gray-400">terminal</div>
      </div>
      <div
        ref={terminalRef}
        className="p-4 font-mono text-sm h-80 overflow-y-auto cursor-text"
        onClick={handleTerminalClick}
      >
        {commands.map((command, index) => (
          <div key={index} className="mb-2">
            <div className="text-cyber-green">{command.input}</div>
            {command.output.map((line, lineIndex) => (
              <div key={lineIndex} className="text-gray-300 ml-2">
                {line}
              </div>
            ))}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-cyber-green mr-2">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none"
            placeholder="Type 'help' for commands..."
            autoFocus
          />
          <span className="inline-block w-2 h-4 bg-cyber-green animate-pulse ml-1"></span>
        </form>
      </div>
    </div>
  )
}
