import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Cloud, CheckCircle, Shield, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ComplianceAsAService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Cloud className="w-4 h-4 mr-2" />
              Compliance-as-a-Service
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Compliance-as-a-Service (CaaS)
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Compliance-as-a-Service (CaaS) is a cloud-based solution that helps organizations achieve and maintain
              compliance with various regulatory standards and frameworks. Our comprehensive service provides ongoing
              compliance management, monitoring, and reporting to ensure your organization stays compliant while
              focusing on core business activities.
            </p>
          </div>
        </section>

        {/* Service Benefits */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Compliance-as-a-Service</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cost Effective",
                  description: "Reduce compliance costs by up to 60% compared to in-house solutions",
                  icon: "💰",
                  benefits: [
                    "Lower operational costs",
                    "No infrastructure investment",
                    "Predictable pricing",
                    "Reduced staffing needs",
                  ],
                },
                {
                  title: "Expert Knowledge",
                  description: "Access to compliance experts and latest regulatory updates",
                  icon: "🎓",
                  benefits: ["Certified professionals", "Industry expertise", "Regulatory updates", "Best practices"],
                },
                {
                  title: "Scalable Solution",
                  description: "Scale compliance efforts based on business growth and needs",
                  icon: "📈",
                  benefits: ["Flexible scaling", "Multi-framework support", "Global compliance", "Rapid deployment"],
                },
                {
                  title: "Continuous Monitoring",
                  description: "24/7 monitoring and real-time compliance status updates",
                  icon: "👁️",
                  benefits: [
                    "Real-time monitoring",
                    "Automated alerts",
                    "Continuous assessment",
                    "Proactive remediation",
                  ],
                },
                {
                  title: "Risk Reduction",
                  description: "Minimize compliance risks and potential penalties",
                  icon: "🛡️",
                  benefits: ["Risk mitigation", "Penalty avoidance", "Audit readiness", "Incident response"],
                },
                {
                  title: "Time Savings",
                  description: "Focus on core business while we handle compliance",
                  icon: "⏰",
                  benefits: [
                    "Automated processes",
                    "Streamlined workflows",
                    "Quick implementation",
                    "Efficient reporting",
                  ],
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                      <p className="text-gray-400 mt-2">{benefit.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {benefit.benefits.map((item, idx) => (
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

        {/* Supported Frameworks */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Supported Compliance Frameworks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "GDPR", desc: "General Data Protection Regulation", color: "text-blue-400" },
                { name: "HIPAA", desc: "Health Insurance Portability Act", color: "text-green-400" },
                { name: "PCI-DSS", desc: "Payment Card Industry Standard", color: "text-red-400" },
                { name: "ISO 27001", desc: "Information Security Management", color: "text-purple-400" },
                { name: "SOC 2", desc: "Service Organization Control 2", color: "text-orange-400" },
                { name: "NIST", desc: "National Institute Standards", color: "text-cyan-400" },
                { name: "FISMA", desc: "Federal Information Security", color: "text-yellow-400" },
                { name: "CCPA", desc: "California Consumer Privacy Act", color: "text-pink-400" },
              ].map((framework, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <h3 className={`text-lg font-bold ${framework.color} mb-2`}>{framework.name}</h3>
                    <p className="text-gray-400 text-sm">{framework.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Components */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">CaaS Service Components</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Compliance Management</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Gap assessments and remediation planning
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Policy and procedure development
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Risk assessment and management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Audit preparation and support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Compliance training and awareness
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Settings className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Technology Platform</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Automated compliance monitoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Real-time dashboard and reporting
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Evidence collection and management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Workflow automation and alerts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Integration with existing systems
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">CaaS Implementation Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Assessment & Planning",
                      desc: "Evaluate current compliance posture and define requirements",
                    },
                    {
                      step: "2",
                      title: "Platform Setup",
                      desc: "Configure compliance platform and integrate with systems",
                    },
                    {
                      step: "3",
                      title: "Policy Implementation",
                      desc: "Develop and implement compliance policies and procedures",
                    },
                    {
                      step: "4",
                      title: "Training & Onboarding",
                      desc: "Train staff and establish compliance workflows",
                    },
                    {
                      step: "5",
                      title: "Monitoring & Reporting",
                      desc: "Begin continuous monitoring and regular reporting",
                    },
                    {
                      step: "6",
                      title: "Ongoing Support",
                      desc: "Provide continuous support and compliance updates",
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
                <h3 className="text-white font-bold text-xl mb-6">Service Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Implementation Time</span>
                    <Badge className="bg-green-500/20 text-green-400">2-4 Weeks</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Cost Reduction</span>
                    <Badge className="bg-cyan-500/20 text-cyan-400">Up to 60%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Compliance Coverage</span>
                    <Badge className="bg-blue-500/20 text-blue-400">Multi-Framework</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Support Availability</span>
                    <Badge className="bg-purple-500/20 text-purple-400">24/7</Badge>
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
              Simplify Your Compliance Journey
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let our experts handle your compliance requirements while you focus on growing your business.
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
