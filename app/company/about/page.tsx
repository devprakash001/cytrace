import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, Users, Award, Globe, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
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
              Securing the Digital Future
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Cytrace is a leading cybersecurity company dedicated to protecting organizations from evolving cyber
              threats. With our team of expert security professionals and cutting-edge technologies, we provide
              comprehensive security solutions tailored to your unique needs.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">Our Story</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                  A Decade of Excellence in Cybersecurity
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Founded in 2014, Cytrace began with a simple mission: to make the digital world safer for businesses
                    and individuals alike. What started as a small team of passionate security researchers has grown
                    into a global cybersecurity powerhouse.
                  </p>
                  <p>
                    Our journey has been defined by continuous innovation, unwavering commitment to excellence, and a
                    deep understanding of the evolving threat landscape. We've helped thousands of organizations
                    strengthen their security posture and protect their most valuable digital assets.
                  </p>
                  <p>
                    Today, Cytrace stands at the forefront of the cybersecurity industry, combining human expertise with
                    advanced technologies to deliver unparalleled protection against even the most sophisticated cyber
                    threats.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Our Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-cyan-500/20 p-2 rounded-full mt-1">
                      <Shield className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">2014</h4>
                      <p className="text-gray-400 text-sm">Founded with a focus on penetration testing services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-cyan-500/20 p-2 rounded-full mt-1">
                      <Shield className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">2016</h4>
                      <p className="text-gray-400 text-sm">Expanded to offer comprehensive security assessments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-cyan-500/20 p-2 rounded-full mt-1">
                      <Shield className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">2018</h4>
                      <p className="text-gray-400 text-sm">Launched managed security services division</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-cyan-500/20 p-2 rounded-full mt-1">
                      <Shield className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">2020</h4>
                      <p className="text-gray-400 text-sm">Developed proprietary threat intelligence platform</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-cyan-500/20 p-2 rounded-full mt-1">
                      <Shield className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">2023</h4>
                      <p className="text-gray-400 text-sm">Expanded globally with offices in 12 countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">Our Values</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">What Drives Us</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our core values shape everything we do at Cytrace, from how we develop our services to how we interact
                with our clients and partners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Integrity",
                  description: "We uphold the highest ethical standards in all our operations and relationships.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "We work closely with our clients to develop tailored security solutions.",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our security services.",
                },
                {
                  icon: Globe,
                  title: "Innovation",
                  description: "We continuously innovate to stay ahead of evolving cyber threats.",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4">
                      <value.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">Our Leadership</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Meet Our Leadership Team</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our leadership team brings decades of combined experience in cybersecurity, technology, and business
                management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Chief Executive Officer",
                  bio: "With over 20 years of experience in cybersecurity, Sarah leads our global strategy and operations.",
                  expertise: ["Strategic Leadership", "Cybersecurity Vision", "Business Growth"],
                },
                {
                  name: "Michael Chen",
                  role: "Chief Technology Officer",
                  bio: "Michael oversees our technology development and ensures we stay at the cutting edge of cybersecurity innovation.",
                  expertise: ["Security Architecture", "AI & Machine Learning", "Threat Intelligence"],
                },
                {
                  name: "Aisha Patel",
                  role: "Chief Security Officer",
                  bio: "Aisha leads our security operations and ensures the highest standards in our service delivery.",
                  expertise: ["Security Operations", "Risk Management", "Compliance"],
                },
                {
                  name: "David Rodriguez",
                  role: "VP of Consulting Services",
                  bio: "David heads our consulting division, bringing expert security guidance to our clients worldwide.",
                  expertise: ["Security Assessments", "Strategic Consulting", "Client Relations"],
                },
                {
                  name: "Emma Wilson",
                  role: "Director of Research",
                  bio: "Emma leads our research team in discovering new threats and developing innovative security solutions.",
                  expertise: ["Vulnerability Research", "Exploit Development", "Security Tools"],
                },
                {
                  name: "James Thompson",
                  role: "VP of Global Sales",
                  bio: "James drives our global sales strategy and ensures we meet the needs of clients across industries.",
                  expertise: ["Enterprise Security", "Solution Design", "Client Success"],
                },
              ].map((leader, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyan-400">{leader.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                    <p className="text-cyan-400 text-sm mb-4">{leader.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{leader.bio}</p>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 mb-2">EXPERTISE</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, idx) => (
                          <Badge key={idx} className="bg-cyan-500/10 text-cyan-400 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">Why Choose Us</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">The Cytrace Difference</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                What sets us apart in the cybersecurity landscape and why leading organizations trust us with their
                security needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Team",
                    desc: "Our team includes certified security professionals with diverse industry experience",
                  },
                  {
                    title: "Comprehensive Approach",
                    desc: "We provide end-to-end security solutions tailored to your specific needs",
                  },
                  {
                    title: "Advanced Technology",
                    desc: "We leverage cutting-edge technologies and proprietary tools for superior protection",
                  },
                  {
                    title: "Proven Track Record",
                    desc: "We have successfully secured thousands of organizations across industries",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Client-Centric Approach",
                    desc: "We prioritize your security needs and business objectives in everything we do",
                  },
                  {
                    title: "Continuous Innovation",
                    desc: "We constantly evolve our services to address emerging threats and challenges",
                  },
                  {
                    title: "Global Presence",
                    desc: "We provide consistent security services and support across global operations",
                  },
                  {
                    title: "Industry Recognition",
                    desc: "We are recognized as leaders by industry analysts and security communities",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Partner with Cytrace for comprehensive cybersecurity solutions tailored to your organization's unique
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4">
                Contact Our Team
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-4"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
