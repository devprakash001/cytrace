import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function WebApplicationSecurity() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Globe className="w-4 h-4 mr-2" />
              Web Application Security
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Web Application Security Assessment
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A web application security assessment is a comprehensive evaluation of a web application's security
              posture to identify vulnerabilities and risks. This process involves analysing the application's code,
              configuration, and deployment environment to uncover weaknesses that could be exploited by attackers.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">What We Assess</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Code Analysis",
                  description: "Comprehensive review of application source code to identify security vulnerabilities",
                  features: ["Static Code Analysis", "Dynamic Testing", "Manual Code Review"],
                },
                {
                  title: "Configuration Review",
                  description: "Assessment of server and application configurations for security weaknesses",
                  features: ["Server Configuration", "Database Security", "SSL/TLS Implementation"],
                },
                {
                  title: "Authentication & Authorization",
                  description: "Testing of user authentication mechanisms and access control systems",
                  features: ["Login Security", "Session Management", "Role-based Access"],
                },
                {
                  title: "Input Validation",
                  description: "Testing for injection attacks and input validation vulnerabilities",
                  features: ["SQL Injection", "XSS Prevention", "CSRF Protection"],
                },
                {
                  title: "Data Protection",
                  description: "Assessment of data encryption and protection mechanisms",
                  features: ["Data Encryption", "Secure Storage", "Data Transmission"],
                },
                {
                  title: "Business Logic",
                  description: "Testing of application business logic for security flaws",
                  features: ["Workflow Security", "Process Validation", "Logic Flaws"],
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
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

        {/* Methodology */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Assessment Methodology</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Information Gathering",
                      desc: "Comprehensive reconnaissance and application mapping",
                    },
                    {
                      step: "2",
                      title: "Vulnerability Scanning",
                      desc: "Automated scanning for known vulnerabilities",
                    },
                    { step: "3", title: "Manual Testing", desc: "Expert manual testing for complex vulnerabilities" },
                    { step: "4", title: "Exploitation", desc: "Safe exploitation to validate findings" },
                    { step: "5", title: "Reporting", desc: "Detailed report with remediation recommendations" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Assessment Coverage</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">OWASP Top 10</span>
                    <Badge className="bg-green-500/20 text-green-400">100%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Business Logic</span>
                    <Badge className="bg-cyan-500/20 text-cyan-400">Comprehensive</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Authentication</span>
                    <Badge className="bg-blue-500/20 text-blue-400">Advanced</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Data Protection</span>
                    <Badge className="bg-purple-500/20 text-purple-400">Complete</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Secure Your Web Applications Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Don't leave your web applications vulnerable to attacks. Get a comprehensive security assessment from our
              experts.
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
