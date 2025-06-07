"use client"

import type React from "react"

import { useEffect } from "react"
import { X, FileText, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  type: "terms" | "privacy"
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const termsContent = (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <FileText className="h-6 w-6 text-cyber-green" />
        <h2 className="text-2xl font-bold text-cyber-green">Terms and Conditions</h2>
      </div>

      <p className="text-gray-300 leading-relaxed">
        Welcome to Emmanuel Jesse's Portfolio (the "Website"). By accessing or using this Website, you agree to be bound
        by the following Terms and Conditions. Please read them carefully.
      </p>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">1. Acceptance of Terms</h3>
          <p className="text-gray-300 leading-relaxed">
            By using this Website, you accept and agree to be legally bound by these Terms and Conditions, along with
            any applicable laws and regulations. If you do not agree with any part of these terms, please do not use the
            Website.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">2. Purpose of the Website</h3>
          <p className="text-gray-300 leading-relaxed mb-3">This Website is designed to:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
            <li>Present Emmanuel Jesse's skills, experience, and portfolio as a Fullstack Developer.</li>
            <li>Provide potential clients, collaborators, or employers with project samples and contact details.</li>
            <li>Share technical insights, tutorials, or blog content where applicable.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-3">
            It is not intended for e-commerce, public discussion forums, or mass data extraction.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">3. Intellectual Property</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>
              All content—including but not limited to text, graphics, source code, logos, and design—is the
              intellectual property of <strong>Emmanuel Jesse</strong>, unless credited otherwise.
            </li>
            <li>
              You may not copy, modify, distribute, transmit, display, or sell any materials without prior written
              permission.
            </li>
            <li>
              Any third-party content or logos used within portfolio projects are for demonstrative purposes and belong
              to their respective owners.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">4. Acceptable Use</h3>
          <p className="text-gray-300 leading-relaxed mb-3">Users of this Website agree not to:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
            <li>Engage in any activity that may harm, disable, overburden, or impair the Website.</li>
            <li>Attempt unauthorized access to any part of the Website or the server it's hosted on.</li>
            <li>Use bots, spiders, or other automated means to access or scrape Website content without permission.</li>
            <li>
              Post or transmit any content that is offensive, harmful, or violates any laws or third-party rights.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">5. External Links</h3>
          <p className="text-gray-300 leading-relaxed">
            The Website may include links to third-party websites or tools. These are provided for convenience only.
            Emmanuel Jesse has no control over and accepts no responsibility for the content, policies, or accuracy of
            third-party sites.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">6. Project Work and Client Content</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Client projects showcased are either authorized for display or are generic/demo representations.</li>
            <li>
              If you are a past or current client and would like your project removed or updated, please contact
              Emmanuel Jesse directly.
            </li>
            <li>No confidential or proprietary client information is displayed without permission.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">7. Modifications and Website Availability</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>
              Emmanuel Jesse reserves the right to change, update, or remove content or functionality on the Website at
              any time without notice.
            </li>
            <li>
              The Website may be temporarily unavailable due to maintenance, updates, or technical issues. No liability
              is accepted for downtime or content errors.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">8. Disclaimer</h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            The Website and all content are provided "as is" without warranties of any kind. Emmanuel Jesse does not
            guarantee that the Website:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
            <li>Will be free from bugs or errors;</li>
            <li>Will always be accessible or available;</li>
            <li>Will contain fully up-to-date or comprehensive content.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-3">Use the information provided at your own discretion.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">9. Limitation of Liability</h3>
          <p className="text-gray-300 leading-relaxed">
            In no event shall Emmanuel Jesse be liable for any indirect, incidental, consequential, or special damages
            resulting from the use or inability to use the Website, even if advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">10. Contact</h3>
          <p className="text-gray-300 leading-relaxed">
            For questions or concerns related to these Terms and Conditions, please reach out:
          </p>
          <div className="mt-3">
            <p className="text-gray-300">
              📧 <strong>Email</strong>: emmanuejjesseofficial1@gmail.com
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">11. Governing Law</h3>
          <p className="text-gray-300 leading-relaxed">
            These Terms and any disputes related to them shall be governed and interpreted in accordance with the laws
            of <strong>Kenya</strong>, without regard to its conflict of law rules.
          </p>
        </section>
      </div>

      <div className="border-t border-cyber-green/20 pt-6 mt-8">
        <p className="text-sm text-gray-400 text-center">Last updated: January 2025</p>
      </div>
    </div>
  )

  const privacyContent = (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="h-6 w-6 text-cyber-green" />
        <h2 className="text-2xl font-bold text-cyber-green">Privacy Policy</h2>
      </div>

      <p className="text-gray-300 leading-relaxed">
        This Privacy Policy describes how Emmanuel Jesse ("I", "me", or "my") collects, uses, and protects your
        information when you visit this portfolio website.
      </p>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">1. Information Collection</h3>
          <p className="text-gray-300 leading-relaxed mb-3">I may collect the following types of information:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
            <li>
              <strong>Personal Information</strong>: Name, email address, and message content when you contact me
              through the website.
            </li>
            <li>
              <strong>Usage Data</strong>: Information about how you interact with the website, including pages visited
              and time spent.
            </li>
            <li>
              <strong>Technical Data</strong>: IP address, browser type, device information, and cookies for website
              functionality.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">2. How I Use Your Information</h3>
          <p className="text-gray-300 leading-relaxed mb-3">Your information is used to:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
            <li>Respond to your inquiries and communication</li>
            <li>Improve website functionality and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Ensure website security and prevent abuse</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">3. Information Sharing</h3>
          <p className="text-gray-300 leading-relaxed">
            I do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
            except as described in this policy or as required by law.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">4. Data Security</h3>
          <p className="text-gray-300 leading-relaxed">
            I implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">5. Cookies and Tracking</h3>
          <p className="text-gray-300 leading-relaxed">
            This website may use cookies to enhance your browsing experience. You can choose to disable cookies through
            your browser settings, though this may affect website functionality.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">6. Third-Party Services</h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            This website may integrate with third-party services such as:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
            <li>Google Analytics for website analytics</li>
            <li>Email services for contact form functionality</li>
            <li>Hosting providers for website delivery</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-3">
            These services have their own privacy policies governing the use of your information.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">7. Your Rights</h3>
          <p className="text-gray-300 leading-relaxed mb-3">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">8. Contact Information</h3>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about this Privacy Policy or wish to exercise your rights, please contact me:
          </p>
          <div className="mt-3">
            <p className="text-gray-300">
              📧 <strong>Email</strong>: emmanuejjesseofficial1@gmail.com
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-cyber-green mb-3">9. Changes to This Policy</h3>
          <p className="text-gray-300 leading-relaxed">
            I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
            revision date.
          </p>
        </section>
      </div>

      <div className="border-t border-cyber-green/20 pt-6 mt-8">
        <p className="text-sm text-gray-400 text-center">Last updated: January 2025</p>
      </div>
    </div>
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-dark-forest border border-cyber-green/30 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-dark-forest/95 backdrop-blur-sm border-b border-cyber-green/20 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {type === "terms" ? (
              <FileText className="h-6 w-6 text-cyber-green" />
            ) : (
              <Shield className="h-6 w-6 text-cyber-green" />
            )}
            <h2 className="text-xl font-bold text-cyber-green">
              {type === "terms" ? "Terms and Conditions" : "Privacy Policy"}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-cyber-green hover:bg-cyber-green/10 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
          {type === "terms" ? termsContent : privacyContent}
        </div>
      </div>
    </div>
  )
}
