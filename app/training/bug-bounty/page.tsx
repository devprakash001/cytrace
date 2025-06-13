import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Target, CheckCircle, DollarSign, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BugBountyTraining() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
              <Target className="w-4 h-4 mr-2" />
              Bug Bounty Hunting Training
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bug Bounty Hunting Training
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Learn the art of ethical hacking and bug bounty hunting. Master vulnerability research, exploitation
              techniques, and responsible disclosure practices to earn rewards while helping organizations improve their
              security.
            </p>
          </div>
        </section>

        {/* Bug Bounty Platforms */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Major Bug Bounty Platforms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  platform: "HackerOne",
                  description: "Leading bug bounty platform",
                  stats: "400K+ hackers",
                  payout: "$100M+ paid",
                },
                {
                  platform: "Bugcrowd",
                  description: "Crowdsourced cybersecurity platform",
                  stats: "500K+ researchers",
                  payout: "$50M+ paid",
                },
                {
                  platform: "Synack",
                  description: "Invite-only platform",
                  stats: "1500+ researchers",
                  payout: "Premium payouts",
                },
                {
                  platform: "Intigriti",
                  description: "European bug bounty platform",
                  stats: "100K+ hackers",
                  payout: "€10M+ paid",
                },
              ].map((platform, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{platform.platform}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{platform.description}</p>
                    <div className="space-y-2">
                      <Badge className="bg-yellow-500/20 text-yellow-400 block">{platform.stats}</Badge>
                      <Badge className="bg-green-500/20 text-green-400 block">{platform.payout}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vulnerability Types */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">High-Value Vulnerability Types</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  vuln: "Remote Code Execution (RCE)",
                  severity: "Critical",
                  payout: "$5,000 - $50,000+",
                  description: "Execute arbitrary code on target systems",
                },
                {
                  vuln: "SQL Injection",
                  severity: "High",
                  payout: "$1,000 - $15,000",
                  description: "Database manipulation and data extraction",
                },
                {
                  vuln: "Cross-Site Scripting (XSS)",
                  severity: "Medium-High",
                  payout: "$500 - $5,000",
                  description: "Client-side code injection attacks",
                },
                {
                  vuln: "Server-Side Request Forgery (SSRF)",
                  severity: "High",
                  payout: "$1,000 - $10,000",
                  description: "Internal network access and data exposure",
                },
                {
                  vuln: "Insecure Direct Object Reference",
                  severity: "Medium",
                  payout: "$500 - $3,000",
                  description: "Unauthorized access to objects and data",
                },
                {
                  vuln: "Authentication Bypass",
                  severity: "High",
                  payout: "$2,000 - $20,000",
                  description: "Circumvent authentication mechanisms",
                },
              ].map((vuln, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{vuln.vuln}</h3>
                      <Badge
                        className={`${
                          vuln.severity === "Critical"
                            ? "bg-red-500/20 text-red-400"
                            : vuln.severity === "High"
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {vuln.severity}
                      </Badge>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">{vuln.description}</p>
                    <div className="flex items-center text-green-400">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold">{vuln.payout}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training Modules */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Training Modules</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  module: "Module 1",
                  title: "Bug Bounty Fundamentals",
                  duration: "8 hours",
                  topics: [
                    "Bug bounty ecosystem",
                    "Platform registration",
                    "Scope understanding",
                    "Responsible disclosure",
                  ],
                },
                {
                  module: "Module 2",
                  title: "Reconnaissance Techniques",
                  duration: "12 hours",
                  topics: [
                    "Passive reconnaissance",
                    "Subdomain enumeration",
                    "Asset discovery",
                    "Technology fingerprinting",
                  ],
                },
                {
                  module: "Module 3",
                  title: "Web Application Testing",
                  duration: "16 hours",
                  topics: [
                    "OWASP Top 10 exploitation",
                    "Manual testing techniques",
                    "Automated scanning",
                    "Custom payload development",
                  ],
                },
                {
                  module: "Module 4",
                  title: "Mobile App Bug Hunting",
                  duration: "12 hours",
                  topics: [
                    "Mobile app analysis",
                    "API testing",
                    "Deep linking attacks",
                    "Mobile-specific vulnerabilities",
                  ],
                },
                {
                  module: "Module 5",
                  title: "Report Writing & Communication",
                  duration: "6 hours",
                  topics: [
                    "Effective report writing",
                    "Proof of concept creation",
                    "Impact assessment",
                    "Triager communication",
                  ],
                },
                {
                  module: "Module 6",
                  title: "Advanced Techniques",
                  duration: "14 hours",
                  topics: [
                    "Chain exploitation",
                    "Business logic flaws",
                    "Race conditions",
                    "Advanced bypass techniques",
                  ],
                },
              ].map((module, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{module.title}</h3>
                      <Badge className="bg-yellow-500/20 text-yellow-400">{module.duration}</Badge>
                    </div>
                    <p className="text-gray-400 mb-4">{module.module}</p>
                    <ul className="space-y-2">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
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

        {/* Success Metrics */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Success Metrics & Goals</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      metric: "First Valid Bug",
                      target: "Within 30 days",
                      desc: "Submit your first accepted vulnerability report",
                    },
                    {
                      metric: "Monthly Earnings",
                      target: "$1,000 - $5,000",
                      desc: "Consistent monthly bug bounty income",
                    },
                    {
                      metric: "Platform Reputation",
                      target: "Top 10% ranking",
                      desc: "Build reputation on major platforms",
                    },
                    {
                      metric: "Critical Findings",
                      target: "1-2 per quarter",
                      desc: "Discover high-impact vulnerabilities",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.metric}</h3>
                        <p className="text-yellow-400 font-medium mb-1">{item.target}</p>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-yellow-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Course Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Hands-on practical training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Monetize your skills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Real-world target practice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Industry recognition</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Career advancement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Start Your Bug Bounty Journey
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Turn your hacking skills into a profitable career while helping organizations improve their security.
            </p>
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-lg px-8 py-4 glow-button">
              Begin Hunting
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
