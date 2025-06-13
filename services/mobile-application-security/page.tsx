import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Smartphone, CheckCircle, Shield, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MobileApplicationSecurity() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile Application Security
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mobile Application Security Assessment
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A mobile application security assessment is a process that evaluates the security of mobile apps to
              identify and address vulnerabilities, potential threats, and weaknesses that could be exploited. It
              ensures the app is robust and resistant to security risks like data breaches and code manipulation.
            </p>
          </div>
        </section>

        {/* Platform Coverage */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Platform Coverage</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Android Applications</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      APK Analysis & Reverse Engineering
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Android Manifest Security Review
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Intent & Broadcast Receiver Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Data Storage Security Assessment
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Runtime Application Self-Protection
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">iOS</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">iOS Applications</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      IPA Analysis & Binary Inspection
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Keychain & Data Protection Review
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      URL Scheme & Deep Link Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Jailbreak Detection Bypass
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Certificate Pinning Assessment
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Security Areas */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Security Assessment Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "Authentication & Session Management",
                  items: [
                    "Biometric Authentication",
                    "Multi-factor Authentication",
                    "Session Token Security",
                    "Password Policy Enforcement",
                  ],
                },
                {
                  icon: Shield,
                  title: "Data Protection",
                  items: [
                    "Encryption at Rest",
                    "Encryption in Transit",
                    "Sensitive Data Exposure",
                    "Data Leakage Prevention",
                  ],
                },
                {
                  icon: Smartphone,
                  title: "Platform Security",
                  items: [
                    "Root/Jailbreak Detection",
                    "Anti-tampering Mechanisms",
                    "Code Obfuscation",
                    "Runtime Protection",
                  ],
                },
              ].map((area, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <area.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{area.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {area.items.map((item, idx) => (
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
              Protect Your Mobile Applications
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Ensure your mobile applications are secure against modern threats with our comprehensive security
              assessment.
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
