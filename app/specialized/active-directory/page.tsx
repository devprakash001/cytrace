import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Users, CheckCircle, Shield, Key } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ActiveDirectorySecurity() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/50">
              <Users className="w-4 h-4 mr-2" />
              Active Directory Security
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Active Directory Security Assessment
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive Active Directory security assessments to identify vulnerabilities, misconfigurations, and
              privilege escalation paths. Protect your organization's identity infrastructure from advanced threats and
              unauthorized access.
            </p>
          </div>
        </section>

        {/* AD Attack Vectors */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Common AD Attack Vectors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  attack: "Kerberoasting",
                  severity: "High",
                  description: "Extracting service account credentials from Kerberos tickets",
                  techniques: [
                    "Service Principal Name enumeration",
                    "TGS ticket extraction",
                    "Offline password cracking",
                    "Service account compromise",
                  ],
                },
                {
                  attack: "ASREPRoasting",
                  severity: "Medium",
                  description: "Targeting accounts with pre-authentication disabled",
                  techniques: [
                    "User enumeration",
                    "AS-REP ticket extraction",
                    "Offline hash cracking",
                    "Account takeover",
                  ],
                },
                {
                  attack: "Golden Ticket",
                  severity: "Critical",
                  description: "Creating forged Kerberos tickets for domain persistence",
                  techniques: [
                    "KRBTGT hash extraction",
                    "Ticket forgery",
                    "Domain persistence",
                    "Privilege escalation",
                  ],
                },
                {
                  attack: "Silver Ticket",
                  severity: "High",
                  description: "Forging service tickets for specific resources",
                  techniques: [
                    "Service account hash extraction",
                    "Service ticket forgery",
                    "Resource access",
                    "Lateral movement",
                  ],
                },
                {
                  attack: "DCSync",
                  severity: "Critical",
                  description: "Replicating password hashes from domain controllers",
                  techniques: [
                    "Replication rights abuse",
                    "Password hash extraction",
                    "Credential harvesting",
                    "Domain compromise",
                  ],
                },
                {
                  attack: "Pass-the-Hash",
                  severity: "High",
                  description: "Using NTLM hashes for authentication without passwords",
                  techniques: ["Hash extraction", "Authentication bypass", "Lateral movement", "Privilege escalation"],
                },
              ].map((attack, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{attack.attack}</h3>
                      <Badge
                        className={`${
                          attack.severity === "Critical"
                            ? "bg-red-500/20 text-red-400"
                            : attack.severity === "High"
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {attack.severity}
                      </Badge>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">{attack.description}</p>
                    <ul className="space-y-2">
                      {attack.techniques.map((technique, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {technique}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment Areas */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Assessment Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Security Configuration</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Domain and forest functional levels
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Group Policy configurations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Trust relationships
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      DNS and LDAP security
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Certificate services security
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Key className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Identity & Access Management</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Privileged account management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Service account security
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Password policies and complexity
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Delegation configurations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Kerberos security settings
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Security Tools */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Assessment Tools & Techniques</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Enumeration Tools",
                  tools: ["BloodHound", "PowerView", "ADRecon", "ldapdomaindump"],
                  purpose: "Map AD structure and relationships",
                },
                {
                  category: "Attack Simulation",
                  tools: ["Impacket", "Rubeus", "Mimikatz", "CrackMapExec"],
                  purpose: "Test attack vectors and vulnerabilities",
                },
                {
                  category: "Privilege Analysis",
                  tools: ["PingCastle", "Purple Knight", "ADACLScanner", "PowerShell Empire"],
                  purpose: "Analyze permissions and privilege paths",
                },
                {
                  category: "Monitoring Tools",
                  tools: ["Windows Event Logs", "Sysmon", "PowerShell Logging", "Advanced Threat Analytics"],
                  purpose: "Detect and monitor AD activities",
                },
                {
                  category: "Hardening Tools",
                  tools: ["Microsoft LAPS", "PAM Solutions", "JEA", "Credential Guard"],
                  purpose: "Implement security controls",
                },
                {
                  category: "Compliance Tools",
                  tools: ["Microsoft Security Compliance Toolkit", "Group Policy Analyzer", "MBSA", "Nessus"],
                  purpose: "Ensure compliance and best practices",
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{category.purpose}</p>
                    <div className="space-y-2">
                      {category.tools.map((tool, idx) => (
                        <Badge key={idx} className="bg-blue-500/20 text-blue-400 mr-2 mb-2 text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Remediation Strategies */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Remediation Strategies</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      strategy: "Privileged Access Management",
                      desc: "Implement PAM solutions to control and monitor privileged accounts",
                    },
                    {
                      strategy: "Tiered Administration Model",
                      desc: "Separate administrative tiers to limit privilege escalation paths",
                    },
                    {
                      strategy: "Service Account Hardening",
                      desc: "Secure service accounts with complex passwords and limited permissions",
                    },
                    {
                      strategy: "Kerberos Security Enhancement",
                      desc: "Configure advanced Kerberos settings and monitoring",
                    },
                    {
                      strategy: "Group Policy Hardening",
                      desc: "Implement security-focused Group Policy configurations",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{item.strategy}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Security Improvements</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Reduced attack surface</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Key className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Enhanced access controls</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Improved identity management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Better threat detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Compliance achievement</span>
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
              Secure Your Active Directory
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Protect your organization's identity infrastructure from advanced threats and unauthorized access.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
