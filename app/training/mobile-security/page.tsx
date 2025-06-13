import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Smartphone, CheckCircle, Shield, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MobileSecurityTraining() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/50">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile Application Security Training
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mobile Application Security Training
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Master mobile application security testing and secure development practices for iOS and Android platforms.
              Learn to identify vulnerabilities, implement security controls, and protect mobile applications from
              emerging threats.
            </p>
          </div>
        </section>

        {/* Course Modules */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Course Modules</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  module: "Module 1",
                  title: "Mobile Security Fundamentals",
                  duration: "8 hours",
                  topics: [
                    "Mobile threat landscape",
                    "Platform security models",
                    "OWASP Mobile Top 10",
                    "Security frameworks",
                  ],
                },
                {
                  module: "Module 2",
                  title: "Android Security Testing",
                  duration: "12 hours",
                  topics: [
                    "APK analysis and reverse engineering",
                    "Android manifest security",
                    "Intent and component security",
                    "Data storage security",
                  ],
                },
                {
                  module: "Module 3",
                  title: "iOS Security Testing",
                  duration: "12 hours",
                  topics: [
                    "IPA analysis and binary inspection",
                    "Keychain and data protection",
                    "URL schemes and deep links",
                    "Jailbreak detection bypass",
                  ],
                },
                {
                  module: "Module 4",
                  title: "Dynamic Analysis",
                  duration: "10 hours",
                  topics: [
                    "Runtime manipulation",
                    "Network traffic analysis",
                    "API security testing",
                    "Instrumentation frameworks",
                  ],
                },
                {
                  module: "Module 5",
                  title: "Secure Development",
                  duration: "8 hours",
                  topics: [
                    "Secure coding practices",
                    "Encryption implementation",
                    "Authentication mechanisms",
                    "Code obfuscation",
                  ],
                },
                {
                  module: "Module 6",
                  title: "Advanced Topics",
                  duration: "10 hours",
                  topics: [
                    "IoT and embedded security",
                    "Mobile malware analysis",
                    "Advanced evasion techniques",
                    "Research methodologies",
                  ],
                },
              ].map((module, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{module.title}</h3>
                      <Badge className="bg-blue-500/20 text-blue-400">{module.duration}</Badge>
                    </div>
                    <p className="text-gray-400 mb-4">{module.module}</p>
                    <ul className="space-y-2">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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

        {/* Tools & Technologies */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Tools & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Testing Tools</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      MobSF (Mobile Security Framework)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Frida for dynamic instrumentation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Burp Suite Mobile Assistant
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      QARK (Quick Android Review Kit)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Objection for runtime manipulation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Code className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Development Tools</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Android Studio and Xcode
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      APKTool and class-dump
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Jadx and Hopper disassembler
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Genymotion and iOS Simulator
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Charles Proxy and OWASP ZAP
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certification Path */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Certification Path</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Foundation Assessment",
                      desc: "Evaluate current mobile security knowledge",
                    },
                    {
                      step: "2",
                      title: "Hands-on Training",
                      desc: "60 hours of practical mobile security training",
                    },
                    {
                      step: "3",
                      title: "Practical Exam",
                      desc: "Real-world mobile app security assessment",
                    },
                    {
                      step: "4",
                      title: "Certification",
                      desc: "Certified Mobile Application Security Professional",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
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
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Course Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Industry-recognized certification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Hands-on lab exercises</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Real-world case studies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Expert instructor support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Career advancement opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Master Mobile Security
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Become an expert in mobile application security and protect the mobile ecosystem.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4 glow-button">
              Enroll Now
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
