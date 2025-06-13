import Link from "next/link"
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Cytrace
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading cybersecurity solutions provider specializing in penetration testing, compliance, and security
              training.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:contact@cytrace.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  contact@cytrace.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+18005551234" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 (800) 555-1234
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Security Blvd, Suite 101
                  <br />
                  Cyber City, CS 90210
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-application-security"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Web Application Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-application-security"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Mobile Application Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/network-infrastructure-testing"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Network Infrastructure Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/api-penetration-testing"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  API Penetration Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-security-assessment"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Cloud Security Assessment
                </Link>
              </li>
              <li>
                <Link href="/compliance/gdpr" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link href="/compliance/hipaa" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  HIPAA Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/clients" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/company/media" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/company/news" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/training/cyber-security" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com/cytrace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com/cytrace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/company/cytrace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/cytrace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com/cytrace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://github.com/cytrace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Newsletter</h3>
            <form className="space-y-2">
              <p className="text-sm text-gray-400">
                Subscribe to our newsletter for the latest security updates and news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Cytrace. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
