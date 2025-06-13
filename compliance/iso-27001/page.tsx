import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, CheckCircle, Award, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ISO27001() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/50">
              <Award className="w-4 h-4 mr-2" />
              ISO/IEC 27001
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              ISO/IEC 27001:2022 Compliance
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              ISO 27001:2022 is the updated international standard for information security management systems (ISMS).
              The main changes are in Annex A, where the controls have been restructured, updated, and extended. The
              standard also introduces a simplified structure with four key areas: organizational, people, physical, and
              technological.
            </p>
          </div>
        </section>

        {/* Key Changes in 2022 */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Key Changes in ISO 27001:2022</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Settings className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Annex A Updates</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    The controls in Annex A have been restructured from 14 to 4 categories with updated and new
                    controls.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      93 controls (previously 114)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      11 new controls added
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      58 controls merged or modified
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      24 controls renamed
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">New Control Categories</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Controls are now organized into four simplified categories for better understanding and
                    implementation.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Organizational Controls (37)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      People Controls (8)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Physical Controls (14)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Technological Controls (34)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Control Categories */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">ISO 27001:2022 Control Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Organizational",
                  count: "37 Controls",
                  color: "text-purple-400",
                  bgColor: "bg-purple-500/20",
                  borderColor: "border-purple-500/50",
                  examples: [
                    "Information Security Policies",
                    "Risk Management",
                    "Supplier Relationships",
                    "Incident Management",
                    "Business Continuity",
                  ],
                },
                {
                  title: "People",
                  count: "8 Controls",
                  color: "text-green-400",
                  bgColor: "bg-green-500/20",
                  borderColor: "border-green-500/50",
                  examples: [
                    "Screening",
                    "Terms of Employment",
                    "Disciplinary Process",
                    "Remote Working",
                    "Information Security Awareness",
                  ],
                },
                {
                  title: "Physical",
                  count: "14 Controls",
                  color: "text-orange-400",
                  bgColor: "bg-orange-500/20",
                  borderColor: "border-orange-500/50",
                  examples: [
                    "Physical Security Perimeters",
                    "Physical Entry",
                    "Equipment",
                    "Secure Disposal",
                    "Clear Desk Policy",
                  ],
                },
                {
                  title: "Technological",
                  count: "34 Controls",
                  color: "text-cyan-400",
                  bgColor: "bg-cyan-500/20",
                  borderColor: "border-cyan-500/50",
                  examples: [
                    "Access Control Management",
                    "Cryptography",
                    "System Security",
                    "Network Security",
                    "Application Security",
                  ],
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900/50 ${category.borderColor} hover:${category.borderColor} transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className={`text-xl font-bold ${category.color} mb-2`}>{category.title}</h3>
                      <Badge className={`${category.bgColor} ${category.color}`}>{category.count}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">
                          • {example}
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
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">ISO 27001 Implementation Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Gap Analysis & Planning",
                      desc: "Assess current state and develop implementation roadmap",
                    },
                    {
                      step: "2",
                      title: "ISMS Design & Documentation",
                      desc: "Develop policies, procedures, and risk management framework",
                    },
                    {
                      step: "3",
                      title: "Risk Assessment & Treatment",
                      desc: "Identify risks and implement appropriate controls",
                    },
                    {
                      step: "4",
                      title: "Implementation & Training",
                      desc: "Deploy controls and train staff on new procedures",
                    },
                    {
                      step: "5",
                      title: "Internal Audit & Review",
                      desc: "Conduct internal audits and management reviews",
                    },
                    {
                      step: "6",
                      title: "Certification Audit",
                      desc: "External certification audit by accredited body",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
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
                <h3 className="text-white font-bold text-xl mb-6">Implementation Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Enhanced Security Posture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Regulatory Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Customer Trust & Confidence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Competitive Advantage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Risk Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Business Continuity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our ISO 27001 Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Gap Analysis",
                  description: "Comprehensive assessment of current security posture against ISO 27001 requirements",
                  features: [
                    "Current State Assessment",
                    "Gap Identification",
                    "Remediation Roadmap",
                    "Cost-Benefit Analysis",
                  ],
                },
                {
                  title: "ISMS Implementation",
                  description: "Full implementation of Information Security Management System",
                  features: ["Policy Development", "Procedure Creation", "Control Implementation", "Documentation"],
                },
                {
                  title: "Risk Management",
                  description: "Comprehensive risk assessment and treatment planning",
                  features: ["Risk Identification", "Risk Analysis", "Treatment Plans", "Monitoring Procedures"],
                },
                {
                  title: "Internal Auditing",
                  description: "Internal audit services to ensure ongoing compliance",
                  features: ["Audit Planning", "Audit Execution", "Finding Reports", "Corrective Actions"],
                },
                {
                  title: "Certification Support",
                  description: "Support throughout the certification process",
                  features: [
                    "Pre-audit Assessment",
                    "Certification Body Liaison",
                    "Audit Support",
                    "Continuous Improvement",
                  ],
                },
                {
                  title: "Training & Awareness",
                  description: "Comprehensive training programs for your team",
                  features: [
                    "Management Training",
                    "Staff Awareness",
                    "Internal Auditor Training",
                    "Ongoing Education",
                  ],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Achieve ISO 27001 Certification
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Demonstrate your commitment to information security with ISO 27001:2022 certification.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
