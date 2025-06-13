import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Network, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function NetworkInfrastructureTesting() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Network className="w-4 h-4 mr-2" />
              Network Infrastructure Testing
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Network Infrastructure Penetration Testing
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A network infrastructure penetration test is a systematic process of examining a network's infrastructure,
              configurations, and security to identify potential issues, ensure compliance with industry standards, and
              optimize performance. It's a comprehensive review that helps IT administrators understand the network's
              health and identify areas for improvement.
            </p>
          </div>
        </section>

        {/* Testing Scope */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Testing Scope & Coverage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "External Network Testing",
                  description: "Assessment of externally facing network infrastructure and services",
                  features: ["Firewall Configuration", "DMZ Security", "Public Services", "DNS Security"],
                },
                {
                  title: "Internal Network Testing",
                  description: "Comprehensive testing of internal network segments and systems",
                  features: ["Network Segmentation", "VLAN Security", "Internal Services", "Lateral Movement"],
                },
                {
                  title: "Network Device Security",
                  description: "Security assessment of network hardware and configurations",
                  features: ["Router Security", "Switch Configuration", "Access Point Security", "Network Appliances"],
                },
                {
                  title: "Protocol Analysis",
                  description: "Deep inspection of network protocols and communications",
                  features: [
                    "Protocol Vulnerabilities",
                    "Traffic Analysis",
                    "Encryption Assessment",
                    "Communication Security",
                  ],
                },
                {
                  title: "Access Control Testing",
                  description: "Evaluation of network access controls and authentication",
                  features: ["NAC Implementation", "802.1X Security", "VPN Security", "Remote Access"],
                },
                {
                  title: "Network Monitoring",
                  description: "Assessment of network monitoring and logging capabilities",
                  features: ["SIEM Integration", "Log Analysis", "Intrusion Detection", "Network Forensics"],
                },
              ].map((scope, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{scope.title}</h3>
                    <p className="text-gray-400 mb-4">{scope.description}</p>
                    <ul className="space-y-2">
                      {scope.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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

        {/* Methodology */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Testing Methodology</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Network Discovery",
                      desc: "Comprehensive network mapping and asset identification",
                    },
                    {
                      step: "2",
                      title: "Vulnerability Assessment",
                      desc: "Automated and manual vulnerability identification",
                    },
                    {
                      step: "3",
                      title: "Exploitation Testing",
                      desc: "Safe exploitation of identified vulnerabilities",
                    },
                    {
                      step: "4",
                      title: "Post-Exploitation",
                      desc: "Assessment of potential impact and lateral movement",
                    },
                    {
                      step: "5",
                      title: "Reporting & Remediation",
                      desc: "Detailed findings with prioritized recommendations",
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
                <h3 className="text-white font-bold text-xl mb-6">Network Security Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Network Segmentation</span>
                    <Badge className="bg-green-500/20 text-green-400">Assessed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Access Controls</span>
                    <Badge className="bg-cyan-500/20 text-cyan-400">Validated</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Encryption Standards</span>
                    <Badge className="bg-blue-500/20 text-blue-400">Verified</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monitoring Coverage</span>
                    <Badge className="bg-purple-500/20 text-purple-400">Complete</Badge>
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
              Secure Your Network Infrastructure
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Identify and address network vulnerabilities before attackers do with our comprehensive penetration
              testing.
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
