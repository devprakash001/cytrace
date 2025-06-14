"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, Shield, Users, CheckCircle, ArrowRight, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    hearAbout: "",
    message: "",
    newsletter: false,
    urgency: "normal",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        hearAbout: "",
        message: "",
        newsletter: false,
        urgency: "normal",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]" />

        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50 hover:bg-cyan-500/30 transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Contact Cytrace
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Have questions about our services or want to discuss your cybersecurity needs? Our team of experts is ready
            to help. Reach out to us using the contact information below or fill out our enhanced form.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-900/30 border border-cyan-500/20">
              <Clock className="w-6 h-6 text-cyan-400" />
              <div className="text-left">
                <div className="text-sm text-gray-400">Response Time</div>
                <div className="font-semibold text-white">{"< 2 Hours"}</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-900/30 border border-cyan-500/20">
              <Shield className="w-6 h-6 text-cyan-400" />
              <div className="text-left">
                <div className="text-sm text-gray-400">Security Level</div>
                <div className="font-semibold text-white">Enterprise</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-900/30 border border-cyan-500/20">
              <Users className="w-6 h-6 text-cyan-400" />
              <div className="text-left">
                <div className="text-sm text-gray-400">Support</div>
                <div className="font-semibold text-white">24/7 Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-gray-400 mb-2">General Inquiries:</p>
                  <a
                    href="mailto:info@cytrace.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    info@cytrace.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Technical Support:</p>
                  <a
                    href="mailto:support@cytrace.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    support@cytrace.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Emergency Response:</p>
                  <a
                    href="mailto:emergency@cytrace.com"
                    className="text-red-400 hover:text-red-300 transition-colors font-medium"
                  >
                    emergency@cytrace.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-gray-400 mb-2">Main Office:</p>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Support Hotline:</p>
                  <a
                    href="tel:+1-555-987-6543"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    +1 (555) 987-6543
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Emergency Line:</p>
                  <a
                    href="tel:+1-555-911-HELP"
                    className="text-red-400 hover:text-red-300 transition-colors font-medium"
                  >
                    +1 (555) 911-HELP
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-gray-400 mb-2">Headquarters:</p>
                  <address className="text-gray-300 not-italic leading-relaxed">
                    123 Security Avenue
                    <br />
                    Suite 500
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </address>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-400">Business Hours:</p>
                  <p className="text-sm text-gray-300">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-2">Send Us a Message</CardTitle>
              <p className="text-gray-400">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Urgency Selector */}
                  <div className="mb-6">
                    <Label className="text-base font-medium mb-3 block text-white">Request Priority</Label>
                    <RadioGroup
                      value={formData.urgency}
                      onValueChange={(value) => handleInputChange("urgency", value)}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                        <RadioGroupItem
                          value="normal"
                          id="normal"
                          className="border-cyan-500 text-cyan-400 focus:ring-cyan-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <Label htmlFor="normal" className="cursor-pointer text-white">
                          Normal (2-4 hours)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-yellow-600/50 hover:border-yellow-500 transition-colors">
                        <RadioGroupItem
                          value="urgent"
                          id="urgent"
                          className="border-yellow-500 text-yellow-400 focus:ring-yellow-500 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                        />
                        <Label htmlFor="urgent" className="cursor-pointer text-yellow-400">
                          Urgent (1 hour)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-red-600/50 hover:border-red-500 transition-colors">
                        <RadioGroupItem
                          value="emergency"
                          id="emergency"
                          className="border-red-500 text-red-400 focus:ring-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                        />
                        <Label htmlFor="emergency" className="cursor-pointer text-red-400">
                          Emergency (15 mins)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-white">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                        className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-white">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                        className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-white">
                      Company
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Enter your company name"
                      className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-white">
                      Subject *
                    </Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 [&>span]:text-white">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-cyan-500/50 text-cyan-400">
                        <SelectItem
                          value="general"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 focus:text-cyan-300 focus:bg-cyan-500/10"
                        >
                          General Inquiry
                        </SelectItem>
                        <SelectItem
                          value="services"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 focus:text-cyan-300 focus:bg-cyan-500/10"
                        >
                          Services Information
                        </SelectItem>
                        <SelectItem
                          value="quote"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 focus:text-cyan-300 focus:bg-cyan-500/10"
                        >
                          Request a Quote
                        </SelectItem>
                        <SelectItem
                          value="support"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 focus:text-cyan-300 focus:bg-cyan-500/10"
                        >
                          Technical Support
                        </SelectItem>
                        <SelectItem
                          value="partnership"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 focus:text-cyan-300 focus:bg-cyan-500/10"
                        >
                          Partnership Opportunity
                        </SelectItem>
                        <SelectItem
                          value="security-incident"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 focus:text-cyan-300 focus:bg-cyan-500/10"
                        >
                          Security Incident
                        </SelectItem>
                        <SelectItem
                          value="consultation"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 focus:text-cyan-300 focus:bg-cyan-500/10"
                        >
                          Free Consultation
                        </SelectItem>
                        <SelectItem
                          value="other"
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 focus:text-cyan-300 focus:bg-cyan-500/10"
                        >
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-white">How did you hear about us?</Label>
                    <RadioGroup
                      value={formData.hearAbout}
                      onValueChange={(value) => handleInputChange("hearAbout", value)}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="search"
                          id="search"
                          className="border-cyan-500 text-cyan-400 focus:ring-cyan-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <Label htmlFor="search" className="cursor-pointer text-white">
                          Search Engine
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="social"
                          id="social"
                          className="border-cyan-500 text-cyan-400 focus:ring-cyan-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <Label htmlFor="social" className="cursor-pointer text-white">
                          Social Media
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="referral"
                          id="referral"
                          className="border-cyan-500 text-cyan-400 focus:ring-cyan-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <Label htmlFor="referral" className="cursor-pointer text-white">
                          Referral
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="conference"
                          id="conference"
                          className="border-cyan-500 text-cyan-400 focus:ring-cyan-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <Label htmlFor="conference" className="cursor-pointer text-white">
                          Conference/Event
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="advertisement"
                          id="advertisement"
                          className="border-cyan-500 text-cyan-400 focus:ring-cyan-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <Label htmlFor="advertisement" className="cursor-pointer text-white">
                          Advertisement
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="other-source"
                          id="other-source"
                          className="border-cyan-500 text-cyan-400 focus:ring-cyan-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <Label htmlFor="other-source" className="cursor-pointer text-white">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your cybersecurity needs or questions in detail..."
                      className="bg-gray-800 border-gray-700 text-white min-h-[150px] focus:border-cyan-500 transition-colors"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm cursor-pointer text-white">
                      Subscribe to our cybersecurity newsletter for the latest threats and protection tips
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 w-full text-lg py-6 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Global Offices */}
      <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              <Globe className="w-4 h-4 mr-2" />
              Global Presence
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">Our Offices Worldwide</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              With offices around the globe, we provide localized cybersecurity expertise while leveraging our global
              knowledge base and threat intelligence network.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "New York",
                country: "United States",
                address: "123 Security Avenue, Suite 500, New York, NY 10001",
                phone: "+1 (555) 123-4567",
                email: "newyork@cytrace.com",
                timezone: "EST",
                isHQ: true,
              },
              {
                city: "London",
                country: "United Kingdom",
                address: "456 Cyber Street, Floor 3, London, EC2A 1AB",
                phone: "+44 20 1234 5678",
                email: "london@cytrace.com",
                timezone: "GMT",
                isHQ: false,
              },
              {
                city: "Singapore",
                country: "Singapore",
                address: "789 Digital Tower, #08-01, Singapore 049315",
                phone: "+65 6123 4567",
                email: "singapore@cytrace.com",
                timezone: "SGT",
                isHQ: false,
              },
              {
                city: "Sydney",
                country: "Australia",
                address: "101 Tech Park, Level 15, Sydney, NSW 2000",
                phone: "+61 2 1234 5678",
                email: "sydney@cytrace.com",
                timezone: "AEDT",
                isHQ: false,
              },
              {
                city: "Berlin",
                country: "Germany",
                address: "234 Sicherheit Straße, 10115 Berlin",
                phone: "+49 30 1234 5678",
                email: "berlin@cytrace.com",
                timezone: "CET",
                isHQ: false,
              },
              {
                city: "Tokyo",
                country: "Japan",
                address: "567 Cyber Building, 4F, Minato-ku, Tokyo 106-0032",
                phone: "+81 3 1234 5678",
                email: "tokyo@cytrace.com",
                timezone: "JST",
                isHQ: false,
              },
            ].map((office, index) => (
              <Card
                key={index}
                className="group bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{office.city}</h3>
                      <p className="text-cyan-400">{office.country}</p>
                    </div>
                    {office.isHQ && (
                      <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/50">
                        HQ
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <a
                        href={`tel:${office.phone}`}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">Timezone: {office.timezone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="px-4 sm:px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our team of cybersecurity experts is ready to help you protect your organization from evolving cyber
            threats. Contact us today to get started with a free security assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-10 py-6 transition-all duration-300 hover:scale-105">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 text-lg px-10 py-6 transition-all duration-300 hover:scale-105"
            >
              View Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-4">Trusted by 500+ companies worldwide</p>
            <div className="flex items-center justify-center space-x-8 text-gray-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                <div className="text-xs">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{"<2hrs"}</div>
                <div className="text-xs">Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="text-xs">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">ISO 27001</div>
                <div className="text-xs">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
