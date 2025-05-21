"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useState, type FormEvent } from "react"
import Link from "next/link"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Google Sheet submission
      const googleSheetUrl =
        "https://docs.google.com/spreadsheets/d/1OJGU5baiimEkZbCZoA7ShFMI_O_BL-v5-9aJykTQQYQ/edit?usp=sharing"
      const formUrl =
        "https://script.google.com/macros/s/AKfycbxLuaA8Jy2gypYjQqQfGGZxdqi2rD49eT5lrGG1lkwLKlXC3zJGhOy7n4CJI-Jj2ROn/exec"

      const response = await fetch(formUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Your message has been sent successfully!",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          success: false,
          message: "Failed to send your message. Please try again later.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-primary">Contact Me</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              <CardDescription>Reach me through these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <p>nvantan08k5@gmail.com</p>
              </Link>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <p>0974646370</p>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <p>Buon Don, Dak Lak, Vietnam</p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="https://github.com/tentikeiii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/tannvptit05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
              <CardDescription>Fill in your information and I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`p-3 rounded-md ${submitStatus.success ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"}`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <Card>
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124827.25334410097!2d107.65696107331169!3d12.878512339293177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3172440c826b2bed%3A0xe63fe737080ef198!2sBu%C3%B4n%20%C4%90%C3%B4n%2C%20Dak%20Lak%2C%20Vietnam!5e0!3m2!1sen!2s!4v1620120576245!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
              className="rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
