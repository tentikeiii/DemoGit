"use client"

import { motion } from "framer-motion"
import ReportNavigation from "@/components/report-navigation"
import { TypeAnimation } from "@/components/type-animation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function IntroPageClient() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 py-12">
        <ReportNavigation currentPage="intro" />

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-glow">
              <TypeAnimation phrases={["Introduction", "I. Introduction"]} speed={70} className="inline-block" />
            </h1>

            <div className="relative mt-12 mb-16">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-1"></div>
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform -rotate-1"></div>
              <div className="relative glass-effect rounded-2xl shadow-xl p-8 z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <motion.p
                  className="text-lg leading-relaxed mb-6 text-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Digital transformation and innovation are essential pillars of the national development strategy, as
                  affirmed in Resolution No. 57-NQ/TW:{" "}
                  <span className="font-semibold text-primary">
                    "The development of science, technology, innovation, and digital transformation is becoming the
                    determining factor in the development of nations; it is a prerequisite and the best opportunity for
                    our country to grow strong and prosperous in the new era."
                  </span>{" "}
                  In this spirit, building a modern, synchronized, secure, and safe digital infrastructure is a central
                  task.
                </motion.p>

                <motion.p
                  className="text-lg leading-relaxed mb-6 text-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Resolution 57 also emphasizes that "Internet infrastructure, including DNS infrastructure, is an
                  essential component of digital infrastructure," and calls for the management and protection of the
                  national DNS system as well as the widespread adoption of the ".vn" domain name to foster the
                  development of the digital economy and digital society.
                </motion.p>

                <motion.p
                  className="text-lg leading-relaxed text-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  This article will analyze the role of Internet resources (such as the national ".vn" domain name, IP
                  addresses/ASNs, and the DNS system) and critical infrastructure (such as the Vietnam National Internet
                  Exchange – VNIX) in promoting innovation, strengthening internal capacity and autonomy of the digital
                  economy, while also contributing to cybersecurity and supporting digital businesses and e-government.
                </motion.p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Key Objectives</h3>
                <ul className="space-y-3">
                  {[
                    "Analyze the role of internet resources in digital transformation",
                    "Examine the importance of national internet infrastructure",
                    "Identify strategies for optimizing resource utilization",
                    "Propose innovative solutions for future development",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Research Methodology</h3>
                <ul className="space-y-3">
                  {[
                    "Analysis of current internet resource utilization",
                    "Evaluation of national infrastructure capabilities",
                    "Comparative study with international standards",
                    "Stakeholder interviews and expert consultations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="flex justify-end">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/report/internet-role"
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-lg animate-pulse-cyan hover:bg-primary/80 transition-colors"
                >
                  Next: II. The Role of Internet Resources
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
