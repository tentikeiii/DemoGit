"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ReportPageClient() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-[90vh] bg-background">
      {/* Hero Section - Redesigned */}
      <div className="relative overflow-hidden py-24 md:py-32">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/80 via-background to-background z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-cyan-500/5 backdrop-blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="container relative z-10 mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent drop-shadow-sm">
                  RESEARCH REPORT
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl font-light text-foreground/90 mb-12 max-w-4xl mx-auto tracking-wide">
                <span className="inline-block whitespace-nowrap">
                  The Role of Internet Resources and National Internet Infrastructure in Digital Transformation
                </span>
              </p>

              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-cyan-950 rounded-full px-8 py-6 text-lg font-medium shadow-lg shadow-cyan-500/20 transition-all duration-300"
                asChild
              >
                <Link href="/report/intro">
                  Explore the Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Report Structure */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Report Structure</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/30"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    title: "Introduction",
                    description: "Overview of digital transformation strategy and the role of internet infrastructure",
                    href: "/report/intro",
                  },
                  {
                    title: "Internet Resources",
                    description: "Analysis of national domain, IP addresses/ASNs, and DNS systems",
                    href: "/report/internet-role",
                  },
                  {
                    title: "Infrastructure",
                    description: "Research on National Internet Exchange Point (VNIX)",
                    href: "/report/infrastructure",
                  },
                  {
                    title: "Innovative Solutions",
                    description: "Ideas for leveraging internet resources for digital transformation",
                    href: "/report/ideas",
                  },
                  {
                    title: "Conclusion",
                    description: "Summary of findings and future outlook",
                    href: "/report/conclusion",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row items-center"
                  >
                    <div className="flex items-center order-1 md:w-1/2 justify-end md:pr-8">
                      <div className={`md:text-right ${index % 2 === 0 ? "md:block" : "md:hidden"}`}>
                        <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                        <p className="text-foreground/80 mt-1">{item.description}</p>
                        <Link
                          href={item.href}
                          className="text-primary hover:text-primary/80 font-medium inline-flex items-center mt-2"
                        >
                          Read section <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex items-center order-2 md:w-1/2 md:pl-8">
                      <div className={`${index % 2 === 1 ? "md:block" : "md:hidden"}`}>
                        <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                        <p className="text-foreground/80 mt-1">{item.description}</p>
                        <Link
                          href={item.href}
                          className="text-primary hover:text-primary/80 font-medium inline-flex items-center mt-2"
                        >
                          Read section <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto glass-effect rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Explore  Research?</h2>
          <p className="text-foreground/80 mb-8">
            Join me in exploring the internet resources and infrastructure involved in Vietnam's digital transformation through these detailed analyses.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 text-primary-foreground rounded-full px-8 shadow-lg"
            asChild
          >
            <Link href="/report/intro">
              Start Reading
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
