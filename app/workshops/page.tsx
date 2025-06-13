import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, CheckCircle, Users, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Workshops() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/50">
              <Calendar className="w-4 h-4 mr-2" />
              Cybersecurity Workshops
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Hands-on Cybersecurity Workshops
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Immersive, practical workshops designed to enhance your team's cybersecurity skills through real-world
              scenarios and expert guidance. Our workshops combine theory with hands-on exercises to ensure participants
              gain actionable knowledge they can immediately apply.
            </p>
          </div>
        </section>

        {/* Featured Workshops */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Workshops</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Ethical Hacking Fundamentals",
                  duration: "2 Days",
                  level: "Beginner to Intermediate",
                  description:
                    "Learn the basics of ethical hacking with hands-on exercises covering reconnaissance, scanning, and exploitation techniques.",
                  topics: [
                    "Penetration Testing Methodology",
                    "Network Scanning Techniques",
                    "Vulnerability Assessment",
                    "Basic Exploitation",
                  ],
                },
                {
                  title: "Secure Coding Practices",
                  duration: "3 Days",
                  level: "Intermediate",
                  description:
                    "Develop secure coding skills to build applications that are resistant to common security vulnerabilities and attacks.",
                  topics: [
                    "OWASP Top 10 Vulnerabilities",
                    "Secure Authentication Implementation",
                    "Input Validation Techniques",
                    "Secure API Development",
                  ],
                },
                {
                  title: "Incident Response & Forensics",
                  duration: "2 Days",
                  level: "Intermediate to Advanced",
                  description:
                    "Master the skills needed to effectively respond to security incidents and conduct digital forensic investigations.",
                  topics: [
                    "Incident Response Planning",
                    "Digital Evidence Collection",
                    "Malware Analysis Basics",
                    "Forensic Investigation Techniques",
                  ],
                },
                {
                  title: "Cloud Security Masterclass",
                  duration: "2 Days",
                  level: "Intermediate",
                  description:
                    "Learn how to secure cloud environments across major platforms including AWS, Azure, and Google Cloud.",
                  topics: [
                    "Cloud Security Architecture",
                    "Identity & Access Management",
                    "Data Protection in the Cloud",
                    "Compliance & Governance",
                  ],
                },
                {
                  title: "Advanced Web Application Security",
                  duration: "3 Days",
                  level: "Advanced",
                  description:
                    "Deep dive into advanced web application security testing techniques and defense strategies.",
                  topics: [
                    "Advanced XSS & CSRF Attacks",
                    "Server-Side Request Forgery",
                    "GraphQL Security",
                    "JWT Authentication Vulnerabilities",
                  ],
                },
                {
                  title: "Security Awareness for Employees",
                  duration: "1 Day",
                  level: "All Levels",
                  description:
                    "Essential security awareness training for all employees to create a strong human firewall in your organization.",
                  topics: [
                    "Phishing Awareness",
                    "Password Security",
                    "Social Engineering Defense",
                    "Data Protection Best Practices",
                  ],
                },
              ].map((workshop, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{workshop.title}</h3>
                      <Badge className="bg-purple-500/20 text-purple-400">{workshop.duration}</Badge>
                    </div>
                    <Badge className="bg-blue-500/20 text-blue-400 mb-4">{workshop.level}</Badge>
                    <p className="text-gray-400 mb-4 text-sm">{workshop.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Topics:</h4>
                      <ul className="space-y-2">
                        {workshop.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                            {topic}
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

        {/* Workshop Format */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Workshop Format</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Theory Sessions",
                  description:
                    "Expert-led presentations covering essential concepts, methodologies, and best practices",
                },
                {
                  icon: Users,
                  title: "Hands-on Labs",
                  description:
                    "Practical exercises in controlled environments to apply learned concepts in real scenarios",
                },
                {
                  icon: CheckCircle,
                  title: "Challenges",
                  description: "Competitive security challenges to test and reinforce skills in a gamified environment",
                },
                {
                  icon: Calendar,
                  title: "Follow-up Support",
                  description: "Post-workshop support and resources to continue learning and implementation",
                },
              ].map((format, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full mb-4">
                      <format.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{format.title}</h3>
                    <p className="text-gray-400 text-sm">{format.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Options */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Workshop Delivery Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">On-site</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Delivered at your location
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Customized to your environment
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Team-building opportunity
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Flexible scheduling
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Virtual</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Remote delivery via video conferencing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Cloud-based lab environments
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Global team participation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Recording options available
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Hybrid</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Combination of in-person and virtual
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Flexible attendance options
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Distributed team accommodation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      Best of both delivery methods
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Enhance Your Team's Security Skills?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us to schedule a workshop or customize a training program for your organization's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-lg px-8 py-4">
                Request Workshop Info
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-4"
              >
                View Schedule
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
