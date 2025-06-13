import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { GraduationCap, CheckCircle, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function CyberSecurityTraining() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/50">
              <GraduationCap className="w-4 h-4 mr-2" />
              Cybersecurity Training
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Comprehensive Cybersecurity Training
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Master the fundamentals and advanced concepts of cybersecurity with our comprehensive training programs.
              Designed for professionals at all levels, from beginners to experienced practitioners seeking to enhance
              their skills.
            </p>
          </div>
        </section>

        {/* Training Tracks */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Training Tracks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  track: "Foundation Track",
                  duration: "40 hours",
                  level: "Beginner",
                  modules: [
                    "Introduction to Cybersecurity",
                    "Network Security Basics",
                    "Operating System Security",
                    "Cryptography Fundamentals",
                    "Risk Management",
                    "Compliance & Governance",
                  ],
                },
                {
                  track: "Professional Track",
                  duration: "80 hours",
                  level: "Intermediate",
                  modules: [
                    "Advanced Network Security",
                    "Vulnerability Assessment",
                    "Incident Response",
                    "Digital Forensics",
                    "Security Architecture",
                    "Threat Intelligence",
                  ],
                },
                {
                  track: "Expert Track",
                  duration: "120 hours",
                  level: "Advanced",
                  modules: [
                    "Advanced Penetration Testing",
                    "Malware Analysis",
                    "Red Team Operations",
                    "Security Research",
                    "Advanced Forensics",
                    "Leadership & Strategy",
                  ],
                },
              ].map((track, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{track.track}</h3>
                      <Badge className="bg-green-500/20 text-green-400">{track.level}</Badge>
                    </div>
                    <p className="text-gray-400 mb-4">Duration: {track.duration}</p>
                    <ul className="space-y-2">
                      {track.modules.map((module, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {module}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Preparation */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Certification Preparation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { cert: "CISSP", name: "Certified Information Systems Security Professional", level: "Advanced" },
                { cert: "CISM", name: "Certified Information Security Manager", level: "Advanced" },
                { cert: "CISA", name: "Certified Information Systems Auditor", level: "Intermediate" },
                { cert: "CEH", name: "Certified Ethical Hacker", level: "Intermediate" },
                { cert: "GSEC", name: "GIAC Security Essentials", level: "Beginner" },
                { cert: "Security+", name: "CompTIA Security+", level: "Beginner" },
                { cert: "OSCP", name: "Offensive Security Certified Professional", level: "Advanced" },
                { cert: "CCSP", name: "Certified Cloud Security Professional", level: "Intermediate" },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold">
                      {cert.cert}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{cert.name}</h3>
                    <Badge
                      className={`${
                        cert.level === "Advanced"
                          ? "bg-red-500/20 text-red-400"
                          : cert.level === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {cert.level}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training Features */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Training Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Award className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Expert Instruction</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Industry-certified instructors
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Real-world experience and case studies
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Interactive learning methodology
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Personalized feedback and guidance
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Users className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Flexible Learning</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Multiple delivery formats (online, in-person, hybrid)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Self-paced and instructor-led options
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      24/7 access to learning materials
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      Mobile-friendly platform
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Start Your Cybersecurity Journey
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Build the skills needed to protect organizations from cyber threats and advance your career.
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg px-8 py-4 glow-button">
              Enroll Now
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
