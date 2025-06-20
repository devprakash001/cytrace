"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Globe, AlertTriangle, CheckCircle, Users, Award, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CybersecurityWebsite() {
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["Secure", "Protect", "Defend", "Monitor"]

  useEffect(() => {
    const word = words[currentWordIndex]
    let i = 0

    const typeInterval = setInterval(() => {
      if (i <= word.length) {
        setTypedText(word.slice(0, i))
        i++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }, 2000)
      }
    }, 150)

    return () => clearInterval(typeInterval)
  }, [currentWordIndex])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => {
            // Use deterministic values based on index
            const angle = (i * 137.5) % 360; // Golden angle
            const radius = 40 + (i * 0.5); // Increasing radius
            const left = 50 + radius * Math.cos(angle * Math.PI / 180);
            const top = 50 + radius * Math.sin(angle * Math.PI / 180);
            const delay = (i * 0.1) % 3; // Sequential delays
            const duration = 2 + (i % 3); // Alternating durations

            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24">
        <div className="text-center max-w-6xl mx-auto">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50 animate-bounce text-xs sm:text-sm">
            🔒 Advanced Cybersecurity Solutions
          </Badge>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="animate-pulse">|</span>
            <br />
            <span className="text-2xl sm:text-4xl md:text-6xl text-gray-300">Your Digital Assets</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Advanced threat detection, real-time monitoring, and enterprise-grade security solutions to protect your
            business from cyber threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4 glow-button w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
              { icon: Users, value: "10K+", label: "Protected Clients" },
              { icon: Award, value: "24/7", label: "Security Monitoring" },
              { icon: Clock, value: "<1min", label: "Threat Response" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2 counter-animation">{stat.value}</div>
                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect your business
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Lock,
                title: "Endpoint Protection",
                description: "Advanced malware detection and real-time threat prevention across all devices",
                features: ["AI-Powered Detection", "Zero-Day Protection", "Behavioral Analysis"],
              },
              {
                icon: Eye,
                title: "Security Monitoring",
                description: "24/7 surveillance with instant alerts and automated response systems",
                features: ["Real-time Alerts", "Threat Intelligence", "Incident Response"],
              },
              {
                icon: Globe,
                title: "Network Security",
                description: "Comprehensive network protection with advanced firewall and intrusion detection",
                features: ["Firewall Management", "VPN Solutions", "Network Segmentation"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm sm:text-base">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Detection Section */}
      <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-red-500/20 text-red-400 border-red-500/50 text-xs sm:text-sm">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Threat Detection
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                Advanced AI-Powered
                <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Threat Detection
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-8">
                Our machine learning algorithms analyze millions of data points in real-time to identify and neutralize
                threats before they impact your business.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time malware detection",
                  "Behavioral anomaly analysis",
                  "Zero-day exploit prevention",
                  "Automated threat response",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 animate-pulse flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-cyan-500/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm sm:text-base">Threat Level</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50 text-xs sm:text-sm">LOW</Badge>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-cyan-400">847</div>
                      <div className="text-xs sm:text-sm text-gray-400">Threats Blocked</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-green-400">99.8%</div>
                      <div className="text-xs sm:text-sm text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-gray-900/50">
        
      <Footer  />
      </div>

    </div>
  )
}
