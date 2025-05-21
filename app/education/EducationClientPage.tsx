"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { School, GraduationCap, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function EducationClientPage() {
  const educationItems = [
    {
      institution: "Posts and Telecommunications Institute of Technology",
      degree: "Electronic and Telecommunication Engineering",
      period: "2023 - Present",
      gpa: "3.2/4.0",
      description:
        "Specialization in Internet Networks and Services with focus on network infrastructure and digital transformation",
      icon: <GraduationCap className="h-10 w-10 text-[#38ada9]" />,
    },
    {
      institution: "Tran Dai Nghia High School",
      degree: "High School Diploma",
      period: "2020 - 2023",
          icon: <School className="h-10 w-10 text-[#38ada9]" />,
    },
    {
      institution: "Tran Quang Dieu Middle School",
      degree: "Middle School Education",
      period: "2016 - 2020",
      icon: <BookOpen className="h-10 w-10 text-[#38ada9]" />,
    },
    {
      institution: "Le Van Tam Elementary School",
      degree: "Elementary Education",
      period: "2011 - 2016",
      icon: <BookOpen className="h-10 w-10 text-[#38ada9]" />,
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
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-primary">Education</h1>

      <motion.div className="max-w-3xl mx-auto space-y-8" variants={container} initial="hidden" animate="show">
        {educationItems.map((item, index) => (
          <motion.div key={index} variants={item}>
            <Card className="relative overflow-hidden border-l-4 border-l-[#38ada9]">
              <div className="absolute top-6 left-6">{item.icon}</div>
              <CardHeader className="pl-24">
                <CardTitle className="text-xl text-primary">{item.institution}</CardTitle>
                <CardDescription>
                  {item.degree} | {item.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-24">
                <p className="text-muted-foreground font-merriweather">{item.description}</p>
                {item.gpa && <p className="mt-2 font-medium">GPA: {item.gpa}</p>}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
