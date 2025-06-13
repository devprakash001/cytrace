import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Building, CheckCircle, Shield, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function RBICompliance() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/50">
              <Building className="w-4 h-4 mr-2" />
              RBI Compliance
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              RBI Compliance Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The Reserve Bank of India (RBI) has established comprehensive cybersecurity frameworks and guidelines for
              financial institutions. Our RBI compliance services help banks, NBFCs, and other financial entities meet
              regulatory requirements and maintain robust cybersecurity postures in accordance with RBI guidelines.
            </p>
          </div>
        </section>

        {/* RBI Guidelines */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Key RBI Cybersecurity Guidelines</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cybersecurity Framework",
                  description: "Comprehensive framework for cybersecurity in banks",
                  year: "2016",
                  features: ["Board Oversight", "Risk Assessment", "Incident Response", "Third Party Risk"],
                },
                {
                  title: "IT Examination Guidelines",
                  description: "Guidelines for IT examination of banks",
                  year: "2018",
                  features: ["IT Governance", "Risk Management", "Security Controls", "Audit Requirements"],
                },
                {
                  title: "Outsourcing Guidelines",
                  description: "Guidelines on managing risks in IT outsourcing",
                  year: "2019",
                  features: ["Vendor Management", "Data Protection", "Service Level Agreements", "Exit Strategies"],
                },
                {
                  title: "Digital Payment Security",
                  description: "Security measures for digital payment systems",
                  year: "2020",
                  features: ["Authentication", "Fraud Prevention", "Transaction Monitoring", "Customer Protection"],
                },
                {
                  title: "Cloud Computing Guidelines",
                  description: "Guidelines for adoption of cloud computing",
                  year: "2021",
                  features: ["Cloud Strategy", "Risk Assessment", "Data Localization", "Vendor Due Diligence"],
                },
                {
                  title: "Cyber Resilience Framework",
                  description: "Framework for cyber resilience and recovery",
                  year: "2022",
                  features: ["Business Continuity", "Disaster Recovery", "Crisis Management", "Communication Plans"],
                },
              ].map((guideline, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{guideline.title}</h3>
                      <Badge className="bg-orange-500/20 text-orange-400">{guideline.year}</Badge>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">{guideline.description}</p>
                    <ul className="space-y-2">
                      {guideline.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-orange-400 mr-2 flex-shrink-0" />
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

        {/* Compliance Requirements */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">RBI Compliance Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-orange-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Mandatory Requirements</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Board-approved cybersecurity policy
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Chief Information Security Officer (CISO)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Cyber crisis management plan
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Regular vulnerability assessments
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Incident reporting to RBI
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Customer data protection
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-red-500/20 hover:border-red-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="w-8 h-8 text-red-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Reporting Requirements</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Quarterly cybersecurity reports
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Annual IT audit reports
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Cyber incident notifications
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Penetration testing reports
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Third-party risk assessments
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      Business continuity testing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our RBI Services */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our RBI Compliance Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Gap Assessment",
                  description: "Comprehensive evaluation against RBI guidelines",
                  features: ["Current State Analysis", "Compliance Gaps", "Risk Assessment", "Remediation Plan"],
                },
                {
                  title: "Policy Development",
                  description: "Development of RBI-compliant policies and procedures",
                  features: ["Cybersecurity Policy", "IT Risk Policy", "Incident Response", "Business Continuity"],
                },
                {
                  title: "VAPT Services",
                  description: "Vulnerability assessment and penetration testing",
                  features: ["Network Testing", "Application Testing", "Database Security", "Compliance Reports"],
                },
                {
                  title: "IT Audit Support",
                  description: "Support for RBI IT examination and audits",
                  features: ["Audit Preparation", "Documentation", "Remediation Support", "Follow-up Actions"],
                },
                {
                  title: "Incident Response",
                  description: "24/7 incident response and RBI reporting",
                  features: ["Incident Handling", "Forensic Analysis", "RBI Notifications", "Recovery Support"],
                },
                {
                  title: "Training & Awareness",
                  description: "Cybersecurity training for banking staff",
                  features: ["Staff Training", "Awareness Programs", "Phishing Simulations", "Compliance Updates"],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
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

        {/* Penalties & Consequences */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Non-Compliance Consequences</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      consequence: "Monetary Penalties",
                      desc: "Heavy fines and penalties for non-compliance",
                    },
                    {
                      consequence: "License Restrictions",
                      desc: "Restrictions on banking operations and licenses",
                    },
                    {
                      consequence: "Regulatory Action",
                      desc: "Prompt corrective action by RBI",
                    },
                    {
                      consequence: "Reputational Damage",
                      desc: "Loss of customer trust and market reputation",
                    },
                    {
                      consequence: "Business Impact",
                      desc: "Operational restrictions and business limitations",
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-gray-900/50 rounded-lg border border-red-500/20">
                      <h3 className="text-white font-semibold mb-2">{item.consequence}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-orange-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Why Choose Our RBI Services</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Banking Industry Expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">RBI Guidelines Knowledge</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Proven Track Record</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">End-to-End Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Ongoing Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Ensure RBI Compliance Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Stay compliant with RBI guidelines and protect your financial institution from regulatory risks.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
