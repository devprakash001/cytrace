import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Newspaper, Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function News() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/50">
              <Newspaper className="w-4 h-4 mr-2" />
              Latest News
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              CyberShield News & Updates
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Stay informed with the latest cybersecurity news, industry insights, company updates, and expert analysis
              from CyberShield's team of security professionals.
            </p>
          </div>
        </section>

        {/* Featured News */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Stories</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <Badge className="bg-red-500/20 text-red-400 mb-4">Breaking News</Badge>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Major Ransomware Campaign Targets Healthcare Sector
                  </h3>
                  <p className="text-gray-400 mb-6">
                    CyberShield's threat intelligence team has identified a sophisticated ransomware campaign
                    specifically targeting healthcare organizations. Our analysis reveals new attack vectors and
                    provides critical mitigation strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      March 18, 2024
                    </div>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <Badge className="bg-blue-500/20 text-blue-400 mb-4">Industry Insight</Badge>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    AI in Cybersecurity: Opportunities and Challenges
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Our experts explore how artificial intelligence is revolutionizing cybersecurity, from automated
                    threat detection to predictive analytics, while addressing the challenges and ethical
                    considerations.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      March 15, 2024
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Recent News</h2>
            <div className="space-y-6">
              {[
                {
                  date: "March 12, 2024",
                  category: "Company News",
                  title: "CyberShield Opens New European Headquarters in London",
                  summary:
                    "Expansion supports growing demand for cybersecurity services across Europe and strengthens our global presence.",
                  readTime: "3 min read",
                  author: "Sarah Mitchell",
                },
                {
                  date: "March 10, 2024",
                  category: "Threat Intelligence",
                  title: "New APT Group Targets Financial Institutions with Advanced Malware",
                  summary:
                    "Our research team has discovered a previously unknown advanced persistent threat group using sophisticated techniques.",
                  readTime: "5 min read",
                  author: "Dr. Michael Chen",
                },
                {
                  date: "March 8, 2024",
                  category: "Product Update",
                  title: "Enhanced Mobile Security Features Now Available",
                  summary:
                    "Latest platform update includes advanced mobile threat detection and improved user experience across all devices.",
                  readTime: "2 min read",
                  author: "David Kim",
                },
                {
                  date: "March 5, 2024",
                  category: "Industry Analysis",
                  title: "Cybersecurity Skills Gap: Addressing the Talent Shortage",
                  summary:
                    "Analysis of the current cybersecurity workforce challenges and CyberShield's initiatives to bridge the skills gap.",
                  readTime: "4 min read",
                  author: "Lisa Rodriguez",
                },
                {
                  date: "March 3, 2024",
                  category: "Client Success",
                  title: "Fortune 500 Company Prevents $50M Loss with CyberShield Protection",
                  summary:
                    "Case study reveals how our incident response team helped a major corporation avoid significant financial losses.",
                  readTime: "6 min read",
                  author: "Robert Martinez",
                },
                {
                  date: "March 1, 2024",
                  category: "Compliance",
                  title: "New GDPR Guidelines: What Organizations Need to Know",
                  summary:
                    "Updated European data protection regulations and their impact on global businesses operating in the EU.",
                  readTime: "4 min read",
                  author: "Emma Thompson",
                },
              ].map((article, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <Calendar className="w-5 h-5 text-orange-400" />
                        <span className="text-gray-400">{article.date}</span>
                        <Badge className="bg-orange-500/20 text-orange-400">{article.category}</Badge>
                        <span className="text-gray-500 text-sm">{article.readTime}</span>
                      </div>
                      <span className="text-gray-400 text-sm">By {article.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                    <p className="text-gray-400 mb-4">{article.summary}</p>
                    <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500/10">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border-orange-500/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Stay Informed</h3>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter for the latest cybersecurity news, threat intelligence, and industry
                  insights delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-gray-800 border border-orange-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
                  />
                  <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-6 py-3">
                    Subscribe
                  </Button>
                </div>
                <p className="text-gray-400 text-sm mt-4">Join 50,000+ security professionals who trust our insights</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* News Categories */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "Threat Intelligence",
                  count: "45 articles",
                  description: "Latest threat analysis and security research",
                  color: "text-red-400",
                  bgColor: "bg-red-500/20",
                },
                {
                  category: "Company News",
                  count: "32 articles",
                  description: "Updates and announcements from CyberShield",
                  color: "text-blue-400",
                  bgColor: "bg-blue-500/20",
                },
                {
                  category: "Industry Analysis",
                  count: "28 articles",
                  description: "Expert insights on cybersecurity trends",
                  color: "text-green-400",
                  bgColor: "bg-green-500/20",
                },
                {
                  category: "Product Updates",
                  count: "21 articles",
                  description: "New features and platform enhancements",
                  color: "text-purple-400",
                  bgColor: "bg-purple-500/20",
                },
              ].map((cat, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <Badge className={`${cat.bgColor} ${cat.color} mb-4`}>{cat.count}</Badge>
                    <h3 className="text-lg font-bold text-white mb-2">{cat.category}</h3>
                    <p className="text-gray-400 text-sm">{cat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Stay Ahead of Cyber Threats
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get expert cybersecurity insights and stay informed about the latest threats and protection strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-8 py-4">
                Subscribe to Newsletter
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-400 hover:bg-orange-500/10 text-lg px-8 py-4"
              >
                Follow on Social Media
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
