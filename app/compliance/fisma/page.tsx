import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Flag, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function FISMA() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/50">
              <Flag className="w-4 h-4 mr-2" />
              FISMA Compliance
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              FISMA Compliance Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The Federal Information Security Management Act (FISMA) is a United States federal law that defines a
              comprehensive framework to protect government information, operations, and assets against natural or
              man-made threats.
            </p>
          </div>
        </section>

        {/* FISMA Framework */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">FISMA Security Framework</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Risk Management Framework (RMF)",
                  description: "Six-step process for managing security risks",
                  steps: ["Categorize", "Select", "Implement", "Assess", "Authorize", "Monitor"],
                },
                {
                  title: "NIST SP 800-53",
                  description: "Security and privacy controls for federal systems",
                  families: [
                    "Access Control",
                    "Audit & Accountability",
                    "Configuration Management",
                    "Contingency Planning",
                  ],
                },
                {
                  title: "FedRAMP Requirements",
                  description: "Cloud security requirements for federal agencies",
                  levels: ["Low Impact", "Moderate Impact", "High Impact", "Tailored for LI-SaaS"],
                },
              ].map((framework, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{framework.title}</h3>
                    <p className="text-gray-400 mb-4">{framework.description}</p>
                    <ul className="space-y-2">
                      {(framework.steps || framework.families || framework.levels).map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              Achieve FISMA Compliance
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Meet federal security requirements and qualify for government contracts with our FISMA expertise.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-red-600 hover:from-blue-600 hover:to-red-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
