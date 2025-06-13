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
