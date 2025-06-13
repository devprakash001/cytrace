import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CreditCard } from "lucide-react"
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
              secure environment.
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
