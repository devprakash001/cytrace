import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Settings, CheckCircle, Shield, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function HardeningGuidelines() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Settings className="w-4 h-4 mr-2" />
              System Hardening
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hardening Guidelines & Implementation
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive system hardening services to secure your infrastructure against cyber threats. Our expert
              team provides detailed hardening guidelines and implementation support for various operating systems,
              applications, and network devices.
            </p>
          </div>
        </section>

        {/* Hardening Categories */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">System Hardening Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Operating Systems",
                  icon: "🖥️",
                  systems: ["Windows Server", "Linux/Unix", "macOS", "Mobile OS"],
                },
                {
                  title: "Network Devices",
                  icon: "🌐",
                  systems: ["Routers", "Switches", "Firewalls", "Load Balancers"],
                },
                {
                  title: "Applications",
                  icon: "📱",
                  systems: ["Web Servers", "Database Servers", "Email Systems", "Custom Applications"],
                },
                {
                  title: "Cloud Platforms",
                  icon: "☁️",
                  systems: ["AWS", "Azure", "Google Cloud", "Hybrid Cloud"],
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.systems.map((system, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">
                          • {system}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hardening Standards */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Industry Standards & Frameworks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  standard: "CIS Benchmarks",
                  description: "Center for Internet Security configuration guidelines",
                  coverage: ["Operating Systems", "Cloud Platforms", "Network Devices", "Applications"],
                },
                {
                  standard: "NIST Guidelines",
                  description: "National Institute of Standards and Technology frameworks",
                  coverage: ["Cybersecurity Framework", "SP 800-53", "Risk Management", "Security Controls"],
                },
                {
                  standard: "DISA STIGs",
                  description: "Defense Information Systems Agency Security Technical Implementation Guides",
                  coverage: ["Military Standards", "Government Systems", "High Security", "Compliance"],
                },
                {
                  standard: "OWASP Guidelines",
                  description: "Open Web Application Security Project recommendations",
                  coverage: ["Web Applications", "API Security", "Mobile Apps", "DevSecOps"],
                },
                {
                  standard: "Vendor Best Practices",
                  description: "Manufacturer-specific security recommendations",
                  coverage: ["Microsoft", "Oracle", "Cisco", "VMware"],
                },
                {
                  standard: "Industry Compliance",
                  description: "Sector-specific regulatory requirements",
                  coverage: ["PCI-DSS", "HIPAA", "SOX", "GDPR"],
                },
              ].map((standard, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{standard.standard}</h3>
                    <p className="text-gray-400 mb-4">{standard.description}</p>
                    <ul className="space-y-2">
                      {standard.coverage.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hardening Process */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Hardening Implementation Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Asset Discovery & Inventory",
                      desc: "Comprehensive identification of all systems and applications",
                    },
                    {
                      step: "2",
                      title: "Baseline Assessment",
                      desc: "Current security posture evaluation and gap analysis",
                    },
                    {
                      step: "3",
                      title: "Hardening Plan Development",
                      desc: "Customized hardening strategy based on risk assessment",
                    },
                    {
                      step: "4",
                      title: "Implementation & Testing",
                      desc: "Systematic application of hardening measures with validation",
                    },
                    {
                      step: "5",
                      title: "Documentation & Training",
                      desc: "Comprehensive documentation and staff training",
                    },
                    {
                      step: "6",
                      title: "Monitoring & Maintenance",
                      desc: "Ongoing monitoring and periodic hardening updates",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Hardening Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Reduced Attack Surface</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Enhanced Security Posture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Compliance Achievement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Improved Performance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Risk Mitigation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Secure Your Infrastructure Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Implement comprehensive hardening measures to protect your systems from cyber threats.
            </p>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
