import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Search, CheckCircle, HardDrive, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function DigitalForensics() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/50">
              <Search className="w-4 h-4 mr-2" />
              Digital Forensics Services
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Digital Forensics & Investigation
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Professional digital forensics services for incident response, legal investigations, and cybercrime
              analysis. Our certified forensic experts use advanced techniques to recover, analyze, and present digital
              evidence while maintaining legal admissibility.
            </p>
          </div>
        </section>

        {/* Forensics Services */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Forensics Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  service: "Incident Response Forensics",
                  icon: "🚨",
                  description: "Rapid forensic analysis during security incidents",
                  capabilities: [
                    "Live system analysis",
                    "Memory acquisition",
                    "Network traffic capture",
                    "Malware analysis",
                    "Timeline reconstruction",
                  ],
                },
                {
                  service: "Computer Forensics",
                  icon: "💻",
                  description: "Comprehensive analysis of computer systems and storage",
                  capabilities: [
                    "Hard drive imaging",
                    "File system analysis",
                    "Registry examination",
                    "Deleted file recovery",
                    "Encryption breaking",
                  ],
                },
                {
                  service: "Mobile Device Forensics",
                  icon: "📱",
                  description: "Extraction and analysis of mobile device data",
                  capabilities: [
                    "iOS/Android extraction",
                    "App data recovery",
                    "Communication analysis",
                    "Location tracking",
                    "Cloud data acquisition",
                  ],
                },
                {
                  service: "Network Forensics",
                  icon: "🌐",
                  description: "Investigation of network-based attacks and intrusions",
                  capabilities: [
                    "Packet capture analysis",
                    "Log file examination",
                    "Intrusion reconstruction",
                    "Email forensics",
                    "Web activity analysis",
                  ],
                },
                {
                  service: "Cloud Forensics",
                  icon: "☁️",
                  description: "Investigation of cloud-based incidents and data",
                  capabilities: [
                    "Cloud log analysis",
                    "Virtual machine forensics",
                    "Container investigation",
                    "API activity tracking",
                    "Multi-tenant analysis",
                  ],
                },
                {
                  service: "Malware Analysis",
                  icon: "🦠",
                  description: "Detailed analysis of malicious software and threats",
                  capabilities: [
                    "Static analysis",
                    "Dynamic analysis",
                    "Reverse engineering",
                    "IOC extraction",
                    "Attribution analysis",
                  ],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.service}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {service.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investigation Process */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Investigation Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Evidence Identification",
                      desc: "Locate and identify potential digital evidence sources",
                    },
                    {
                      step: "2",
                      title: "Evidence Preservation",
                      desc: "Create forensic images and maintain chain of custody",
                    },
                    {
                      step: "3",
                      title: "Data Acquisition",
                      desc: "Extract data using forensically sound methods",
                    },
                    {
                      step: "4",
                      title: "Analysis & Examination",
                      desc: "Analyze evidence using specialized forensic tools",
                    },
                    {
                      step: "5",
                      title: "Findings Documentation",
                      desc: "Document all findings with detailed reports",
                    },
                    {
                      step: "6",
                      title: "Expert Testimony",
                      desc: "Provide expert witness testimony if required",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
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
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Legal Standards</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Chain of custody maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Legal admissibility standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Expert witness qualification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">International compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Privacy protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forensic Tools */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Professional Forensic Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <HardDrive className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Enterprise Tools</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      EnCase Forensic Suite
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      FTK (Forensic Toolkit)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      X-Ways Forensics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Cellebrite UFED
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Oxygen Forensic Suite
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Smartphone className="w-8 h-8 text-pink-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Specialized Tools</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                      Volatility Framework
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                      Autopsy Digital Forensics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                      SIFT Workstation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                      Wireshark Network Analyzer
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                      YARA Pattern Matching
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Common Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  useCase: "Data Breach Investigation",
                  description: "Investigate security incidents and data breaches",
                  scenarios: ["Unauthorized access", "Data exfiltration", "Insider threats", "System compromise"],
                },
                {
                  useCase: "Legal Litigation Support",
                  description: "Provide digital evidence for legal proceedings",
                  scenarios: [
                    "Employment disputes",
                    "Intellectual property theft",
                    "Contract violations",
                    "Fraud cases",
                  ],
                },
                {
                  useCase: "Regulatory Compliance",
                  description: "Support compliance investigations and audits",
                  scenarios: ["GDPR violations", "HIPAA breaches", "Financial fraud", "Regulatory reporting"],
                },
                {
                  useCase: "Criminal Investigation",
                  description: "Assist law enforcement with cybercrime cases",
                  scenarios: ["Cybercrime analysis", "Digital evidence recovery", "Expert testimony", "Case support"],
                },
              ].map((useCase, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3">{useCase.useCase}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{useCase.description}</p>
                    <ul className="space-y-1">
                      {useCase.scenarios.map((scenario, idx) => (
                        <li key={idx} className="text-gray-300 text-xs">
                          • {scenario}
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Professional Digital Investigation
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get expert digital forensics support for incident response, legal cases, and cybercrime investigations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-lg px-8 py-4">
                Emergency Response
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-4"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
