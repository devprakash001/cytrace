import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Building, CheckCircle, Users, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Clients() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Building className="w-4 h-4 mr-2" />
              Our Clients
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              CyberShield proudly serves organizations across various industries, from Fortune 500 companies to
              innovative startups. Our clients trust us to protect their most valuable digital assets and maintain their
              competitive edge in an increasingly connected world.
            </p>
          </div>
        </section>

        {/* Client Statistics */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  stat: "10,000+",
                  label: "Clients Served",
                  icon: Users,
                  color: "text-cyan-400",
                },
                {
                  stat: "50+",
                  label: "Countries",
                  icon: Globe,
                  color: "text-blue-400",
                },
                {
                  stat: "15+",
                  label: "Industries",
                  icon: Building,
                  color: "text-green-400",
                },
                {
                  stat: "99.8%",
                  label: "Client Satisfaction",
                  icon: CheckCircle,
                  color: "text-purple-400",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4">
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.stat}</div>
                    <div className="text-gray-400">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Sectors */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Financial Services",
                  icon: "🏦",
                  description: "Banks, credit unions, fintech companies, and payment processors",
                  clients: "500+ clients",
                  services: ["PCI-DSS Compliance", "Fraud Prevention", "Risk Assessment", "Incident Response"],
                },
                {
                  industry: "Healthcare",
                  icon: "🏥",
                  description: "Hospitals, clinics, pharmaceutical companies, and health tech",
                  clients: "300+ clients",
                  services: ["HIPAA Compliance", "Medical Device Security", "Patient Data Protection", "Audit Support"],
                },
                {
                  industry: "Technology",
                  icon: "💻",
                  description: "Software companies, cloud providers, and tech startups",
                  clients: "2000+ clients",
                  services: ["Penetration Testing", "Code Review", "Cloud Security", "DevSecOps"],
                },
                {
                  industry: "Government",
                  icon: "🏛️",
                  description: "Federal agencies, state governments, and public sector",
                  clients: "150+ clients",
                  services: [
                    "FISMA Compliance",
                    "Security Clearance",
                    "Critical Infrastructure",
                    "Threat Intelligence",
                  ],
                },
                {
                  industry: "Education",
                  icon: "🎓",
                  description: "Universities, schools, and educational technology companies",
                  clients: "400+ clients",
                  services: ["Student Data Protection", "Research Security", "Campus Network Security", "Training"],
                },
                {
                  industry: "Retail & E-commerce",
                  icon: "🛒",
                  description: "Online retailers, brick-and-mortar stores, and marketplaces",
                  clients: "600+ clients",
                  services: [
                    "Payment Security",
                    "Customer Data Protection",
                    "Supply Chain Security",
                    "Fraud Detection",
                  ],
                },
              ].map((sector, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{sector.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{sector.industry}</h3>
                      <Badge className="bg-cyan-500/20 text-cyan-400">{sector.clients}</Badge>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">{sector.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyan-400">Key Services:</h4>
                      <ul className="space-y-1">
                        {sector.services.map((service, idx) => (
                          <li key={idx} className="text-gray-300 text-xs">
                            • {service}
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

        {/* Client Testimonials */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "CyberShield's penetration testing revealed critical vulnerabilities we never knew existed. Their expertise saved us from potential breaches.",
                  author: "Sarah Johnson",
                  title: "CISO",
                  company: "TechCorp Industries",
                  industry: "Technology",
                },
                {
                  quote:
                    "The HIPAA compliance assessment was thorough and professional. CyberShield helped us achieve full compliance ahead of schedule.",
                  author: "Dr. Michael Chen",
                  title: "IT Director",
                  company: "Regional Medical Center",
                  industry: "Healthcare",
                },
                {
                  quote:
                    "Outstanding incident response service. When we were hit by ransomware, CyberShield's team was on-site within hours and contained the threat.",
                  author: "Robert Martinez",
                  title: "Security Manager",
                  company: "Global Financial Services",
                  industry: "Finance",
                },
                {
                  quote:
                    "The security training program transformed our employees from our biggest risk to our strongest defense against cyber threats.",
                  author: "Lisa Thompson",
                  title: "HR Director",
                  company: "Education Solutions Inc.",
                  industry: "Education",
                },
                {
                  quote:
                    "CyberShield's cloud security assessment helped us migrate to AWS with confidence. Their recommendations were spot-on.",
                  author: "David Kim",
                  title: "Cloud Architect",
                  company: "Retail Innovations",
                  industry: "Retail",
                },
                {
                  quote:
                    "The FISMA compliance support was exceptional. CyberShield guided us through the entire ATO process successfully.",
                  author: "Colonel James Wilson",
                  title: "IT Security Officer",
                  company: "Department of Defense",
                  industry: "Government",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div className="text-cyan-400 text-4xl mb-4">"</div>
                      <p className="text-gray-300 italic leading-relaxed">{testimonial.quote}</p>
                    </div>
                    <div className="border-t border-gray-700 pt-4">
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.title}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                      <Badge className="bg-blue-500/20 text-blue-400 mt-2 text-xs">{testimonial.industry}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Organizations Choose CyberShield</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      benefit: "Proven Expertise",
                      desc: "15+ years of cybersecurity experience with industry-certified professionals",
                    },
                    {
                      benefit: "Comprehensive Solutions",
                      desc: "End-to-end security services from assessment to implementation and monitoring",
                    },
                    {
                      benefit: "Regulatory Compliance",
                      desc: "Deep knowledge of industry regulations and compliance requirements",
                    },
                    {
                      benefit: "24/7 Support",
                      desc: "Round-the-clock incident response and security monitoring capabilities",
                    },
                    {
                      benefit: "Scalable Services",
                      desc: "Solutions that grow with your organization's needs and requirements",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{item.benefit}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Partnership Highlights</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Average Project Success Rate</span>
                    <span className="text-2xl font-bold text-green-400">98.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Client Retention Rate</span>
                    <span className="text-2xl font-bold text-cyan-400">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Average Response Time</span>
                    <span className="text-2xl font-bold text-blue-400">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Security Incidents Prevented</span>
                    <span className="text-2xl font-bold text-purple-400">1M+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Join Our Growing Client Family
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Discover why thousands of organizations trust CyberShield to protect their digital assets and ensure
              business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4">
                Become a Client
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-4"
              >
                Request Case Studies
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
