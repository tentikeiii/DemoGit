"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "@/components/type-animation"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="block text-primary text-glow mt-2">Nguyen Van Tan</span>
            </h1>

            <div className="h-12 mb-6">
              <TypeAnimation
                phrases={["2nd Year Internet Networks & Services Student", "I'm a chill guy"]}
                className="text-xl md:text-2xl text-primary/90"
                speed={100}
              />
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              As a student passionate about Internet infrastructure and digital transformation in Vietnam, I'm
              constantly exploring, researching, and developing related projects. Feel free to explore my work to learn
              more about my journey and passion.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/80 animate-pulse-cyan"
                size="lg"
                asChild
              >
                <Link href="/about">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/20" size="lg" asChild>
                <Link href="/contact">
                  Contact Me <Mail className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-cyan"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary animate-float cyan-border-glow">
                <Image
                  src="/images/profile-casual.png"
                  alt="Nguyen Van Tan"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-lg text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 cyan-gradient-text">Get In Touch</h2>
              <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                Do you have a project or collaboration opportunity? I'm always open to discussing new ideas and
                possibilities. Feel free to reach out via email or social media.
              </p>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/80 animate-pulse-cyan"
                size="lg"
                asChild
              >
                <Link href="/contact">
                  Contact Now <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
