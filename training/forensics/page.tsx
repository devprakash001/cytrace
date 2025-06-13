import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Search, CheckCircle, HardDrive, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ForensicsTraining() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/50">
              <Search className="w-4 h-4 mr-2" />
              Digital Forensics Training
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Digital Forensics Investigator Training
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital forensics training covering evidence collection, analysis, and reporting. Learn to
              investigate cybercrimes, recover digital evidence, and present findings in legal proceedings.
            </p>
          </div>
        </section>

        {/* Forensics Disciplines */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Forensics Disciplines</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  discipline: "Computer Forensics",
                  icon: "💻",
                  focus: ["Hard drive analysis", "File system forensics", "Registry analysis", "Timeline analysis"],
                },
                {
                  discipline: "Mobile Forensics",
                  icon: "📱",
                  focus: ["iOS/Android extraction", "App data analysis", "Communication forensics", "Location data"],
                },
                {
                  discipline: "Network Forensics",
                  icon: "🌐",
                  focus: ["Packet analysis", "Network logs", "Intrusion investigation", "Traffic reconstruction"],
                },
                {
                  discipline: "Memory Forensics",
                  icon: "🧠",
                  focus: ["RAM analysis", "Process investigation", "Malware detection", "Volatile data recovery"],
                },
              ].map((discipline, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{discipline.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-4">{discipline.discipline}</h3>
                    <ul className="space-y-2">
                      {discipline.focus.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">
                          • {item}
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
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Digital Investigation Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Identification",
                      desc: "Identify and secure potential digital evidence sources",
                    },
                    {
                      step: "2",
                      title: "Preservation",
                      desc: "Create forensic images and maintain chain of custody",
                    },
                    {
                      step: "3",
                      title: "Collection",
                      desc: "Gather evidence using forensically sound methods",
                    },
                    {
                      step: "4",
                      title: "Examination",
                      desc: "Analyze evidence using specialized forensic tools",
                    },
                    {
                      step: "5",
                      title: "Analysis",
                      desc: "Interpret findings and reconstruct events",
                    },
                    {
                      step: "6",
                      title: "Presentation",
                      desc: "Document findings and present in court if required",
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
                <h3 className="text-white font-bold text-xl mb-6">Legal Considerations</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Chain of custody procedures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Legal admissibility standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Expert witness testimony</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Privacy and ethics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">International law compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forensic Tools */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Forensic Tools & Software</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <HardDrive className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Commercial Tools</h3>
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
                    <FileText className="w-8 h-8 text-pink-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Open Source Tools</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                      Autopsy Digital Forensics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                      Volatility Framework
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                      SIFT Workstation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                      Wireshark and tcpdump
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                      Sleuth Kit and YARA
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Modules */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Training Modules</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  module: "Module 1",
                  title: "Forensics Fundamentals",
                  duration: "12 hours",
                  topics: [
                    "Digital evidence principles",
                    "Legal framework",
                    "Chain of custody",
                    "Forensic methodology",
                  ],
                },
                {
                  module: "Module 2",
                  title: "Computer Forensics",
                  duration: "16 hours",
                  topics: [
                    "Disk imaging techniques",
                    "File system analysis",
                    "Registry forensics",
                    "Deleted file recovery",
                  ],
                },
                {
                  module: "Module 3",
                  title: "Mobile Device Forensics",
                  duration: "14 hours",
                  topics: [
                    "Mobile extraction methods",
                    "iOS and Android analysis",
                    "App data examination",
                    "Communication forensics",
                  ],
                },
                {
                  module: "Module 4",
                  title: "Network Forensics",
                  duration: "12 hours",
                  topics: [
                    "Packet capture analysis",
                    "Network log examination",
                    "Intrusion investigation",
                    "Email forensics",
                  ],
                },
                {
                  module: "Module 5",
                  title: "Memory Forensics",
                  duration: "10 hours",
                  topics: ["Memory acquisition", "Process analysis", "Malware detection", "Rootkit investigation"],
                },
                {
                  module: "Module 6",
                  title: "Report Writing & Testimony",
                  duration: "8 hours",
                  topics: [
                    "Technical report writing",
                    "Expert witness preparation",
                    "Court testimony skills",
                    "Case study analysis",
                  ],
                },
              ].map((module, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{module.title}</h3>
                      <Badge className="bg-purple-500/20 text-purple-400">{module.duration}</Badge>
                    </div>
                    <p className="text-gray-400 mb-4">{module.module}</p>
                    <ul className="space-y-2">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Become a Digital Detective
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Master digital forensics and help solve cybercrimes with scientific investigation techniques.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-lg px-8 py-4 glow-button">
              Start Investigation Training
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
