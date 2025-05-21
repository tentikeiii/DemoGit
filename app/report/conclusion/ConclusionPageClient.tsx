"use client"

import { motion } from "framer-motion"
import ReportNavigation from "@/components/report-navigation"
import Link from "next/link"
import { TypeAnimation } from "@/components/type-animation"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ConclusionPageClient() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 py-12">
        <ReportNavigation currentPage="conclusion" />

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              <TypeAnimation phrases={["Conclusion", "V. Conclusion"]} speed={70} className="inline-block" />
            </h1>

            <div className="bg-muted border-l-4 border-l-primary rounded-r-2xl p-8 mb-12 shadow-lg">
              <blockquote className="text-xl font-medium italic text-foreground leading-relaxed">
                "The nation's critical Internet resources and infrastructure, from the ".vn" domain to IP addresses and
                ASNs, the DNS system, and the VNIX Internet exchange, serve as foundational pillars driving innovation
                and digital transformation."
              </blockquote>
            </div>

            <div className="space-y-6 mb-12 bg-card rounded-2xl p-8 shadow-lg">
              <motion.p
                className="text-lg text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                The nation's critical Internet resources and infrastructure serve as foundational pillars driving
                innovation and digital transformation. They not only facilitate fast, secure, and autonomous digital
                connectivity, enhancing the competitiveness of the digital economy, but also contribute to protecting
                national sovereignty and cybersecurity.
              </motion.p>

              <motion.p
                className="text-lg text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Rooted in the spirit of Resolution 57 NQ/TW, maximizing the value of these resources will create
                strategic advantages for Vietnam in the digital era. To achieve this goal, innovative solutions are
                needed, such as leveraging DNS data for cybersecurity, utilizing VNIX for digital content distribution,
                and integrating the ".vn" domain into the national digital identity system.
              </motion.p>

              <motion.p
                className="text-lg text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Through these efforts, Vietnam's Internet infrastructure will truly become a lever to accelerate
                breakthrough digital transformation, strengthen intrinsic capabilities, and enhance the nation's
                economic autonomy.
              </motion.p>
            </div>

            <motion.div
              className="bg-muted p-8 rounded-2xl mb-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact</h2>
              <p className="text-foreground mb-4">
                If you have any questions or comments about this report, please contact:
              </p>
              <Link
                href="/contact"
                className="text-blue-600 dark:text-cyan-400 hover:underline font-medium inline-flex items-center"
              >
                Contact page
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <div className="flex justify-between mt-12">
              <Link
                href="/report/ideas"
                className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back: IV. Proposals
              </Link>

              <Link
                href="/report/references"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-700 transition-colors"
              >
                Next: VI. References
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
