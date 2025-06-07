"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, User, Code, Briefcase, FileText, Mail, Menu, X, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
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

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    // Check on initial load
    checkMobile()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [scrolled, activeSection])

  return (
    <>
      <header
        className={cn(
          "fixed top-4 right-4 z-30 transition-all duration-500 rounded-2xl border backdrop-blur-md",
          isMobile ? "left-4" : "left-20",
          scrolled
            ? "bg-forest/10 border-cyber-green/20 shadow-2xl shadow-cyber-green/10"
            : "bg-forest/30 border-cyber-green/30 shadow-xl shadow-cyber-green/20",
        )}
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent rounded-full"></div>

        <div className="px-4 md:px-6">
          <div className="flex h-14 md:h-16 items-center justify-between">
            <div className="flex items-center">
              {isMobile && (
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="mr-3 p-2 rounded-xl text-cyber-green hover:bg-cyber-green/10 transition-all duration-300 hover:scale-105"
                >
                  {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              )}
              <Link href="#home" className="flex items-center space-x-3 group">
                <Logo size="sm" className="text-cyber-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-cyber-green font-bold text-lg hidden sm:block group-hover:text-white transition-colors duration-300">
                  Emmanuel
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              <NavLink href="#home" label="Home" icon={<Home size={16} />} isActive={activeSection === "home"} />
              <NavLink href="#about" label="About" icon={<User size={16} />} isActive={activeSection === "about"} />
              <NavLink
                href="#education"
                label="Education"
                icon={<GraduationCap size={16} />}
                isActive={activeSection === "education"}
              />
              <NavLink href="#skills" label="Skills" icon={<Code size={16} />} isActive={activeSection === "skills"} />
              <NavLink
                href="#experience"
                label="Experience"
                icon={<Briefcase size={16} />}
                isActive={activeSection === "experience"}
              />
              <NavLink
                href="#projects"
                label="Projects"
                icon={<FileText size={16} />}
                isActive={activeSection === "projects"}
              />
              <NavLink
                href="#contact"
                label="Contact"
                icon={<Mail size={16} />}
                isActive={activeSection === "contact"}
              />
            </nav>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent rounded-full"></div>
      </header>

      {/* Mobile menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 bg-dark-forest/95 backdrop-blur-md pt-24 pb-4 px-4 overflow-y-auto">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <nav className="relative flex flex-col space-y-2">
            <MobileNavLink
              href="#home"
              label="Home"
              icon={<Home size={20} />}
              isActive={activeSection === "home"}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="#about"
              label="About"
              icon={<User size={20} />}
              isActive={activeSection === "about"}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="#education"
              label="Education"
              icon={<GraduationCap size={20} />}
              isActive={activeSection === "education"}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="#skills"
              label="Skills"
              icon={<Code size={20} />}
              isActive={activeSection === "skills"}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="#experience"
              label="Experience"
              icon={<Briefcase size={20} />}
              isActive={activeSection === "experience"}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="#projects"
              label="Projects"
              icon={<FileText size={20} />}
              isActive={activeSection === "projects"}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="#contact"
              label="Contact"
              icon={<Mail size={20} />}
              isActive={activeSection === "contact"}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </nav>
        </div>
      )}
    </>
  )
}

interface NavLinkProps {
  href: string
  label: string
  icon: React.ReactNode
  isActive?: boolean
}

function NavLink({ href, label, icon, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-4 py-2 rounded-xl transition-all duration-300 group text-sm font-medium",
        isActive
          ? "bg-cyber-green/20 text-cyber-green shadow-lg shadow-cyber-green/30"
          : "text-gray-300 hover:text-cyber-green hover:bg-cyber-green/10",
      )}
    >
      <span
        className={cn(
          "mr-2 transition-colors",
          isActive ? "text-cyber-green" : "text-cyber-green/70 group-hover:text-cyber-green",
        )}
      >
        {icon}
      </span>
      <span className="hidden lg:inline">{label}</span>
    </Link>
  )
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void
}

function MobileNavLink({ href, label, icon, isActive, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center p-4 rounded-xl transition-all duration-300 border group",
        isActive
          ? "bg-cyber-green/20 text-cyber-green border-cyber-green/30"
          : "text-gray-300 hover:bg-cyber-green/10 hover:text-cyber-green border-transparent hover:border-cyber-green/20",
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "mr-4 transition-transform duration-300",
          isActive ? "text-cyber-green" : "text-cyber-green group-hover:scale-110",
        )}
      >
        {icon}
      </span>
      <span className="text-lg font-medium">{label}</span>
    </Link>
  )
}
