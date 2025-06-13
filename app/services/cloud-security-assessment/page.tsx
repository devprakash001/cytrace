import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Cloud, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function CloudSecurityAssessment() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud Security Assessment
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cloud Security Assessment
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Cloud penetration testing is a systematic process of simulating cyber-attacks on cloud-based systems to
              identify and address vulnerabilities. Cloud penetration testing specifically targets cloud services and
              configurations, in contrast to traditional penetration testing, which focuses on on-premise
              infrastructure.
            </p>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Supported Cloud Platforms</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Amazon Web Services",
                  logo: "☁️",
                  services: [
                    "EC2 Security",
                    "S3 Bucket Assessment",
                    "IAM Configuration",
                    "VPC Security",
                    "Lambda Functions",
                  ],
                },
                {
                  name: "Microsoft Azure",
                  logo: "🔷",
                  services: [
                    "Virtual Machine Security",
                    "Storage Account Assessment",
                    "Azure AD Review",
                    "Network Security Groups",
                    "Function Apps",
                  ],
                },
                {
                  name: "Google Cloud Platform",
                  logo: "🌐",
                  services: [
                    "Compute Engine Security",
                    "Cloud Storage Assessment",
                    "IAM & Admin",
                    "VPC Network Security",
                    "Cloud Functions",
                  ],
                },
              ].map((platform, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{platform.logo}</div>
                      <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {platform.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {service}
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Secure Your Cloud Infrastructure
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Ensure your cloud deployments are secure and compliant with our comprehensive assessment services.
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
