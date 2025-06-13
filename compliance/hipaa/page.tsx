import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, CheckCircle, Heart, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function HIPAA() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/50">
              <Heart className="w-4 h-4 mr-2" />
              HIPAA Compliance
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              HIPAA Compliance Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              HIPAA compliance refers to the process of ensuring that individuals and organizations adhere to the Health
              Insurance Portability and Accountability Act (HIPAA). This involves implementing and maintaining physical,
              technical, and administrative safeguards to protect protected health information (PHI), which is any
              information that could identify an individual. HIPAA compliance is crucial for organizations that create,
              receive, maintain, or transmit PHI, including healthcare providers, health plans, and business associates.
            </p>
          </div>
        </section>

        {/* HIPAA Rules */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">HIPAA Rules & Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Privacy Rule</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Establishes national standards for the protection of PHI and gives patients rights over their health
                    information.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Patient Rights & Access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Minimum Necessary Standard
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Uses & Disclosures
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Notice of Privacy Practices
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Lock className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Security Rule</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Sets standards for protecting electronic PHI (ePHI) through administrative, physical, and technical
                    safeguards.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Administrative Safeguards
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Physical Safeguards
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Technical Safeguards
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Organizational Requirements
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* HIPAA Safeguards */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">HIPAA Security Safeguards</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Administrative Safeguards",
                  description: "Policies and procedures to manage security measures",
                  icon: Shield,
                  requirements: [
                    "Security Officer Assignment",
                    "Workforce Training",
                    "Access Management",
                    "Security Incident Procedures",
                    "Contingency Plan",
                    "Security Evaluations",
                  ],
                },
                {
                  title: "Physical Safeguards",
                  description: "Physical measures to protect systems and equipment",
                  icon: Lock,
                  requirements: [
                    "Facility Access Controls",
                    "Workstation Use",
                    "Device & Media Controls",
                    "Equipment Disposal",
                    "Physical Security",
                    "Environmental Controls",
                  ],
                },
                {
                  title: "Technical Safeguards",
                  description: "Technology controls to protect ePHI",
                  icon: CheckCircle,
                  requirements: [
                    "Access Control",
                    "Audit Controls",
                    "Integrity",
                    "Person Authentication",
                    "Transmission Security",
                    "Encryption Standards",
                  ],
                },
              ].map((safeguard, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <safeguard.icon className="w-8 h-8 text-green-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{safeguard.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6">{safeguard.description}</p>
                    <ul className="space-y-2">
                      {safeguard.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our HIPAA Services */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our HIPAA Compliance Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Risk Assessment",
                  description: "Comprehensive evaluation of your current HIPAA compliance status",
                  features: ["Security Risk Analysis", "Vulnerability Assessment", "Gap Analysis", "Compliance Audit"],
                },
                {
                  title: "Policy Development",
                  description: "Creation of HIPAA-compliant policies and procedures",
                  features: ["Privacy Policies", "Security Procedures", "Incident Response", "Employee Training"],
                },
                {
                  title: "Technical Implementation",
                  description: "Implementation of technical safeguards and security controls",
                  features: ["Access Controls", "Encryption Solutions", "Audit Logging", "Backup Systems"],
                },
                {
                  title: "Staff Training",
                  description: "Comprehensive HIPAA training for your workforce",
                  features: ["Privacy Training", "Security Awareness", "Incident Reporting", "Ongoing Education"],
                },
                {
                  title: "Business Associate Agreements",
                  description: "Management of business associate relationships and contracts",
                  features: ["BAA Development", "Vendor Assessment", "Contract Review", "Compliance Monitoring"],
                },
                {
                  title: "Ongoing Monitoring",
                  description: "Continuous monitoring and maintenance of HIPAA compliance",
                  features: ["Regular Audits", "Security Monitoring", "Compliance Updates", "Incident Management"],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Penalties & Consequences */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">HIPAA Violation Penalties</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      tier: "Tier 1",
                      desc: "Unknowing violation",
                      penalty: "$100 - $50,000 per violation",
                    },
                    {
                      tier: "Tier 2",
                      desc: "Reasonable cause",
                      penalty: "$1,000 - $50,000 per violation",
                    },
                    {
                      tier: "Tier 3",
                      desc: "Willful neglect (corrected)",
                      penalty: "$10,000 - $50,000 per violation",
                    },
                    {
                      tier: "Tier 4",
                      desc: "Willful neglect (not corrected)",
                      penalty: "$50,000+ per violation",
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-gray-900/50 rounded-lg border border-red-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold">{item.tier}</h3>
                        <Badge className="bg-red-500/20 text-red-400">{item.penalty}</Badge>
                      </div>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-green-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Why Choose Our HIPAA Services</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Healthcare Industry Expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Comprehensive Compliance Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Ongoing Support & Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Risk Mitigation Strategies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Cost-Effective Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Achieve HIPAA Compliance Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Protect patient data and avoid costly penalties with our comprehensive HIPAA compliance services.
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
