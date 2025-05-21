"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function AboutPageClient() {
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
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-primary">About Me</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg border-4 border-primary/30">
            <Image
              src="/images/profile.png"
              alt="Nguyen Van Tan"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Nguyen Van Tan</h2>
          <p className="mb-4 font-merriweather text-muted-foreground">
            I am a second-year student specializing in Internet Networks and Services at the Posts and
            Telecommunications Institute of Technology. I'm passionate about researching internet infrastructure and its
            role in digital transformation in Vietnam.
          </p>
          <p className="font-merriweather text-muted-foreground">
            With in-depth knowledge of internet resources, I focus on researching solutions to optimize national network
            infrastructure, especially in the areas of DNS, IPv6, and Internet Exchange Points (VNIX).
          </p>
        </div>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">About myself</CardTitle>
              <CardDescription>Hobbies and Passions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                I enjoy listening to music, watching movies, and playing football with my friends in my free time. I am
                passionate about exploring new things in life, especially learning about people, cultures, and creative
                experiences. Additionally, I have a strong passion for developing financial mindset and creating
                opportunities to earn money in a sustainable and smart way. I believe financial freedom is an important
                part of pursuing bigger goals in life.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Contact Information</CardTitle>
              <CardDescription>Ways to reach me</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>nvantan08k5@gmail.com</span>
                </Link>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>0974646370</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Buon Don, Dak Lak, Vietnam</span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Link
                    href="https://github.com/tentikeiii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/tannvptit05/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
