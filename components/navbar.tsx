"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    vapt: false,
    compliance: false,
    specialized: false,
    training: false,
    company: false,
  })
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down & past navbar height
        setVisible(false)
      } else {
        // Scrolling up
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = (dropdownId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(dropdownId)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // Small delay to allow moving to dropdown content
  }

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
    { name: "ISO 27001", href: "/compliance/iso-27001" },
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

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  }

  const dropdownVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const megaMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  }

  const megaMenuItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  const navbarScrollVariants = {
    hidden: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const categories = [
    { id: "vapt", name: "VAPT Services", items: vaptServices },
    { id: "compliance", name: "Compliance", items: complianceServices },
    { id: "specialized", name: "Specialized Services", items: specializedServices },
    { id: "training", name: "Training", items: trainingServices },
    { id: "company", name: "Company", items: companyPages },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/80 border-b border-cyan-500/20"
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={navbarScrollVariants}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 sm:p-6">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              </motion.div>
              <motion.span
                className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Cytrace
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div className="hidden lg:flex items-center space-x-6" variants={navbarVariants}>
            {categories.slice(0, 4).map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={handleMouseLeave}
                className="relative py-6"
              >
                <motion.button
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {category.name} <ChevronDown className="ml-1 w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/workshops" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Workshops
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
              className="relative py-6"
            >
              <motion.button
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Company <ChevronDown className="ml-1 w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Full-width Mega Menu Dropdowns */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              className="absolute left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-b border-cyan-500/20 shadow-xl"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={megaMenuVariants}
              onMouseEnter={() => handleMouseEnter(activeDropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categories
                    .find((cat) => cat.id === activeDropdown)
                    ?.items.map((item, idx) => (
                      <motion.div key={item.href} variants={megaMenuItemVariants}>
                        <Link
                          href={item.href}
                          className="block text-gray-300 hover:text-cyan-400 transition-colors hover:translate-x-1 duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20 max-h-[80vh] overflow-y-auto"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col space-y-2 mt-4">
                {/* VAPT Services */}
                <motion.div className="border-b border-cyan-500/10 pb-2" variants={mobileItemVariants}>
                  <motion.button
                    onClick={() => toggleSection("vapt")}
                    className="flex items-center justify-between w-full text-cyan-400 font-semibold text-sm py-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>VAPT SERVICES</span>
                    <motion.div animate={{ rotate: expandedSections.vapt ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedSections.vapt && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        className="mt-1 space-y-2 overflow-hidden"
                      >
                        {vaptServices.map((service, idx) => (
                          <motion.div
                            key={service.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              href={service.href}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors pl-4 text-sm py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Compliance */}
                <motion.div className="border-b border-cyan-500/10 pb-2" variants={mobileItemVariants}>
                  <motion.button
                    onClick={() => toggleSection("compliance")}
                    className="flex items-center justify-between w-full text-cyan-400 font-semibold text-sm py-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>COMPLIANCE</span>
                    <motion.div
                      animate={{ rotate: expandedSections.compliance ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedSections.compliance && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        className="mt-1 space-y-2 overflow-hidden"
                      >
                        {complianceServices.map((service, idx) => (
                          <motion.div
                            key={service.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              href={service.href}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors pl-4 text-sm py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Specialized Services */}
                <motion.div className="border-b border-cyan-500/10 pb-2" variants={mobileItemVariants}>
                  <motion.button
                    onClick={() => toggleSection("specialized")}
                    className="flex items-center justify-between w-full text-cyan-400 font-semibold text-sm py-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>SPECIALIZED SERVICES</span>
                    <motion.div
                      animate={{ rotate: expandedSections.specialized ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedSections.specialized && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        className="mt-1 space-y-2 overflow-hidden"
                      >
                        {specializedServices.map((service, idx) => (
                          <motion.div
                            key={service.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              href={service.href}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors pl-4 text-sm py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Training */}
                <motion.div className="border-b border-cyan-500/10 pb-2" variants={mobileItemVariants}>
                  <motion.button
                    onClick={() => toggleSection("training")}
                    className="flex items-center justify-between w-full text-cyan-400 font-semibold text-sm py-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>TRAINING</span>
                    <motion.div
                      animate={{ rotate: expandedSections.training ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedSections.training && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        className="mt-1 space-y-2 overflow-hidden"
                      >
                        {trainingServices.map((service, idx) => (
                          <motion.div
                            key={service.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              href={service.href}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors pl-4 text-sm py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Workshops */}
                <motion.div variants={mobileItemVariants}>
                  <Link
                    href="/workshops"
                    className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm py-2 border-b border-cyan-500/10 block"
                    onClick={() => setIsOpen(false)}
                  >
                    WORKSHOPS
                  </Link>
                </motion.div>

                {/* Company */}
                <motion.div className="pb-2" variants={mobileItemVariants}>
                  <motion.button
                    onClick={() => toggleSection("company")}
                    className="flex items-center justify-between w-full text-cyan-400 font-semibold text-sm py-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>COMPANY</span>
                    <motion.div animate={{ rotate: expandedSections.company ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedSections.company && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        className="mt-1 space-y-2 overflow-hidden"
                      >
                        {companyPages.map((page, idx) => (
                          <motion.div
                            key={page.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              href={page.href}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors pl-4 text-sm py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {page.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from being hidden under the navbar */}
    </>
  )
}