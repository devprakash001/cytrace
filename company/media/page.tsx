import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Camera, CheckCircle, Calendar, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Media() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/50">
              <Camera className="w-4 h-4 mr-2" />
              Media Center
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Media Resources & Press Kit
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Access the latest news, press releases, company information, and media assets. Find everything you need
              for media coverage, partnerships, and corporate communications.
            </p>
          </div>
        </section>

        {/* Press Releases */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Latest Press Releases</h2>
            <div className="space-y-6">
              {[
                {
                  date: "March 15, 2024",
                  title: "CyberShield Announces $50M Series C Funding to Expand Global Cybersecurity Services",
                  summary:
                    "Leading cybersecurity firm secures major funding round to accelerate international expansion and enhance AI-powered threat detection capabilities.",
                  category: "Funding",
                },
                {
                  date: "February 28, 2024",
                  title: "CyberShield Achieves SOC 2 Type II Certification for Enhanced Security Standards",
                  summary:
                    "Company demonstrates commitment to highest security standards with successful SOC 2 Type II audit completion.",
                  category: "Certification",
                },
                {
                  date: "February 10, 2024",
                  title: "New Partnership with Microsoft Enhances Cloud Security Offerings",
                  summary:
                    "Strategic alliance brings advanced Azure security solutions to CyberShield's enterprise clients worldwide.",
                  category: "Partnership",
                },
                {
                  date: "January 22, 2024",
                  title: "CyberShield Named 'Cybersecurity Company of the Year' by Industry Awards",
                  summary:
                    "Recognition highlights company's innovation in threat detection and exceptional client service delivery.",
                  category: "Award",
                },
                {
                  date: "January 8, 2024",
                  title: "Launch of AI-Powered Threat Intelligence Platform",
                  summary:
                    "Revolutionary platform uses machine learning to predict and prevent cyber threats before they impact organizations.",
                  category: "Product",
                },
              ].map((release, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <Calendar className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-400">{release.date}</span>
                        <Badge className="bg-purple-500/20 text-purple-400">{release.category}</Badge>
                      </div>
                      <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                        Read Full Release
                      </Button>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                    <p className="text-gray-400">{release.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Assets */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Media Assets & Downloads</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Company Logos",
                  description: "High-resolution logos in various formats",
                  items: ["PNG (Transparent)", "SVG (Vector)", "EPS (Print)", "Brand Guidelines"],
                  downloadSize: "2.5 MB",
                },
                {
                  category: "Executive Photos",
                  description: "Professional headshots of leadership team",
                  items: ["CEO Portrait", "CTO Portrait", "CISO Portrait", "Board Members"],
                  downloadSize: "15 MB",
                },
                {
                  category: "Product Screenshots",
                  description: "Platform and service interface images",
                  items: ["Dashboard Views", "Security Reports", "Mobile App", "Analytics Screens"],
                  downloadSize: "8 MB",
                },
                {
                  category: "Company Fact Sheet",
                  description: "Key statistics and company information",
                  items: ["Company Overview", "Service Portfolio", "Client Statistics", "Awards & Recognition"],
                  downloadSize: "1.2 MB",
                },
                {
                  category: "Infographics",
                  description: "Visual representations of cybersecurity data",
                  items: ["Threat Landscape", "Security Statistics", "Industry Trends", "Best Practices"],
                  downloadSize: "5 MB",
                },
                {
                  category: "Video Content",
                  description: "Corporate videos and presentations",
                  items: ["Company Overview", "Service Demos", "Client Testimonials", "Expert Interviews"],
                  downloadSize: "250 MB",
                },
              ].map((asset, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{asset.category}</h3>
                    <p className="text-gray-400 mb-4">{asset.description}</p>
                    <ul className="space-y-2 mb-6">
                      {asset.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{asset.downloadSize}</span>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Media Contacts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Mitchell",
                  title: "Director of Communications",
                  email: "media@cybershield.com",
                  phone: "+1 (555) 123-4567",
                  specialties: ["Press Releases", "Media Interviews", "Corporate Communications"],
                },
                {
                  name: "David Chen",
                  title: "Technical Communications Manager",
                  email: "tech-media@cybershield.com",
                  phone: "+1 (555) 123-4568",
                  specialties: ["Product Announcements", "Technical Briefings", "Industry Analysis"],
                },
                {
                  name: "Lisa Rodriguez",
                  title: "Partnership Communications",
                  email: "partnerships@cybershield.com",
                  phone: "+1 (555) 123-4569",
                  specialties: ["Strategic Partnerships", "Client Success Stories", "Industry Events"],
                },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                    <p className="text-purple-400 mb-4">{contact.title}</p>
                    <div className="space-y-2 mb-6">
                      <div className="text-gray-300">
                        <span className="font-semibold">Email:</span> {contact.email}
                      </div>
                      <div className="text-gray-300">
                        <span className="font-semibold">Phone:</span> {contact.phone}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Specialties:</h4>
                      <ul className="space-y-1">
                        {contact.specialties.map((specialty, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            • {specialty}
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

        {/* Awards & Recognition */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Awards & Recognition</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  year: "2024",
                  award: "Cybersecurity Company of the Year",
                  organization: "Security Industry Awards",
                  category: "Excellence",
                },
                {
                  year: "2023",
                  award: "Best Penetration Testing Service",
                  organization: "InfoSec Awards",
                  category: "Service",
                },
                {
                  year: "2023",
                  award: "Top 50 Cybersecurity Companies",
                  organization: "CyberSeek Magazine",
                  category: "Industry",
                },
                {
                  year: "2022",
                  award: "Innovation in Threat Detection",
                  organization: "Tech Innovation Awards",
                  category: "Technology",
                },
                {
                  year: "2022",
                  award: "Best Workplace in Cybersecurity",
                  organization: "Great Place to Work",
                  category: "Culture",
                },
                {
                  year: "2021",
                  award: "Fastest Growing Security Company",
                  organization: "Business Growth Awards",
                  category: "Growth",
                },
                {
                  year: "2021",
                  award: "Excellence in Customer Service",
                  organization: "Customer Choice Awards",
                  category: "Service",
                },
                {
                  year: "2020",
                  award: "Emerging Leader in Cybersecurity",
                  organization: "Industry Leadership Awards",
                  category: "Leadership",
                },
              ].map((award, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <Badge className="bg-purple-500/20 text-purple-400 mb-4">{award.year}</Badge>
                    <h3 className="text-white font-bold mb-2 text-sm">{award.award}</h3>
                    <p className="text-gray-400 text-xs mb-2">{award.organization}</p>
                    <Badge
                      className={`${
                        award.category === "Excellence"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : award.category === "Technology"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-green-500/20 text-green-400"
                      } text-xs`}
                    >
                      {award.category}
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Need More Information?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact our media team for additional resources, interview opportunities, or custom content requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-lg px-8 py-4">
                Contact Media Team
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-4"
              >
                Download Press Kit
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
