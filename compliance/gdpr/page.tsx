import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, CheckCircle, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function GDPR() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/50">
              <Shield className="w-4 h-4 mr-2" />
              GDPR Compliance
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              GDPR Compliance Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The General Data Protection Regulation (GDPR) is a European Union law that governs how organizations
              within and outside the EU handle the personal data of EU residents. It aims to give individuals greater
              control over their personal data and protects their rights while processing data. The GDPR applies to
              organizations that offer goods or services to individuals in the EU, or that process the data of EU
              residents, regardless of their location.
            </p>
          </div>
        </section>

        {/* Key Principles */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">GDPR Key Principles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Lawfulness, Fairness & Transparency",
                  description: "Personal data must be processed lawfully, fairly, and transparently",
                  icon: FileText,
                },
                {
                  title: "Purpose Limitation",
                  description: "Data must be collected for specified, explicit, and legitimate purposes",
                  icon: CheckCircle,
                },
                {
                  title: "Data Minimization",
                  description: "Data collected must be adequate, relevant, and limited to what is necessary",
                  icon: Shield,
                },
                {
                  title: "Accuracy",
                  description: "Personal data must be accurate and kept up to date",
                  icon: CheckCircle,
                },
                {
                  title: "Storage Limitation",
                  description: "Data must not be kept longer than necessary for the purposes",
                  icon: FileText,
                },
                {
                  title: "Integrity & Confidentiality",
                  description: "Data must be processed securely with appropriate technical measures",
                  icon: Shield,
                },
              ].map((principle, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <principle.icon className="w-8 h-8 text-blue-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{principle.title}</h3>
                    </div>
                    <p className="text-gray-400">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Rights */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Individual Rights Under GDPR</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  { title: "Right to Information", desc: "Individuals must be informed about data processing" },
                  { title: "Right of Access", desc: "Individuals can request access to their personal data" },
                  { title: "Right to Rectification", desc: "Individuals can request correction of inaccurate data" },
                  { title: "Right to Erasure", desc: "Individuals can request deletion of their data" },
                ].map((right, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{right.title}</h3>
                      <p className="text-gray-400">{right.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  { title: "Right to Restrict Processing", desc: "Individuals can limit how their data is processed" },
                  {
                    title: "Right to Data Portability",
                    desc: "Individuals can transfer their data to another service",
                  },
                  { title: "Right to Object", desc: "Individuals can object to certain types of processing" },
                  {
                    title: "Rights Related to Automated Decision Making",
                    desc: "Protection against automated profiling",
                  },
                ].map((right, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 5}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{right.title}</h3>
                      <p className="text-gray-400">{right.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our GDPR Compliance Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Compliance Assessment</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Data Processing Audit
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Privacy Impact Assessment
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Gap Analysis & Remediation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Policy & Procedure Development
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Staff Training & Awareness
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Ongoing Support</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Data Protection Officer Services
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Breach Response & Notification
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Regular Compliance Monitoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Subject Access Request Management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Regulatory Updates & Guidance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Achieve GDPR Compliance Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Protect your organization from GDPR penalties and build trust with your customers through comprehensive
              compliance.
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
