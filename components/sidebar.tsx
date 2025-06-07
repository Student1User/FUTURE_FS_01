"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, FileText, Mail, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Logo } from "./logo"

export function Sidebar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    // Check on initial load
    checkMobile()

    // Handle scroll for transparency effect and active section
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "education", "skills", "experience", "projects", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    // Handle resize for mobile detection
    const handleResize = () => {
      checkMobile()
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [scrolled, activeSection])

  // Don't render sidebar at all on mobile
  if (isMobile) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed top-4 left-4 bottom-4 z-40 w-16 rounded-2xl border transition-all duration-500 ease-in-out flex flex-col items-center py-6 backdrop-blur-md",
        scrolled
          ? "bg-dark-forest/10 border-cyber-green/20 shadow-2xl shadow-cyber-green/10"
          : "bg-dark-forest/30 border-cyber-green/30 shadow-xl shadow-cyber-green/20",
      )}
    >
      {/* Decorative borders */}
      <div className="absolute top-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent rounded-full"></div>

      {/* Logo */}
      <div className="mb-8">
        <Link href="#home" className="block group">
          <Logo
            size="sm"
            className="text-cyber-green hover:scale-125 transition-all duration-300 group-hover:drop-shadow-lg group-hover:drop-shadow-cyber-green/50"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-4 flex-1">
        <NavItem href="#home" icon={<Home size={20} />} label="Home" isActive={activeSection === "home"} />
        <NavItem href="#about" icon={<User size={20} />} label="About" isActive={activeSection === "about"} />
        <NavItem
          href="#education"
          icon={<GraduationCap size={20} />}
          label="Education"
          isActive={activeSection === "education"}
        />
        <NavItem href="#skills" icon={<Code size={20} />} label="Skills" isActive={activeSection === "skills"} />
        <NavItem
          href="#experience"
          icon={<Briefcase size={20} />}
          label="Work"
          isActive={activeSection === "experience"}
        />
        <NavItem
          href="#projects"
          icon={<FileText size={20} />}
          label="Projects"
          isActive={activeSection === "projects"}
        />
        <NavItem href="#contact" icon={<Mail size={20} />} label="Contact" isActive={activeSection === "contact"} />
      </nav>

      {/* Status indicator */}
      <div className="mt-auto flex flex-col items-center space-y-3">
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyber-green to-cyber-green-dark animate-pulse-glow shadow-lg shadow-cyber-green/50"></div>
        <div className="w-px h-8 bg-gradient-to-b from-cyber-green/50 to-transparent"></div>
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive?: boolean
}

function NavItem({ href, icon, label, isActive }: NavItemProps) {
  return (
    <Link href={href} className="group relative flex flex-col items-center">
      <div
        className={cn(
          "p-3 rounded-xl transition-all duration-300 hover:scale-110 relative",
          isActive
            ? "bg-cyber-green/20 text-cyber-green shadow-lg shadow-cyber-green/30"
            : "text-cyber-green/70 hover:bg-cyber-green/10 hover:text-cyber-green",
        )}
      >
        {isActive && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-green/20 to-cyber-green-dark/20 animate-pulse"></div>
        )}
        <div className="relative z-10">{icon}</div>
      </div>

      {/* Tooltip */}
      <div className="absolute left-full ml-6 px-4 py-2 rounded-xl bg-dark-forest/90 backdrop-blur-sm border border-cyber-green/30 text-cyber-green text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl z-50 transform translate-x-2 group-hover:translate-x-0">
        {label}
        {/* Arrow */}
        <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-cyber-green/30"></div>
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyber-green to-cyber-green-dark rounded-full shadow-lg shadow-cyber-green/50"></div>
      )}
    </Link>
  )
}
