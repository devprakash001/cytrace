import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function APIPenetrationTesting() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Code className="w-4 h-4 mr-2" />
              API Penetration Testing
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              API Penetration Testing
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A cybersecurity technique known as API penetration testing, or API pentesting, is used to identify and
              mitigate vulnerabilities in an application programming interface (API). It's like a "pick that lock"
              attempt to expose any security weaknesses that could be exploited by malicious actors.
            </p>
          </div>
        </section>

        {/* API Types */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">API Types We Test</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "REST APIs",
                  description: "RESTful web services and endpoints",
                  icon: "🔗",
                },
                {
                  title: "GraphQL APIs",
                  description: "GraphQL query language interfaces",
                  icon: "📊",
                },
                {
                  title: "SOAP APIs",
                  description: "Simple Object Access Protocol services",
                  icon: "🧼",
                },
                {
                  title: "WebSocket APIs",
                  description: "Real-time communication protocols",
                  icon: "⚡",
                },
              ].map((api, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{api.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{api.title}</h3>
                    <p className="text-gray-400">{api.description}</p>
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
              Secure Your APIs Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Protect your APIs from the OWASP Top 10 vulnerabilities and beyond with our comprehensive testing.
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
