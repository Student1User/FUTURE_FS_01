"use client"

import { useState } from "react"
import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink, Heart, FileText, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LegalModal } from "./legal-modal"

export function Footer() {
  const [modalOpen, setModalOpen] = useState<"terms" | "privacy" | null>(null)

  return (
    <>
      <footer className="relative bg-gradient-to-t from-dark-forest to-forest border-t border-cyber-green/20">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent"></div>

        <div className="container px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-cyber-green">Emmanuel Jesse</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Fullstack Developer crafting exceptional digital experiences with modern web technologies. Turning
                  ideas into reality, one line of code at a time.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-cyber-green uppercase tracking-wider">Connect</h4>
                <div className="flex space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-gray-400 hover:text-cyber-green hover:bg-cyber-green/10 transition-all duration-300 hover:scale-110"
                    onClick={() => window.open("https://github.com/Student1User", "_blank")}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-gray-400 hover:text-cyber-green hover:bg-cyber-green/10 transition-all duration-300 hover:scale-110"
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/emmanuel-magachi-jesse-385011298/", "_blank")
                    }
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-gray-400 hover:text-cyber-green hover:bg-cyber-green/10 transition-all duration-300 hover:scale-110"
                    onClick={() => window.open("https://x.com/EmmanuelMJesse", "_blank")}
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-gray-400 hover:text-cyber-green hover:bg-cyber-green/10 transition-all duration-300 hover:scale-110"
                    onClick={() => window.open("https://www.facebook.com/share/1BQ7ZMZJAz/", "_blank")}
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-cyber-green/10">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Available for freelance projects and full-time opportunities. Let's build something amazing together.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-cyber-green uppercase tracking-wider">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-cyber-green/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300 font-medium">Email</p>
                    <a
                      href="mailto:emmanuejjesseofficial1@gmail.com"
                      className="text-sm text-gray-400 hover:text-cyber-green transition-colors duration-300"
                    >
                      emmanuejjesseofficial1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-cyber-green/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300 font-medium">Location</p>
                    <p className="text-sm text-gray-400">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal & Services */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-cyber-green uppercase tracking-wider">Legal</h4>
              <div className="space-y-4">
                <div className="space-y-3">
                  <button
                    onClick={() => setModalOpen("terms")}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyber-green transition-colors duration-300 group text-sm"
                  >
                    <FileText className="h-4 w-4 text-cyber-green/70 group-hover:text-cyber-green transition-colors" />
                    <span>Terms & Conditions</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>

                  <button
                    onClick={() => setModalOpen("privacy")}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyber-green transition-colors duration-300 group text-sm"
                  >
                    <FileText className="h-4 w-4 text-cyber-green/70 group-hover:text-cyber-green transition-colors" />
                    <span>Privacy Policy</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>

                <div className="pt-4 border-t border-cyber-green/10">
                  <div className="space-y-3">
                    <h5 className="text-xs font-semibold text-cyber-green uppercase tracking-wider">Services</h5>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li>• Full-Stack Development</li>
                      <li>• Web Application Development</li>
                      <li>• API Development & Integration</li>
                      <li>• Database Design & Optimization</li>
                      <li>• Technical Consulting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-cyber-green/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>© 2025 Emmanuel M Jesse. All rights reserved.</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>in Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent"></div>
      </footer>

      {/* Legal Modals */}
      <LegalModal isOpen={modalOpen === "terms"} onClose={() => setModalOpen(null)} type="terms" />
      <LegalModal isOpen={modalOpen === "privacy"} onClose={() => setModalOpen(null)} type="privacy" />
    </>
  )
}
