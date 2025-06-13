import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Globe, CheckCircle, Shield, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function WebSecurityTraining() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/50">
              <Globe className="w-4 h-4 mr-2" />
              Web Application Security Training
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Web Application Security Training
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive training in web application security testing, secure development practices, and
              vulnerability assessment. Master the OWASP Top 10 and advanced web security concepts to protect web
              applications from cyber threats.
            </p>
          </div>
        </section>

        {/* OWASP Top 10 */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">OWASP Top 10 Coverage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { rank: "A01", vuln: "Broken Access Control", severity: "Critical" },
                { rank: "A02", vuln: "Cryptographic Failures", severity: "High" },
                { rank: "A03", vuln: "Injection", severity: "Critical" },
                { rank: "A04", vuln: "Insecure Design", severity: "High" },
                { rank: "A05", vuln: "Security Misconfiguration", severity: "High" },
                { rank: "A06", vuln: "Vulnerable Components", severity: "High" },
                { rank: "A07", vuln: "Authentication Failures", severity: "High" },
                { rank: "A08", vuln: "Software Integrity Failures", severity: "Medium" },
                { rank: "A09", vuln: "Logging Failures", severity: "Medium" },
                { rank: "A10", vuln: "Server-Side Request Forgery", severity: "Medium" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                      {item.rank}
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-sm">{item.vuln}</h3>
                    <Badge
                      className={`${
                        item.severity === "Critical"
                          ? "bg-red-500/20 text-red-400"
                          : item.severity === "High"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-yellow-500/20 text-yellow-400"
                      } text-xs`}
                    >
                      {item.severity}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Training Modules</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  module: "Module 1",
                  title: "Web Security Fundamentals",
                  duration: "8 hours",
                  topics: [
                    "HTTP/HTTPS protocols",
                    "Web application architecture",
                    "Common attack vectors",
                    "Security testing methodology",
                  ],
                },
                {
                  module: "Module 2",
                  title: "Injection Attacks",
                  duration: "12 hours",
                  topics: [
                    "SQL injection techniques",
                    "NoSQL injection",
                    "Command injection",
                    "LDAP and XPath injection",
                  ],
                },
                {
                  module: "Module 3",
                  title: "Cross-Site Scripting (XSS)",
                  duration: "10 hours",
                  topics: ["Reflected XSS", "Stored XSS", "DOM-based XSS", "XSS prevention techniques"],
                },
                {
                  module: "Module 4",
                  title: "Authentication & Session Management",
                  duration: "10 hours",
                  topics: [
                    "Authentication bypass",
                    "Session fixation",
                    "Session hijacking",
                    "Multi-factor authentication",
                  ],
                },
                {
                  module: "Module 5",
                  title: "Access Control & Authorization",
                  duration: "8 hours",
                  topics: [
                    "Privilege escalation",
                    "Insecure direct object references",
                    "Missing function level access control",
                    "Role-based access control",
                  ],
                },
                {
                  module: "Module 6",
                  title: "Advanced Web Attacks",
                  duration: "12 hours",
                  topics: [
                    "CSRF and SSRF attacks",
                    "XXE vulnerabilities",
                    "Deserialization attacks",
                    "Business logic flaws",
                  ],
                },
              ].map((module, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{module.title}</h3>
                      <Badge className="bg-green-500/20 text-green-400">{module.duration}</Badge>
                    </div>
                    <p className="text-gray-400 mb-4">{module.module}</p>
                    <ul className="space-y-2">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Lab Environment */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Tools & Lab Environment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Security Testing Tools</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Burp Suite Professional
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      OWASP ZAP (Zed Attack Proxy)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Nmap and Nessus
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      SQLMap and Nikto
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Custom exploitation scripts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Code className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Practice Environments</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      DVWA (Damn Vulnerable Web App)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      WebGoat and bWAPP
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Mutillidae and OWASP Juice Shop
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Custom vulnerable applications
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Cloud-based lab environment
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Become a Web Security Expert
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Master web application security and protect organizations from the most common web-based attacks.
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg px-8 py-4 glow-button">
              Start Learning
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
