import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Building, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function RBICompliance() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/50">
              <Building className="w-4 h-4 mr-2" />
              RBI Compliance
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              RBI Compliance Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The Reserve Bank of India (RBI) has established comprehensive cybersecurity frameworks and guidelines for
              financial institutions. Our RBI compliance services help banks, NBFCs, and other financial entities meet
              regulatory requirements.
            </p>
          </div>
        </section>

        {/* RBI Guidelines */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Key RBI Cybersecurity Guidelines</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cybersecurity Framework",
                  description: "Comprehensive framework for cybersecurity in banks",
                  year: "2016",
                  features: ["Board Oversight", "Risk Assessment", "Incident Response", "Third Party Risk"],
                },
                {
                  title: "IT Examination Guidelines",
                  description: "Guidelines for IT examination of banks",
                  year: "2018",
                  features: ["IT Governance", "Risk Management", "Security Controls", "Audit Requirements"],
                },
                {
                  title: "Outsourcing Guidelines",
                  description: "Guidelines on managing risks in IT outsourcing",
                  year: "2019",
                  features: ["Vendor Management", "Data Protection", "Service Level Agreements", "Exit Strategies"],
                },
              ].map((guideline, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{guideline.title}</h3>
                      <Badge className="bg-orange-500/20 text-orange-400">{guideline.year}</Badge>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">{guideline.description}</p>
                    <ul className="space-y-2">
                      {guideline.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-orange-400 mr-2 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Ensure RBI Compliance Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Stay compliant with RBI guidelines and protect your financial institution from regulatory risks.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
