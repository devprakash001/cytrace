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
