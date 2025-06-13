import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Code2, CheckCircle, Shield, Bug } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function SecureCodeReview() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Code2 className="w-4 h-4 mr-2" />
              Secure Code Review
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Secure Code Review
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Secure code review is a process of examining software source code to identify and address potential
              security vulnerabilities, ensuring the code is secure and robust against attacks. It involves both manual
              and automated methods to verify that proper security controls are in place and working as intended.
            </p>
          </div>
        </section>

        {/* Review Types */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Code Review Approaches</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Bug className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Automated Code Analysis</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Static Application Security Testing (SAST) tools scan source code to identify common vulnerabilities
                    and security flaws.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Static Code Analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Vulnerability Pattern Detection
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Compliance Checking
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Code Quality Metrics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Continuous Integration
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Manual Code Review</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Expert security professionals manually examine code to identify complex vulnerabilities and business
                    logic flaws.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Business Logic Analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Architecture Review
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Security Control Validation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Context-Aware Analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Custom Vulnerability Detection
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programming Languages */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Supported Programming Languages</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Java", icon: "☕", color: "text-orange-400" },
                { name: "C#/.NET", icon: "🔷", color: "text-blue-400" },
                { name: "Python", icon: "🐍", color: "text-green-400" },
                { name: "JavaScript", icon: "🟨", color: "text-yellow-400" },
                { name: "PHP", icon: "🐘", color: "text-purple-400" },
                { name: "C/C++", icon: "⚡", color: "text-cyan-400" },
                { name: "Ruby", icon: "💎", color: "text-red-400" },
                { name: "Go", icon: "🔵", color: "text-blue-300" },
              ].map((lang, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{lang.icon}</div>
                    <h3 className={`text-lg font-bold ${lang.color}`}>{lang.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Focus Areas */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Security Focus Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Input Validation",
                  description: "Review of input handling and validation mechanisms",
                  vulnerabilities: ["SQL Injection", "XSS Prevention", "Command Injection", "Path Traversal"],
                },
                {
                  title: "Authentication & Authorization",
                  description: "Assessment of access control implementations",
                  vulnerabilities: [
                    "Broken Authentication",
                    "Session Management",
                    "Privilege Escalation",
                    "Access Controls",
                  ],
                },
                {
                  title: "Data Protection",
                  description: "Evaluation of data handling and encryption practices",
                  vulnerabilities: [
                    "Sensitive Data Exposure",
                    "Cryptographic Issues",
                    "Data Leakage",
                    "Storage Security",
                  ],
                },
                {
                  title: "Error Handling",
                  description: "Review of error handling and logging mechanisms",
                  vulnerabilities: [
                    "Information Disclosure",
                    "Exception Handling",
                    "Logging Security",
                    "Debug Information",
                  ],
                },
                {
                  title: "Business Logic",
                  description: "Analysis of application business logic security",
                  vulnerabilities: ["Logic Flaws", "Workflow Bypass", "Race Conditions", "State Management"],
                },
                {
                  title: "Configuration Security",
                  description: "Assessment of security configuration and settings",
                  vulnerabilities: [
                    "Security Misconfiguration",
                    "Default Settings",
                    "Hardening",
                    "Environment Security",
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
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyan-400">Common Issues:</h4>
                      <ul className="space-y-1">
                        {area.vulnerabilities.map((vuln, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-sm">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                            {vuln}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Review Process */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Review Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Code Analysis Setup",
                      desc: "Configure tools and establish review scope and objectives",
                    },
                    {
                      step: "2",
                      title: "Automated Scanning",
                      desc: "Run SAST tools to identify common vulnerabilities",
                    },
                    {
                      step: "3",
                      title: "Manual Review",
                      desc: "Expert analysis of business logic and complex security issues",
                    },
                    {
                      step: "4",
                      title: "Vulnerability Validation",
                      desc: "Confirm and prioritize identified security issues",
                    },
                    {
                      step: "5",
                      title: "Remediation Guidance",
                      desc: "Provide detailed fix recommendations and secure coding practices",
                    },
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
                <h3 className="text-white font-bold text-xl mb-6">Review Deliverables</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Executive Summary</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Detailed Findings</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Risk Assessment</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Remediation Plan</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Secure Coding Guidelines</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
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
              Secure Your Code Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Identify and fix security vulnerabilities in your source code before they become exploitable weaknesses.
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
