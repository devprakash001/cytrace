import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Wifi, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function WirelessSecurityAssessment() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Wifi className="w-4 h-4 mr-2" />
              Wireless Security Assessment
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Wireless Security Assessment
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Identifies potential backdoors via rogue access points, verifies guest access separation from private
              networks and systems, and ensures that wireless networks and data are protected from unauthorized access.
              It assesses corporate, guest, and point-to-point wireless LAN deployments to identify weaknesses in
              architecture, configuration, authentication, and encryption, including detection of rogue access points.
            </p>
          </div>
        </section>

        {/* Assessment Types */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Wireless Assessment Types</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Corporate Wireless",
                  description: "Assessment of enterprise wireless infrastructure",
                  icon: "🏢",
                  features: [
                    "WPA/WPA2/WPA3 Security",
                    "Enterprise Authentication",
                    "Network Segmentation",
                    "Access Point Security",
                  ],
                },
                {
                  title: "Guest Networks",
                  description: "Evaluation of guest wireless access security",
                  icon: "👥",
                  features: ["Guest Isolation", "Captive Portal Security", "Bandwidth Controls", "Access Restrictions"],
                },
                {
                  title: "Point-to-Point Links",
                  description: "Security assessment of wireless bridges and links",
                  icon: "📡",
                  features: ["Link Encryption", "Authentication Protocols", "Signal Security", "Interference Analysis"],
                },
              ].map((type, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{type.icon}</div>
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                      <p className="text-gray-400 mt-2">{type.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
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

        {/* Security Testing Areas */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Security Testing Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Encryption Assessment",
                  description: "Evaluation of wireless encryption protocols and implementation",
                  features: ["WEP/WPA/WPA2/WPA3", "Encryption Strength", "Key Management", "Protocol Vulnerabilities"],
                },
                {
                  title: "Authentication Testing",
                  description: "Assessment of wireless authentication mechanisms",
                  features: ["802.1X Implementation", "RADIUS Security", "Certificate Validation", "EAP Methods"],
                },
                {
                  title: "Access Point Security",
                  description: "Security review of wireless access points and controllers",
                  features: [
                    "Default Credentials",
                    "Firmware Updates",
                    "Management Interface",
                    "Configuration Security",
                  ],
                },
                {
                  title: "Rogue AP Detection",
                  description: "Identification of unauthorized wireless access points",
                  features: ["Rogue AP Scanning", "Evil Twin Detection", "Unauthorized Devices", "Network Monitoring"],
                },
                {
                  title: "Signal Analysis",
                  description: "RF signal security and interference assessment",
                  features: ["Signal Strength", "Coverage Analysis", "Interference Sources", "Jamming Detection"],
                },
                {
                  title: "Client Security",
                  description: "Assessment of wireless client device security",
                  features: ["Client Isolation", "Device Authentication", "Connection Security", "Roaming Security"],
                },
              ].map((area, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                    <p className="text-gray-400 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.features.map((feature, idx) => (
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

        {/* Common Vulnerabilities */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Common Wireless Vulnerabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  { vuln: "Weak Encryption", severity: "High", desc: "Use of outdated or weak encryption protocols" },
                  {
                    vuln: "Default Credentials",
                    severity: "Critical",
                    desc: "Unchanged default passwords on access points",
                  },
                  {
                    vuln: "Rogue Access Points",
                    severity: "High",
                    desc: "Unauthorized wireless access points on network",
                  },
                  {
                    vuln: "WPS Vulnerabilities",
                    severity: "Medium",
                    desc: "WiFi Protected Setup implementation flaws",
                  },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gray-900/50 rounded-lg border border-cyan-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold">{item.vuln}</h3>
                      <Badge
                        className={`${
                          item.severity === "Critical"
                            ? "bg-red-500/20 text-red-400"
                            : item.severity === "High"
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {item.severity}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  {
                    vuln: "Guest Network Isolation",
                    severity: "Medium",
                    desc: "Improper separation of guest and corporate networks",
                  },
                  {
                    vuln: "Management Interface",
                    severity: "High",
                    desc: "Insecure access to wireless management interfaces",
                  },
                  {
                    vuln: "Signal Leakage",
                    severity: "Low",
                    desc: "Wireless signals extending beyond intended coverage",
                  },
                  {
                    vuln: "Client Attacks",
                    severity: "Medium",
                    desc: "Vulnerabilities in wireless client implementations",
                  },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gray-900/50 rounded-lg border border-cyan-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold">{item.vuln}</h3>
                      <Badge
                        className={`${
                          item.severity === "Critical"
                            ? "bg-red-500/20 text-red-400"
                            : item.severity === "High"
                              ? "bg-orange-500/20 text-orange-400"
                              : item.severity === "Medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {item.severity}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Secure Your Wireless Infrastructure
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Protect your wireless networks from unauthorized access and ensure secure connectivity for your
              organization.
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
