import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Settings, CheckCircle, Shield, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function SecureConfiguration() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/50">
              <Settings className="w-4 h-4 mr-2" />
              Secure Configuration Reviews
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Secure Configuration Reviews
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive security configuration assessments to ensure your systems, applications, and infrastructure
              are properly hardened against cyber threats. Our expert reviews identify misconfigurations and provide
              actionable remediation guidance.
            </p>
          </div>
        </section>

        {/* Configuration Areas */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Configuration Review Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  area: "Operating Systems",
                  icon: "🖥️",
                  systems: ["Windows Server", "Linux/Unix", "macOS", "Mobile OS"],
                  focus: ["User account management", "Service configuration", "Registry settings", "Security policies"],
                },
                {
                  area: "Network Infrastructure",
                  icon: "🌐",
                  systems: ["Routers", "Switches", "Firewalls", "Load Balancers"],
                  focus: ["Access control lists", "VLAN configuration", "Protocol settings", "Logging configuration"],
                },
                {
                  area: "Database Systems",
                  icon: "🗄️",
                  systems: ["MySQL", "PostgreSQL", "Oracle", "SQL Server"],
                  focus: ["Authentication settings", "Encryption configuration", "Access permissions", "Audit logging"],
                },
                {
                  area: "Web Servers",
                  icon: "🌍",
                  systems: ["Apache", "Nginx", "IIS", "Tomcat"],
                  focus: ["SSL/TLS configuration", "Security headers", "Access controls", "Error handling"],
                },
                {
                  area: "Cloud Platforms",
                  icon: "☁️",
                  systems: ["AWS", "Azure", "Google Cloud", "Hybrid Cloud"],
                  focus: ["IAM policies", "Security groups", "Storage encryption", "Network configuration"],
                },
                {
                  area: "Applications",
                  icon: "📱",
                  systems: ["Web Apps", "Mobile Apps", "Desktop Apps", "APIs"],
                  focus: ["Authentication mechanisms", "Session management", "Input validation", "Error handling"],
                },
              ].map((area, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{area.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{area.area}</h3>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Supported Systems:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.systems.map((system, idx) => (
                          <Badge key={idx} className="bg-green-500/20 text-green-400 text-xs">
                            {system}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Review Focus:</h4>
                      <ul className="space-y-1">
                        {area.focus.map((item, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            • {item}
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
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Configuration Review Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Asset Discovery & Inventory",
                      desc: "Comprehensive identification of all systems and configurations",
                    },
                    {
                      step: "2",
                      title: "Baseline Assessment",
                      desc: "Compare current configurations against security standards",
                    },
                    {
                      step: "3",
                      title: "Vulnerability Analysis",
                      desc: "Identify security weaknesses and misconfigurations",
                    },
                    {
                      step: "4",
                      title: "Risk Evaluation",
                      desc: "Assess the impact and likelihood of identified issues",
                    },
                    {
                      step: "5",
                      title: "Remediation Planning",
                      desc: "Develop prioritized action plan for improvements",
                    },
                    {
                      step: "6",
                      title: "Implementation Support",
                      desc: "Assist with secure configuration implementation",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
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
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-green-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Review Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Reduced attack surface</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Enhanced security posture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Compliance achievement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Optimized performance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Risk mitigation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Misconfigurations */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Common Security Misconfigurations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "Critical Misconfigurations",
                  severity: "High Risk",
                  color: "text-red-400",
                  bgColor: "bg-red-500/20",
                  issues: [
                    "Default passwords and credentials",
                    "Unnecessary services and ports open",
                    "Weak encryption algorithms",
                    "Excessive user privileges",
                    "Missing security patches",
                  ],
                },
                {
                  category: "Common Oversights",
                  severity: "Medium Risk",
                  color: "text-yellow-400",
                  bgColor: "bg-yellow-500/20",
                  issues: [
                    "Inadequate logging configuration",
                    "Weak password policies",
                    "Insecure protocol usage",
                    "Missing security headers",
                    "Improper error handling",
                  ],
                },
              ].map((cat, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">{cat.category}</h3>
                      <Badge className={`${cat.bgColor} ${cat.color}`}>{cat.severity}</Badge>
                    </div>
                    <ul className="space-y-3">
                      {cat.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className={`w-4 h-4 ${cat.color} mr-2 flex-shrink-0`} />
                          {issue}
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Secure Your Configurations Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Eliminate security misconfigurations and strengthen your defense against cyber threats.
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
