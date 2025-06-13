import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Flag, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function FISMA() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/50">
              <Flag className="w-4 h-4 mr-2" />
              FISMA Compliance
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              FISMA Compliance Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The Federal Information Security Management Act (FISMA) is a United States federal law that defines a
              comprehensive framework to protect government information, operations, and assets against natural or
              man-made threats. Our FISMA compliance services help federal agencies and contractors meet stringent
              security requirements.
            </p>
          </div>
        </section>

        {/* FISMA Framework */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">FISMA Security Framework</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Risk Management Framework (RMF)",
                  description: "Six-step process for managing security risks",
                  steps: ["Categorize", "Select", "Implement", "Assess", "Authorize", "Monitor"],
                },
                {
                  title: "NIST SP 800-53",
                  description: "Security and privacy controls for federal systems",
                  families: [
                    "Access Control",
                    "Audit & Accountability",
                    "Configuration Management",
                    "Contingency Planning",
                  ],
                },
                {
                  title: "FedRAMP Requirements",
                  description: "Cloud security requirements for federal agencies",
                  levels: ["Low Impact", "Moderate Impact", "High Impact", "Tailored for LI-SaaS"],
                },
              ].map((framework, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{framework.title}</h3>
                    <p className="text-gray-400 mb-4">{framework.description}</p>
                    <ul className="space-y-2">
                      {(framework.steps || framework.families || framework.levels).map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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

        {/* Security Categories */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">FISMA Security Categories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  level: "Low",
                  impact: "Limited adverse effect",
                  color: "text-green-400",
                  bgColor: "bg-green-500/20",
                  borderColor: "border-green-500/50",
                  requirements: [
                    "Basic security controls",
                    "Annual assessment",
                    "Continuous monitoring",
                    "Incident response plan",
                  ],
                },
                {
                  level: "Moderate",
                  impact: "Serious adverse effect",
                  color: "text-yellow-400",
                  bgColor: "bg-yellow-500/20",
                  borderColor: "border-yellow-500/50",
                  requirements: [
                    "Enhanced security controls",
                    "Annual assessment",
                    "Continuous monitoring",
                    "Contingency planning",
                  ],
                },
                {
                  level: "High",
                  impact: "Severe or catastrophic adverse effect",
                  color: "text-red-400",
                  bgColor: "bg-red-500/20",
                  borderColor: "border-red-500/50",
                  requirements: [
                    "Comprehensive controls",
                    "Rigorous assessment",
                    "Real-time monitoring",
                    "Advanced threat protection",
                  ],
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900/50 ${category.borderColor} hover:${category.borderColor} transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <Badge className={`${category.bgColor} ${category.color} mb-4`}>{category.level} Impact</Badge>
                      <p className="text-gray-400 text-sm">{category.impact}</p>
                    </div>
                    <ul className="space-y-2">
                      {category.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className={`w-4 h-4 ${category.color} mr-2 flex-shrink-0`} />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Control Families */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">NIST 800-53 Control Families</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { family: "AC", name: "Access Control", count: "25 controls" },
                { family: "AU", name: "Audit and Accountability", count: "16 controls" },
                { family: "AT", name: "Awareness and Training", count: "6 controls" },
                { family: "CM", name: "Configuration Management", count: "14 controls" },
                { family: "CP", name: "Contingency Planning", count: "13 controls" },
                { family: "IA", name: "Identification and Authentication", count: "12 controls" },
                { family: "IR", name: "Incident Response", count: "10 controls" },
                { family: "MA", name: "Maintenance", count: "7 controls" },
                { family: "MP", name: "Media Protection", count: "8 controls" },
                { family: "PE", name: "Physical and Environmental Protection", count: "20 controls" },
                { family: "PL", name: "Planning", count: "11 controls" },
                { family: "PS", name: "Personnel Security", count: "8 controls" },
                { family: "RA", name: "Risk Assessment", count: "10 controls" },
                { family: "CA", name: "Assessment, Authorization, and Monitoring", count: "9 controls" },
                { family: "SC", name: "System and Communications Protection", count: "51 controls" },
                { family: "SI", name: "System and Information Integrity", count: "23 controls" },
              ].map((control, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-4">
                    <div className="bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                      {control.family}
                    </div>
                    <h3 className="text-white font-semibold mb-2 text-sm">{control.name}</h3>
                    <Badge className="bg-blue-500/20 text-blue-400 text-xs">{control.count}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our FISMA Services */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our FISMA Compliance Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "RMF Implementation",
                  description: "Complete Risk Management Framework implementation",
                  features: [
                    "System Categorization",
                    "Control Selection",
                    "Implementation Planning",
                    "Assessment Support",
                  ],
                },
                {
                  title: "Security Assessment",
                  description: "Comprehensive security control assessments",
                  features: [
                    "Control Testing",
                    "Vulnerability Assessment",
                    "Penetration Testing",
                    "Assessment Reports",
                  ],
                },
                {
                  title: "Authorization Support",
                  description: "Authority to Operate (ATO) package development",
                  features: ["Security Plans", "Assessment Reports", "POA&M Development", "ATO Package Review"],
                },
                {
                  title: "Continuous Monitoring",
                  description: "Ongoing security monitoring and reporting",
                  features: ["Security Monitoring", "Control Assessments", "Status Reporting", "Risk Management"],
                },
                {
                  title: "FedRAMP Services",
                  description: "Cloud security authorization services",
                  features: ["FedRAMP Assessment", "3PAO Services", "JAB Authorization", "Agency Authorization"],
                },
                {
                  title: "Training & Support",
                  description: "FISMA training and ongoing support",
                  features: ["RMF Training", "Control Implementation", "Documentation Support", "Compliance Guidance"],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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

        {/* Implementation Timeline */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">FISMA Implementation Timeline</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      phase: "Phase 1",
                      title: "Categorize (1-2 months)",
                      desc: "System categorization and impact analysis",
                    },
                    {
                      phase: "Phase 2",
                      title: "Select (2-3 months)",
                      desc: "Security control selection and tailoring",
                    },
                    {
                      phase: "Phase 3",
                      title: "Implement (6-12 months)",
                      desc: "Security control implementation and documentation",
                    },
                    {
                      phase: "Phase 4",
                      title: "Assess (2-4 months)",
                      desc: "Security control assessment and testing",
                    },
                    {
                      phase: "Phase 5",
                      title: "Authorize (1-2 months)",
                      desc: "Risk determination and ATO decision",
                    },
                    {
                      phase: "Phase 6",
                      title: "Monitor (Ongoing)",
                      desc: "Continuous monitoring and reporting",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        {index + 1}
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
                <h3 className="text-white font-bold text-xl mb-6">FISMA Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Federal Contract Eligibility</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Enhanced Security Posture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Risk Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Regulatory Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Competitive Advantage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              Achieve FISMA Compliance
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Meet federal security requirements and qualify for government contracts with our FISMA expertise.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-red-600 hover:from-blue-600 hover:to-red-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
