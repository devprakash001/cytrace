import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Network, CheckCircle, Shield, Router } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function NetworkSecurityTraining() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Network className="w-4 h-4 mr-2" />
              Network Security Training
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Network Security Training
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive network security training covering network protocols, security architectures, threat
              detection, and incident response. Learn to design, implement, and maintain secure network infrastructures.
            </p>
          </div>
        </section>

        {/* Network Layers */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">OSI Model Security Coverage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  layer: "Layer 7",
                  name: "Application",
                  security: ["Application firewalls", "DLP solutions", "Email security", "Web filtering"],
                },
                {
                  layer: "Layer 4",
                  name: "Transport",
                  security: ["SSL/TLS", "Port security", "Load balancing", "Traffic shaping"],
                },
                {
                  layer: "Layer 3",
                  name: "Network",
                  security: ["IPSec", "Routing security", "VLAN segmentation", "Access control"],
                },
                {
                  layer: "Layer 2",
                  name: "Data Link",
                  security: ["MAC filtering", "Port security", "VLAN security", "Switch security"],
                },
              ].map((layer, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <Badge className="bg-cyan-500/20 text-cyan-400 mb-2">{layer.layer}</Badge>
                      <h3 className="text-lg font-bold text-white">{layer.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {layer.security.map((item, idx) => (
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

        {/* Course Modules */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Training Modules</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  module: "Module 1",
                  title: "Network Fundamentals",
                  duration: "10 hours",
                  topics: ["TCP/IP protocol suite", "Network topologies", "Routing and switching", "Network services"],
                },
                {
                  module: "Module 2",
                  title: "Network Threats & Attacks",
                  duration: "12 hours",
                  topics: [
                    "Network reconnaissance",
                    "Man-in-the-middle attacks",
                    "DDoS and DoS attacks",
                    "Network sniffing",
                  ],
                },
                {
                  module: "Module 3",
                  title: "Firewall & IDS/IPS",
                  duration: "14 hours",
                  topics: [
                    "Firewall technologies",
                    "Intrusion detection systems",
                    "Intrusion prevention systems",
                    "Rule configuration",
                  ],
                },
                {
                  module: "Module 4",
                  title: "VPN & Encryption",
                  duration: "10 hours",
                  topics: ["VPN technologies", "IPSec implementation", "SSL/TLS protocols", "Cryptographic protocols"],
                },
                {
                  module: "Module 5",
                  title: "Wireless Security",
                  duration: "8 hours",
                  topics: ["WiFi security protocols", "Wireless attacks", "Enterprise wireless", "Bluetooth security"],
                },
                {
                  module: "Module 6",
                  title: "Network Monitoring",
                  duration: "10 hours",
                  topics: ["Network monitoring tools", "Log analysis", "Incident response", "Forensic analysis"],
                },
              ].map((module, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{module.title}</h3>
                      <Badge className="bg-cyan-500/20 text-cyan-400">{module.duration}</Badge>
                    </div>
                    <p className="text-gray-400 mb-4">{module.module}</p>
                    <ul className="space-y-2">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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

        {/* Lab Environment */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Hands-on Lab Environment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Router className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Network Equipment</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Cisco and Juniper routers
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Managed switches and VLANs
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Firewall appliances
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Wireless access points
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Virtual network environments
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Security Tools</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Wireshark and tcpdump
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Nmap and Nessus
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Snort and Suricata
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      pfSense and iptables
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      SIEM platforms
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certification Preparation */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Certification Preparation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { cert: "CCNA Security", vendor: "Cisco", level: "Associate" },
                { cert: "CCNP Security", vendor: "Cisco", level: "Professional" },
                { cert: "Network+", vendor: "CompTIA", level: "Foundation" },
                { cert: "Security+", vendor: "CompTIA", level: "Foundation" },
                { cert: "GCIH", vendor: "GIAC", level: "Intermediate" },
                { cert: "GMON", vendor: "GIAC", level: "Advanced" },
                { cert: "JNCIA-SEC", vendor: "Juniper", level: "Associate" },
                { cert: "PCNSE", vendor: "Palo Alto", level: "Expert" },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-4">
                    <h3 className="text-white font-bold mb-2">{cert.cert}</h3>
                    <p className="text-gray-400 text-sm mb-2">{cert.vendor}</p>
                    <Badge
                      className={`${
                        cert.level === "Expert"
                          ? "bg-red-500/20 text-red-400"
                          : cert.level === "Advanced"
                            ? "bg-orange-500/20 text-orange-400"
                            : cert.level === "Professional"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                      } text-xs`}
                    >
                      {cert.level}
                    </Badge>
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
              Secure Your Network Infrastructure
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Master network security fundamentals and advanced techniques to protect organizational networks.
            </p>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4 glow-button">
              Begin Training
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
