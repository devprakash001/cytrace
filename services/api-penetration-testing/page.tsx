import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Code, CheckCircle } from "lucide-react"
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

        {/* Testing Areas */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Key Testing Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Authentication & Authorization",
                  description: "Testing API authentication mechanisms and access controls",
                  features: ["JWT Token Security", "OAuth Implementation", "API Key Management", "Role-based Access"],
                },
                {
                  title: "Input Validation",
                  description: "Assessment of input handling and validation processes",
                  features: ["Injection Attacks", "Parameter Tampering", "Data Type Validation", "Boundary Testing"],
                },
                {
                  title: "Rate Limiting & DoS",
                  description: "Testing API rate limiting and denial of service protection",
                  features: ["Rate Limit Bypass", "Resource Exhaustion", "Throttling Mechanisms", "DDoS Protection"],
                },
                {
                  title: "Data Exposure",
                  description: "Identifying sensitive data exposure vulnerabilities",
                  features: [
                    "Information Disclosure",
                    "Error Message Leakage",
                    "Debug Information",
                    "Metadata Exposure",
                  ],
                },
                {
                  title: "Business Logic",
                  description: "Testing API business logic and workflow security",
                  features: ["Logic Flaws", "Workflow Bypass", "State Management", "Transaction Security"],
                },
                {
                  title: "Transport Security",
                  description: "Assessment of data transmission security",
                  features: [
                    "TLS Implementation",
                    "Certificate Validation",
                    "Encryption Standards",
                    "Man-in-the-Middle",
                  ],
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

        {/* OWASP API Security */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">OWASP API Security Top 10</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  { rank: "1", title: "Broken Object Level Authorization", severity: "Critical" },
                  { rank: "2", title: "Broken User Authentication", severity: "High" },
                  { rank: "3", title: "Excessive Data Exposure", severity: "High" },
                  { rank: "4", title: "Lack of Resources & Rate Limiting", severity: "Medium" },
                  { rank: "5", title: "Broken Function Level Authorization", severity: "High" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-cyan-500/20"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {item.rank}
                      </div>
                      <span className="text-white font-semibold">{item.title}</span>
                    </div>
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
                ))}
              </div>
              <div className="space-y-4">
                {[
                  { rank: "6", title: "Mass Assignment", severity: "Medium" },
                  { rank: "7", title: "Security Misconfiguration", severity: "High" },
                  { rank: "8", title: "Injection", severity: "Critical" },
                  { rank: "9", title: "Improper Assets Management", severity: "Medium" },
                  { rank: "10", title: "Insufficient Logging & Monitoring", severity: "Medium" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-cyan-500/20"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {item.rank}
                      </div>
                      <span className="text-white font-semibold">{item.title}</span>
                    </div>
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
                ))}
              </div>
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
