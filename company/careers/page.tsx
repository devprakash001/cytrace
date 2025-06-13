import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Briefcase, CheckCircle, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Careers() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Build Your Cybersecurity Career
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Join CyberShield and be part of a dynamic team protecting organizations worldwide from cyber threats. We
              offer exciting opportunities for growth, learning, and making a real impact in cybersecurity.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Work With CyberShield</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cutting-Edge Technology",
                  description: "Work with the latest cybersecurity tools and technologies",
                  icon: "🚀",
                },
                {
                  title: "Professional Growth",
                  description: "Continuous learning opportunities and career advancement",
                  icon: "📈",
                },
                {
                  title: "Global Impact",
                  description: "Protect organizations worldwide from cyber threats",
                  icon: "🌍",
                },
                {
                  title: "Competitive Benefits",
                  description: "Comprehensive benefits package and competitive salary",
                  icon: "💰",
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible work arrangements and remote options",
                  icon: "⚖️",
                },
                {
                  title: "Innovation Culture",
                  description: "Encourage creativity and innovative thinking",
                  icon: "💡",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Open Positions</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Senior Penetration Tester",
                  department: "Security Services",
                  location: "Remote / New York",
                  type: "Full-time",
                  experience: "5+ years",
                  description: "Lead penetration testing engagements and mentor junior team members.",
                },
                {
                  title: "Cybersecurity Consultant",
                  department: "Consulting",
                  location: "San Francisco",
                  type: "Full-time",
                  experience: "3+ years",
                  description: "Provide cybersecurity consulting services to enterprise clients.",
                },
                {
                  title: "Security Analyst",
                  department: "SOC",
                  location: "Remote",
                  type: "Full-time",
                  experience: "2+ years",
                  description: "Monitor security events and respond to incidents in our 24/7 SOC.",
                },
                {
                  title: "Cloud Security Engineer",
                  department: "Cloud Services",
                  location: "Austin",
                  type: "Full-time",
                  experience: "4+ years",
                  description: "Design and implement cloud security solutions for clients.",
                },
                {
                  title: "Incident Response Specialist",
                  department: "Emergency Response",
                  location: "Remote / Chicago",
                  type: "Full-time",
                  experience: "3+ years",
                  description: "Lead incident response activities and digital forensics investigations.",
                },
                {
                  title: "Security Training Developer",
                  department: "Training",
                  location: "Remote",
                  type: "Contract",
                  experience: "5+ years",
                  description: "Develop cybersecurity training content and certification programs.",
                },
              ].map((job, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge className="bg-cyan-500/20 text-cyan-400">{job.department}</Badge>
                          <Badge className="bg-blue-500/20 text-blue-400">{job.type}</Badge>
                          <Badge className="bg-green-500/20 text-green-400">{job.experience}</Badge>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 mt-4 md:mt-0">
                        Apply Now
                      </Button>
                    </div>
                    <p className="text-gray-400 mb-4">{job.description}</p>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
                      {job.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Employee Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Health & Wellness</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Comprehensive health insurance
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Dental and vision coverage
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Mental health support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Wellness programs and gym membership
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Professional Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Training and certification reimbursement
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Conference attendance opportunities
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Mentorship programs
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Career advancement pathways
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Take the next step in your cybersecurity career and make a difference in protecting the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4">
                View All Positions
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-4"
              >
                Submit Resume
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
