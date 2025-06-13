import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AlertTriangle, CheckCircle, Shield, Mail } from "lucide-react"
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

        {/* Phishing Simulation */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Phishing Simulation Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-red-500/20 hover:border-red-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Mail className="w-8 h-8 text-red-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Email Phishing Tests</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Realistic phishing email campaigns to test employee awareness and response to social engineering
                    attacks.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Customized phishing templates
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Industry-specific scenarios
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Real-time reporting and analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Immediate training for clicked users
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Progress tracking over time
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-orange-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Advanced Simulations</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Sophisticated multi-vector attacks including SMS, voice calls, and physical security testing.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      SMS phishing (Smishing)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Voice phishing (Vishing)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      USB drop tests
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Social media attacks
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Physical security testing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ransomware Simulation */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Ransomware Simulation & Protection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Ransomware Simulation",
                  description: "Safe simulation of ransomware attacks to test detection and response capabilities",
                  features: [
                    "Controlled environment testing",
                    "Multiple attack vectors",
                    "Incident response validation",
                    "Recovery time assessment",
                  ],
                },
                {
                  title: "Backup & Recovery Testing",
                  description: "Comprehensive testing of backup systems and recovery procedures",
                  features: [
                    "Backup integrity verification",
                    "Recovery time objectives",
                    "Data restoration testing",
                    "Business continuity validation",
                  ],
                },
                {
                  title: "Employee Training",
                  description: "Specialized training on ransomware prevention and response",
                  features: [
                    "Ransomware awareness training",
                    "Incident reporting procedures",
                    "Safe computing practices",
                    "Regular refresher sessions",
                  ],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-red-500/20 hover:border-red-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
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

        {/* Implementation Process */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Simulation Implementation Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Planning & Scoping",
                      desc: "Define simulation objectives and target audience",
                    },
                    {
                      step: "2",
                      title: "Template Customization",
                      desc: "Create realistic, industry-specific attack scenarios",
                    },
                    {
                      step: "3",
                      title: "Campaign Launch",
                      desc: "Execute phishing campaigns with controlled timing",
                    },
                    {
                      step: "4",
                      title: "Real-time Monitoring",
                      desc: "Track user interactions and responses",
                    },
                    {
                      step: "5",
                      title: "Immediate Training",
                      desc: "Provide instant education for vulnerable users",
                    },
                    {
                      step: "6",
                      title: "Analysis & Reporting",
                      desc: "Comprehensive analysis with improvement recommendations",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
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
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Simulation Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Improved Security Awareness</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Reduced Click Rates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Enhanced Incident Response</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Compliance Requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Risk Mitigation</span>
                  </div>
                </div>
              </div>
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
