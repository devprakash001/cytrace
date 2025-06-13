import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function PhishingRansomware() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-red-500/20 text-red-400 border-red-500/50">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Phishing & Ransomware Protection
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Phishing & Ransomware Simulations
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Protect your organization from the most common cyber threats with our comprehensive phishing and
              ransomware simulation services. Test your employees' security awareness and strengthen your defenses
              against social engineering attacks.
            </p>
          </div>
        </section>

        {/* Threat Statistics */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Threat Landscape Statistics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  stat: "91%",
                  desc: "of cyberattacks start with phishing emails",
                  color: "text-red-400",
                },
                {
                  stat: "37%",
                  desc: "of organizations hit by ransomware in 2023",
                  color: "text-orange-400",
                },
                {
                  stat: "$4.45M",
                  desc: "average cost of a data breach",
                  color: "text-yellow-400",
                },
                {
                  stat: "23 seconds",
                  desc: "frequency of ransomware attacks",
                  color: "text-red-400",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-red-500/20 hover:border-red-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className={`text-3xl font-bold ${item.color} mb-4`}>{item.stat}</div>
                    <p className="text-gray-400">{item.desc}</p>
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
              Strengthen Your Human Firewall
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Test and improve your organization's resilience against phishing and ransomware attacks.
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
