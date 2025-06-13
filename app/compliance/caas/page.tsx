import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Cloud, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ComplianceAsAService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Cloud className="w-4 h-4 mr-2" />
              Compliance-as-a-Service
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Compliance-as-a-Service (CaaS)
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Compliance-as-a-Service (CaaS) is a cloud-based solution that helps organizations achieve and maintain
              compliance with various regulatory standards and frameworks. Our comprehensive service provides ongoing
              compliance management, monitoring, and reporting.
            </p>
          </div>
        </section>

        {/* Service Benefits */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Compliance-as-a-Service</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cost Effective",
                  description: "Reduce compliance costs by up to 60% compared to in-house solutions",
                  icon: "💰",
                  benefits: [
                    "Lower operational costs",
                    "No infrastructure investment",
                    "Predictable pricing",
                    "Reduced staffing needs",
                  ],
                },
                {
                  title: "Expert Knowledge",
                  description: "Access to compliance experts and latest regulatory updates",
                  icon: "🎓",
                  benefits: ["Certified professionals", "Industry expertise", "Regulatory updates", "Best practices"],
                },
                {
                  title: "Scalable Solution",
                  description: "Scale compliance efforts based on business growth and needs",
                  icon: "📈",
                  benefits: ["Flexible scaling", "Multi-framework support", "Global compliance", "Rapid deployment"],
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                      <p className="text-gray-400 mt-2">{benefit.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {benefit.benefits.map((item, idx) => (
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

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Simplify Your Compliance Journey
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let our experts handle your compliance requirements while you focus on growing your business.
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
