import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, Users, Award, Target, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Shield className="w-4 h-4 mr-2" />
              About Cytrace
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Leading Cybersecurity Excellence
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Cytrace is a premier cybersecurity solutions provider dedicated to protecting businesses from evolving
              digital threats. With years of expertise and a commitment to excellence, we deliver comprehensive security
              services that safeguard your digital assets and ensure business continuity.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-cyan-400 mr-3" />
                    <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    To provide world-class cybersecurity solutions that empower organizations to operate securely in the
                    digital age. We are committed to delivering innovative, reliable, and comprehensive security
                    services that protect our clients' most valuable digital assets while enabling their business growth
                    and success.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Award className="w-8 h-8 text-blue-400 mr-3" />
                    <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    To be the global leader in cybersecurity services, setting the standard for excellence in threat
                    detection, prevention, and response. We envision a world where businesses can innovate and grow
                    without fear of cyber threats, supported by our cutting-edge security solutions and expert guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "We strive for perfection in every service we deliver, maintaining the highest standards of quality and professionalism.",
                  icon: Award,
                },
                {
                  title: "Innovation",
                  description:
                    "We continuously evolve our solutions to stay ahead of emerging threats and provide cutting-edge security technologies.",
                  icon: Target,
                },
                {
                  title: "Integrity",
                  description:
                    "We operate with complete transparency, honesty, and ethical standards in all our client relationships and business practices.",
                  icon: Shield,
                },
                {
                  title: "Expertise",
                  description:
                    "Our team consists of certified professionals with deep knowledge and extensive experience in cybersecurity.",
                  icon: Users,
                },
                {
                  title: "Partnership",
                  description:
                    "We build long-term relationships with our clients, working as trusted advisors to secure their digital future.",
                  icon: CheckCircle,
                },
                {
                  title: "Reliability",
                  description:
                    "Our clients depend on us for consistent, dependable security services that protect their business 24/7.",
                  icon: Shield,
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Cytrace</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      title: "Proven Track Record",
                      desc: "Over 10,000 successful security assessments and implementations",
                    },
                    {
                      title: "Expert Team",
                      desc: "Certified professionals with decades of combined cybersecurity experience",
                    },
                    {
                      title: "Comprehensive Solutions",
                      desc: "End-to-end security services from assessment to implementation",
                    },
                    { title: "24/7 Support", desc: "Round-the-clock monitoring and incident response capabilities" },
                    {
                      title: "Industry Recognition",
                      desc: "Award-winning services recognized by leading industry organizations",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Company Statistics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Years of Experience</span>
                    <span className="text-2xl font-bold text-cyan-400">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Clients Served</span>
                    <span className="text-2xl font-bold text-cyan-400">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Security Experts</span>
                    <span className="text-2xl font-bold text-cyan-400">200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Countries Served</span>
                    <span className="text-2xl font-bold text-cyan-400">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Threats Prevented</span>
                    <span className="text-2xl font-bold text-cyan-400">1M+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
