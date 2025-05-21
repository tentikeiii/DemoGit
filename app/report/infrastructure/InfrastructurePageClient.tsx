"use client"

import { motion } from "framer-motion"
import ReportNavigation from "@/components/report-navigation"
import { TypeAnimation } from "@/components/type-animation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function InfrastructurePageClient() {
  const statistics = [
    {
      label: "ISPs Connected",
      value: "25+",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-600 dark:text-cyan-400",
    },
    {
      label: "Exchange Traffic",
      value: "300+ Gbps",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-600 dark:text-cyan-400",
    },
    {
      label: "Points of Presence",
      value: "3 PoPs",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-600 dark:text-cyan-400",
    },
    {
      label: "Established",
      value: "2003",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-600 dark:text-cyan-400",
    },
  ]

  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 py-12">
        <ReportNavigation currentPage="infrastructure" />

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              <TypeAnimation
                phrases={["Internet Infrastructure", "III. The Important Role of Internet Infrastructure"]}
                speed={70}
                className="inline-block"
              />
            </h1>

            <div className="relative mt-6 mb-12">
              <div className="bg-muted rounded-2xl p-8">
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  The National Internet Exchange Point (VNIX), operated by VNNIC since 2003, has become the central
                  digital infrastructure of Vietnam. Before VNIX, all domestic traffic had to be routed internationally,
                  resulting in high costs, significant latency, and difficulties in information security control. The
                  establishment of VNIX has effectively resolved this issue.
                </p>

                <p className="text-lg leading-relaxed text-foreground">
                  According to VNNIC, VNIX has fulfilled its role as a domestic Internet connection point by resolving
                  conflicts (de-peering) between network operators, reducing international connection costs, improving
                  service quality, and supporting incident response during international fiber optic cable disruptions,
                  thereby creating a stable and secure Internet connection infrastructure in Vietnam.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-full"
              >
                <div className="relative h-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-600/20 to-transparent p-6 flex items-center justify-center">
                  <div className="text-center text-lg text-foreground/70">VNIX Network Architecture Diagram</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="bg-muted rounded-2xl p-8 h-full shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Technology Innovation</h3>
                  <p className="text-foreground mb-4">
                    In addition to its role in connectivity, VNIX also contributes to the development of new
                    technologies. It is the first infrastructure in Vietnam to support both IPv4 and IPv6
                    simultaneously, built by VNNIC to enable organizations to test and promote the transition to IPv6.
                  </p>
                  <p className="text-foreground">
                    At the same time, VNIX allows all networks (ISPs, ICPs, IDCs, cloud providers, government networks,
                    etc.) with independent ASNs and IP addresses to connect bilaterally and multilaterally, enhancing
                    overall connectivity and redundancy.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-foreground">VNIX Statistics</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {statistics.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`${stat.color} p-6 rounded-2xl text-center shadow-md`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
                    <p className="text-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="bg-muted rounded-2xl p-8 mb-12 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-foreground">Global Impact</h3>
              <p className="text-lg leading-relaxed text-foreground mb-4">
                International research also shows that high-quality Internet Exchange Point (IXP) infrastructure plays a
                vital role in the digital economy and e-government. A scientific article pointed out that strong IXP
                infrastructure improves the efficiency of digital transactions, reduces latency, enhances data
                throughput, and supports the deployment of AI technologies in public administration, thereby promoting
                digital economic growth and improving state management quality.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                In Vietnam, VNIX fulfills this mission: from improving user experience to ensuring backup infrastructure
                during cable failures, VNIX helps make the Internet more streamlined, faster, and safer for both
                businesses and citizens.
              </p>
            </div>

            <div className="flex justify-between mt-12">
              <Link
                href="/report/internet-role"
                className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back: II. The Role of Internet Resources
              </Link>

              <Link
                href="/report/ideas"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-700 transition-colors"
              >
                Next: IV. Proposals for Innovative Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
