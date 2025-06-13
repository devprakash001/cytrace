import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Users, CheckCircle, Calendar, Clock } from "lucide-react"
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
              <Users className="w-4 h-4 mr-2" />
              Cybersecurity Workshops
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Interactive Cybersecurity Workshops
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Hands-on cybersecurity workshops designed to enhance your team's security knowledge and practical skills.
              Our expert-led sessions combine theoretical knowledge with real-world scenarios and interactive exercises.
            </p>
          </div>
        </section>

        {/* Workshop Categories */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Workshop Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Security Awareness",
                  duration: "4-8 hours",
                  audience: "All Employees",
                  topics: [
                    "Phishing Recognition",
                    "Password Security",
                    "Social Engineering",
                    "Safe Computing Practices",
                    "Incident Reporting",
                  ],
                },
                {
                  title: "Technical Security",
                  duration: "1-2 days",
                  audience: "IT Professionals",
                  topics: [
                    "Vulnerability Assessment",
                    "Penetration Testing",
                    "Network Security",
                    "Secure Coding",
                    "Incident Response",
                  ],
                },
                {
                  title: "Compliance Training",
                  duration: "1 day",
                  audience: "Compliance Teams",
                  topics: [
                    "GDPR Requirements",
                    "HIPAA Compliance",
                    "PCI-DSS Standards",
                    "Risk Assessment",
                    "Audit Preparation",
                  ],
                },
                {
                  title: "Executive Briefing",
                  duration: "2-4 hours",
                  audience: "Leadership",
                  topics: [
                    "Cyber Risk Management",
                    "Business Impact",
                    "Investment Priorities",
                    "Governance Framework",
                    "Crisis Management",
                  ],
                },
                {
                  title: "Incident Response",
                  duration: "1-2 days",
                  audience: "Security Teams",
                  topics: [
                    "Incident Handling",
                    "Digital Forensics",
                    "Crisis Communication",
                    "Recovery Procedures",
                    "Lessons Learned",
                  ],
                },
                {
                  title: "Secure Development",
                  duration: "2-3 days",
                  audience: "Developers",
                  topics: [
                    "Secure Coding Practices",
                    "OWASP Top 10",
                    "Code Review",
                    "DevSecOps",
                    "Application Security",
                  ],
                },
              ].map((workshop, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{workshop.title}</h3>
                      <Badge className="bg-purple-500/20 text-purple-400">{workshop.duration}</Badge>
                    </div>
                    <p className="text-gray-400 mb-4">Target: {workshop.audience}</p>
                    <ul className="space-y-2">
                      {workshop.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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

        {/* Workshop Features */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Workshop Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  feature: "Interactive Learning",
                  description: "Hands-on exercises and real-world scenarios",
                  icon: "🎯",
                },
                {
                  feature: "Expert Instructors",
                  description: "Industry-certified cybersecurity professionals",
                  icon: "👨‍🏫",
                },
                {
                  feature: "Customized Content",
                  description: "Tailored to your industry and specific needs",
                  icon: "🎨",
                },
                {
                  feature: "Practical Tools",
                  description: "Access to professional security tools and platforms",
                  icon: "🛠️",
                },
                {
                  feature: "Certification Prep",
                  description: "Preparation for industry certifications",
                  icon: "🏆",
                },
                {
                  feature: "Ongoing Support",
                  description: "Post-workshop support and resources",
                  icon: "🤝",
                },
                {
                  feature: "Flexible Delivery",
                  description: "On-site, virtual, or hybrid formats",
                  icon: "📍",
                },
                {
                  feature: "Progress Tracking",
                  description: "Assessment and progress monitoring",
                  icon: "📊",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.feature}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Workshops */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Upcoming Public Workshops</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cybersecurity Fundamentals",
                  date: "March 15-16, 2024",
                  time: "9:00 AM - 5:00 PM",
                  format: "Virtual",
                  price: "$599",
                  level: "Beginner",
                },
                {
                  title: "Penetration Testing Bootcamp",
                  date: "March 22-24, 2024",
                  time: "9:00 AM - 5:00 PM",
                  format: "On-site",
                  price: "$1,299",
                  level: "Intermediate",
                },
                {
                  title: "CISSP Exam Preparation",
                  date: "April 5-7, 2024",
                  time: "9:00 AM - 5:00 PM",
                  format: "Hybrid",
                  price: "$899",
                  level: "Advanced",
                },
                {
                  title: "Cloud Security Workshop",
                  date: "April 12-13, 2024",
                  time: "9:00 AM - 5:00 PM",
                  format: "Virtual",
                  price: "$699",
                  level: "Intermediate",
                },
                {
                  title: "Incident Response Training",
                  date: "April 19-20, 2024",
                  time: "9:00 AM - 5:00 PM",
                  format: "On-site",
                  price: "$799",
                  level: "Intermediate",
                },
                {
                  title: "Secure Coding Practices",
                  date: "April 26-28, 2024",
                  time: "9:00 AM - 5:00 PM",
                  format: "Virtual",
                  price: "$999",
                  level: "Intermediate",
                },
              ].map((workshop, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{workshop.title}</h3>
                      <Badge className="bg-purple-500/20 text-purple-400">{workshop.level}</Badge>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 text-purple-400 mr-2" />
                        {workshop.date}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 text-purple-400 mr-2" />
                        {workshop.time}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="w-4 h-4 text-purple-400 mr-2" />
                        {workshop.format}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-400">{workshop.price}</span>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                        Register
                      </Button>
                    </div>
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
              Enhance Your Team's Security Skills
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Invest in your team's cybersecurity knowledge with our comprehensive workshop programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-lg px-8 py-4">
                View All Workshops
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-4"
              >
                Custom Workshop Request
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
