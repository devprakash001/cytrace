import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Link, CheckCircle, Shield, Coins } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BlockchainSecurity() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
              <Link className="w-4 h-4 mr-2" />
              Blockchain Security
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Blockchain Security Assessment
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive blockchain and cryptocurrency security assessments covering smart contracts, DeFi protocols,
              NFT platforms, and blockchain infrastructure. Protect your digital assets and ensure the integrity of your
              blockchain applications.
            </p>
          </div>
        </section>

        {/* Blockchain Technologies */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Supported Blockchain Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  blockchain: "Ethereum",
                  symbol: "ETH",
                  features: ["Smart Contracts", "DeFi Protocols", "NFT Platforms", "Layer 2 Solutions"],
                },
                {
                  blockchain: "Bitcoin",
                  symbol: "BTC",
                  features: ["Payment Systems", "Lightning Network", "Multi-sig Wallets", "Cold Storage"],
                },
                {
                  blockchain: "Binance Smart Chain",
                  symbol: "BSC",
                  features: ["DeFi Applications", "Cross-chain Bridges", "Yield Farming", "DEX Platforms"],
                },
                {
                  blockchain: "Polygon",
                  symbol: "MATIC",
                  features: ["Scaling Solutions", "DApp Development", "NFT Marketplaces", "Gaming Platforms"],
                },
                {
                  blockchain: "Solana",
                  symbol: "SOL",
                  features: ["High-speed Transactions", "DeFi Protocols", "NFT Collections", "Web3 Applications"],
                },
                {
                  blockchain: "Cardano",
                  symbol: "ADA",
                  features: ["Smart Contracts", "Stake Pools", "Native Tokens", "Governance Systems"],
                },
                {
                  blockchain: "Avalanche",
                  symbol: "AVAX",
                  features: [
                    "Subnet Development",
                    "DeFi Ecosystem",
                    "Cross-chain Interoperability",
                    "Enterprise Solutions",
                  ],
                },
                {
                  blockchain: "Polkadot",
                  symbol: "DOT",
                  features: [
                    "Parachain Security",
                    "Cross-chain Communication",
                    "Governance Mechanisms",
                    "Staking Systems",
                  ],
                },
              ].map((chain, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                      {chain.symbol}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4">{chain.blockchain}</h3>
                    <ul className="space-y-2">
                      {chain.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Assessment Areas */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Security Assessment Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  area: "Smart Contract Security",
                  description: "Comprehensive smart contract auditing and vulnerability assessment",
                  vulnerabilities: [
                    "Reentrancy attacks",
                    "Integer overflow/underflow",
                    "Access control issues",
                    "Logic flaws",
                    "Gas optimization",
                  ],
                },
                {
                  area: "DeFi Protocol Security",
                  description: "Decentralized finance protocol security analysis",
                  vulnerabilities: [
                    "Flash loan attacks",
                    "Oracle manipulation",
                    "Liquidity pool exploits",
                    "Governance attacks",
                    "MEV vulnerabilities",
                  ],
                },
                {
                  area: "Wallet Security",
                  description: "Cryptocurrency wallet security assessment",
                  vulnerabilities: [
                    "Private key management",
                    "Seed phrase security",
                    "Multi-signature implementation",
                    "Hardware wallet integration",
                    "Mobile wallet security",
                  ],
                },
                {
                  area: "Exchange Security",
                  description: "Cryptocurrency exchange platform security",
                  vulnerabilities: [
                    "Hot wallet security",
                    "Cold storage implementation",
                    "API security",
                    "KYC/AML compliance",
                    "Trading engine security",
                  ],
                },
                {
                  area: "NFT Platform Security",
                  description: "Non-fungible token platform security analysis",
                  vulnerabilities: [
                    "Metadata security",
                    "Minting vulnerabilities",
                    "Marketplace exploits",
                    "Royalty mechanisms",
                    "Cross-chain bridges",
                  ],
                },
                {
                  area: "Blockchain Infrastructure",
                  description: "Blockchain node and network security assessment",
                  vulnerabilities: [
                    "Node security",
                    "Network consensus",
                    "P2P communication",
                    "Validator security",
                    "Fork protection",
                  ],
                },
              ].map((area, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{area.area}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{area.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Common Vulnerabilities:</h4>
                      <ul className="space-y-1">
                        {area.vulnerabilities.map((vuln, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                            {vuln}
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

        {/* Security Tools */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Blockchain Security Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Analysis Tools</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                      Mythril for smart contract analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                      Slither static analysis framework
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                      Echidna property-based testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                      MythX security analysis platform
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                      Securify automated verification
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Coins className="w-8 h-8 text-orange-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Testing Frameworks</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Hardhat development environment
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Truffle testing framework
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Foundry testing toolkit
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Brownie Python framework
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      Ganache local blockchain
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Audit Process */}
        <section className="px-4 sm:px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Blockchain Security Audit Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Code Review & Analysis",
                      desc: "Comprehensive manual and automated code analysis",
                    },
                    {
                      step: "2",
                      title: "Vulnerability Assessment",
                      desc: "Identify security vulnerabilities and attack vectors",
                    },
                    {
                      step: "3",
                      title: "Business Logic Testing",
                      desc: "Verify intended functionality and edge cases",
                    },
                    {
                      step: "4",
                      title: "Gas Optimization Review",
                      desc: "Analyze gas usage and optimization opportunities",
                    },
                    {
                      step: "5",
                      title: "Security Report",
                      desc: "Detailed findings with severity ratings and recommendations",
                    },
                    {
                      step: "6",
                      title: "Remediation Support",
                      desc: "Assist with fixing identified vulnerabilities",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-yellow-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Audit Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Enhanced security posture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coins className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Asset protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">User trust & confidence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Link className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Regulatory compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Risk mitigation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Secure Your Blockchain Assets
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Protect your blockchain applications and digital assets with our comprehensive security assessments.
            </p>
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-lg px-8 py-4 glow-button">
              Contact Us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
