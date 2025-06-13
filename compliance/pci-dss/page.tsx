import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CreditCard, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function PCIDSS() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-red-500/20 text-red-400 border-red-500/50">
              <CreditCard className="w-4 h-4 mr-2" />
              PCI-DSS Compliance
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              PCI-DSS Compliance Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The Payment Card Industry Data Security Standard (PCI DSS) is a set of security standards designed to
              ensure that all companies that accept, process, store or transmit credit card information maintain a
              secure environment. PCI DSS compliance is mandatory for all organizations that handle cardholder data.
            </p>
          </div>
        </section>

        {/* PCI DSS Requirements */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">12 PCI DSS Requirements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  req: "1",
                  title: "Install and maintain firewall configuration",
                  desc: "Protect cardholder data with proper firewall controls",
                },
                {
                  req: "2",
                  title: "Do not use vendor-supplied defaults",
                  desc: "Change default passwords and security parameters",
                },
                {
                  req: "3",
                  title: "Protect stored cardholder data",
                  desc: "Encrypt stored cardholder data and limit retention",
                },
                {
                  req: "4",
                  title: "Encrypt transmission of cardholder data",
                  desc: "Protect data during transmission over public networks",
                },
                {
                  req: "5",
                  title: "Protect against malware",
                  desc: "Use and maintain anti-virus software",
                },
                {
                  req: "6",
                  title: "Develop secure systems and applications",
                  desc: "Follow secure development practices",
                },
                {
                  req: "7",
                  title: "Restrict access by business need-to-know",
                  desc: "Limit access to cardholder data by role",
                },
                {
                  req: "8",
                  title: "Identify and authenticate access",
                  desc: "Assign unique ID to each person with access",
                },
                {
                  req: "9",
                  title: "Restrict physical access",
                  desc: "Control physical access to cardholder data",
                },
                {
                  req: "10",
                  title: "Track and monitor network access",
                  desc: "Log and monitor all access to network resources",
                },
                {
                  req: "11",
                  title: "Regularly test security systems",
                  desc: "Conduct regular security testing and monitoring",
                },
                {
                  req: "12",
                  title: "Maintain information security policy",
                  desc: "Establish and maintain security policies",
                },
              ].map((requirement, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-red-500/20 hover:border-red-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                        {requirement.req}
                      </div>
                      <h3 className="text-lg font-bold text-white">{requirement.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{requirement.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Merchant Levels */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">PCI DSS Merchant Levels</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  level: "Level 1",
                  volume: "6M+ transactions/year",
                  requirements: ["Annual on-site assessment", "Quarterly network scan", "Attestation of Compliance"],
                  color: "text-red-400",
                  bgColor: "bg-red-500/20",
                },
                {
                  level: "Level 2",
                  volume: "1M-6M transactions/year",
                  requirements: ["Annual self-assessment", "Quarterly network scan", "Attestation of Compliance"],
                  color: "text-orange-400",
                  bgColor: "bg-orange-500/20",
                },
                {
                  level: "Level 3",
                  volume: "20K-1M e-commerce/year",
                  requirements: ["Annual self-assessment", "Quarterly network scan", "Attestation of Compliance"],
                  color: "text-yellow-400",
                  bgColor: "bg-yellow-500/20",
                },
                {
                  level: "Level 4",
                  volume: "<20K e-commerce/year",
                  requirements: ["Annual self-assessment", "Quarterly network scan (if applicable)"],
                  color: "text-green-400",
                  bgColor: "bg-green-500/20",
                },
              ].map((level, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-red-500/20 hover:border-red-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <Badge className={`${level.bgColor} ${level.color} mb-2`}>{level.level}</Badge>
                      <h3 className="text-white font-bold mb-2">{level.volume}</h3>
                    </div>
                    <ul className="space-y-2">
                      {level.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
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

        {/* Our PCI DSS Services */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our PCI DSS Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Gap Assessment",
                  description: "Comprehensive evaluation of current PCI DSS compliance status",
                  features: ["Current State Analysis", "Gap Identification", "Remediation Planning", "Cost Estimation"],
                },
                {
                  title: "Implementation Support",
                  description: "Full support for implementing PCI DSS requirements",
                  features: ["Security Controls", "Policy Development", "Procedure Creation", "Staff Training"],
                },
                {
                  title: "Self-Assessment Questionnaire",
                  description: "Assistance with SAQ completion and validation",
                  features: ["SAQ Selection", "Question Guidance", "Evidence Collection", "Submission Support"],
                },
                {
                  title: "Network Scanning",
                  description: "Quarterly vulnerability scanning services",
                  features: [
                    "Approved Scanning Vendor",
                    "Quarterly Scans",
                    "Remediation Guidance",
                    "Compliance Reports",
                  ],
                },
                {
                  title: "Penetration Testing",
                  description: "Annual penetration testing for Level 1 merchants",
                  features: ["Network Testing", "Application Testing", "Segmentation Validation", "Detailed Reports"],
                },
                {
                  title: "Ongoing Monitoring",
                  description: "Continuous monitoring and compliance maintenance",
                  features: ["Security Monitoring", "Log Review", "Incident Response", "Compliance Updates"],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-red-500/20 hover:border-red-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
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

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Achieve PCI DSS Compliance
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Protect cardholder data and maintain compliance with our comprehensive PCI DSS services.
            </p>
            <Button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
