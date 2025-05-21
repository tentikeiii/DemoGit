"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import ReportNavigation from "@/components/report-navigation"
import { TypeAnimation } from "@/components/type-animation"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function IdeasClientPage() {
  const ideas = [
    {
      id: "1",
      title: "Exploiting DNS data for network security analysis",
      description: "Building systems to collect and analyze DNS logs for security enhancement",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: "bg-blue-50 dark:bg-blue-950",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: "2",
      title: "Exploiting VNIX for digital content network models",
      description: "Enhancing content distribution through the national internet exchange",
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
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      ),
      color: "bg-blue-50 dark:bg-blue-950",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: "3",
      title: "Promoting the use of country code domains in digital identity",
      description: "Expanding programs to encourage .vn domain adoption",
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
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        <ReportNavigation currentPage="ideas" />

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              <TypeAnimation
                phrases={["Innovative Solutions", "IV. Proposals for Innovative Solutions"]}
                speed={70}
                className="inline-block"
              />
            </h1>

            <div className="relative mt-6 mb-16">
              <div className="bg-muted rounded-2xl p-8">
                <p className="text-lg leading-relaxed text-foreground">
                  Based on the analysis of the current state and challenges in managing Internet resources in Vietnam,
                  this section proposes several solutions aimed at optimizing the use of resources and improving the
                  efficiency of the network infrastructure.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-8 mb-12" variants={container} initial="hidden" animate="show">
            {ideas.map((idea, index) => (
              <motion.div
                key={idea.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={`/report/ideas/${idea.id}`} passHref>
                  <div
                    className={`${idea.color} border ${idea.borderColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">{idea.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{idea.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{idea.description}</p>
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
              href="/report/infrastructure"
              className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back: III. The Role of Internet Infrastructure
            </Link>

            <Link
              href="/report/conclusion"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-700 transition-colors"
            >
              Next: V. Conclusion
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
