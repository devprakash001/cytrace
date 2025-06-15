"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Particles from "@/components/particle"
import { Shield, Lock, Eye, Globe, AlertTriangle, CheckCircle, Users, Award, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
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
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50 animate-bounce text-xs sm:text-sm">
                🔒 Advanced Cybersecurity Solutions
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse">|</span>
              <br />
              <span className="text-2xl sm:text-4xl md:text-6xl text-gray-300">Your Digital Assets</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Advanced threat detection, real-time monitoring, and enterprise-grade security solutions to protect your
              business from cyber threats.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4 glow-button w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 1 }}
            ></motion.div>
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            ></motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
                { icon: Users, value: "10K+", label: "Protected Clients" },
                { icon: Award, value: "24/7", label: "Security Monitoring" },
                { icon: Clock, value: "<1min", label: "Threat Response" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2 counter-animation">{stat.value}</div>
                  <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions tailored to protect your business
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 backdrop-blur-sm">
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Threat Detection Section */}
        <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
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
                  Our machine learning algorithms analyze millions of data points in real-time to identify and
                  neutralize threats before they impact your business.
                </p>
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, staggerChildren: 0.1 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Real-time malware detection",
                    "Behavioral anomaly analysis",
                    "Zero-day exploit prevention",
                    "Automated threat response",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 animate-pulse flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-cyan-500/20">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm sm:text-base">Threat Level</span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50 text-xs sm:text-sm">
                        LOW
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full animate-pulse"
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                    <motion.div
                      className="grid grid-cols-2 gap-4 mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-cyan-400">847</div>
                        <div className="text-xs sm:text-sm text-gray-400">Threats Blocked</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-green-400">99.8%</div>
                        <div className="text-xs sm:text-sm text-gray-400">Success Rate</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <motion.div
          className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-gray-900/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  )
}
