"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import ReportNavigation from "@/components/report-navigation"
import { TypeAnimation } from "@/components/type-animation"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function InternetRoleClientPage() {
  const sections = [
    {
      id: "a",
      title: 'Vietnam\'s national domain ".vn"',
      description: "Analysis of the national domain and its role in digital identity",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600 dark:text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      color: "bg-blue-50 dark:bg-blue-950",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: "b",
      title: "IP addresses and Autonomous System Numbers (ASN)",
      description: "Role of IP addresses and ASNs in network connectivity and autonomy",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600 dark:text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      color: "bg-blue-50 dark:bg-blue-950",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: "c",
      title: "Domain Name System (DNS)",
      description: "The DNS system's importance in cybersecurity and network management",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600 dark:text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      color: "bg-blue-50 dark:bg-blue-950",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 py-12">
        <ReportNavigation currentPage="internet-role" />

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              <TypeAnimation
                phrases={["Internet Resources", "II. The Role of Internet Resources"]}
                speed={70}
                className="inline-block"
              />
            </h1>

            <div className="relative mt-6 mb-16">
              <div className="bg-muted rounded-2xl p-8">
                <p className="text-lg leading-relaxed text-foreground">
                  Internet resources play a crucial role in building and developing network infrastructure. This section
                  will analyze in detail the types of Internet resources, the role of Internet exchange points, and
                  effective management methods.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-8 mb-12" variants={container} initial="hidden" animate="show">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={`/report/internet-role/${section.id}`} passHref>
                  <div
                    className={`${section.color} border ${section.borderColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">{section.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{section.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{section.description}</p>
                          <div className="inline-flex items-center text-blue-600 dark:text-cyan-400 font-medium">
                            Read more
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-between mt-12">
            <Link
              href="/report/intro"
              className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back: I. Introduction
            </Link>

            <Link
              href="/report/infrastructure"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-700 transition-colors"
            >
              Next: III. The Role of Internet Infrastructure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
