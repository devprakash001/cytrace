"use client"

import { useState } from "react"
import { Shield, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    vapt: false,
    compliance: false,
    specialized: false,
    training: false,
    company: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const vaptServices = [
    { name: "Web Application Security", href: "/services/web-application-security" },
    { name: "Mobile Application Security", href: "/services/mobile-application-security" },
    { name: "Network Infrastructure Testing", href: "/services/network-infrastructure-testing" },
    { name: "API Penetration Testing", href: "/services/api-penetration-testing" },
    { name: "Cloud Security Assessment", href: "/services/cloud-security-assessment" },
    { name: "Wireless Security Assessment", href: "/services/wireless-security-assessment" },
    { name: "Secure Code Review", href: "/services/secure-code-review" },
  ]

  const complianceServices = [
    { name: "GDPR", href: "/compliance/gdpr" },
    { name: "HIPAA", href: "/compliance/hipaa" },
    { name: "ISO/IEC 27001", href: "/compliance/iso-27001" },
    { name: "PCI-DSS", href: "/compliance/pci-dss" },
    { name: "Compliance-as-a-Service", href: "/compliance/caas" },
    { name: "RBI Compliance", href: "/compliance/rbi" },
    { name: "FISMA", href: "/compliance/fisma" },
  ]

  const specializedServices = [
    { name: "Phishing & Ransomware Simulations", href: "/specialized/phishing-ransomware" },
    { name: "Hardening Guidelines", href: "/specialized/hardening-guidelines" },
    { name: "Secure Configuration Reviews", href: "/specialized/secure-configuration" },
    { name: "Active Directory Security", href: "/specialized/active-directory" },
    { name: "Blockchain Security", href: "/specialized/blockchain" },
    { name: "Digital Forensics", href: "/specialized/digital-forensics" },
  ]

  const trainingServices = [
    { name: "Cyber Security", href: "/training/cyber-security" },
    { name: "Mobile Application Security", href: "/training/mobile-security" },
    { name: "Web Application Security", href: "/training/web-security" },
    { name: "Network Security", href: "/training/network-security" },
    { name: "Forensics Investigator", href: "/training/forensics" },
    { name: "Bug Bounty Hunting", href: "/training/bug-bounty" },
  ]

  const companyPages = [
    { name: "About Us", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Our Clients", href: "/company/clients" },
    { name: "Media", href: "/company/media" },
    { name: "News", href: "/company/news" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 backdrop-blur-sm bg-black/80 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 animate-pulse" />
          <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Cytrace
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
              VAPT Services <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-cyan-500/20 text-white min-w-[250px]">
              {vaptServices.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link href={service.href} className="hover:text-cyan-400">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
              Compliance <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-cyan-500/20 text-white min-w-[250px]">
              {complianceServices.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link href={service.href} className="hover:text-cyan-400">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
              Specialized Services <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-cyan-500/20 text-white min-w-[250px]">
              {specializedServices.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link href={service.href} className="hover:text-cyan-400">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
              Training <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-cyan-500/20 text-white min-w-[250px]">
              {trainingServices.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link href={service.href} className="hover:text-cyan-400">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/workshops" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Workshops
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
              Company <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-cyan-500/20 text-white min-w-[200px]">
              {companyPages.map((page) => (
                <DropdownMenuItem key={page.href} asChild>
                  <Link href={page.href} className="hover:text-cyan-400">
                    {page.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 mt-4">
            <div className="border-b border-cyan-500/10 pb-2">
              <button
                onClick={() => toggleSection("vapt")}
                className="flex items-center justify-between w-full text-cyan-400 font-semibold text-sm py-2"
              >
                <span>VAPT SERVICES</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.vapt ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.vapt && (
                <div className="mt-1 space-y-2">
                  {vaptServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors pl-4 text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-cyan-500/10 pb-2">
              <button
                onClick={() => toggleSection("compliance")}
                className="flex items-center justify-between w-full text-cyan-400 font-semibold text-sm py-2"
              >
                <span>COMPLIANCE</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedSections.compliance ? "rotate-180" : ""}`}
                />
              </button>
              {expandedSections.compliance && (
                <div className="mt-1 space-y-2">
                  {complianceServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors pl-4 text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-cyan-500/10 pb-2">
              <button
                onClick={() => toggleSection("specialized")}
                className="flex items-center justify-between w-full text-cyan-400 font-semibold text-sm py-2"
              >
                <span>SPECIALIZED SERVICES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedSections.specialized ? "rotate-180" : ""}`}
                />
              </button>
              {expandedSections.specialized && (
                <div className="mt-1 space-y-2">
                  {specializedServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors pl-4 text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-cyan-500/10 pb-2">
              <button
                onClick={() => toggleSection("training")}
                className="flex items-center justify-between w-full text-cyan-400 font-semibold text-sm py-2"
              >
                <span>TRAINING</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedSections.training ? "rotate-180" : ""}`}
                />
              </button>
              {expandedSections.training && (
                <div className="mt-1 space-y-2">
                  {trainingServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors pl-4 text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/workshops"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm py-2 border-b border-cyan-500/10"
              onClick={() => setIsOpen(false)}
            >
              WORKSHOPS
            </Link>

            <div className="pb-2">
              <button
                onClick={() => toggleSection("company")}
                className="flex items-center justify-between w-full text-cyan-400 font-semibold text-sm py-2"
              >
                <span>COMPANY</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedSections.company ? "rotate-180" : ""}`}
                />
              </button>
              {expandedSections.company && (
                <div className="mt-1 space-y-2">
                  {companyPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors pl-4 text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
