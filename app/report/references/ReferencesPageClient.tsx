"use client"

import { motion } from "framer-motion"
import ReportNavigation from "@/components/report-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReferencesPageClient() {
  const references = [
    {
      id: 1,
      author: "Central Executive Committee of the Communist Party of Vietnam",
      year: 2024,
      title:
        "Resolution No. 57-NQ/TW dated December 22, 2024, on breakthrough development of science, technology, innovation, and national digital transformation",
      url: "https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-quyet-ve-dot-pha-phat-trien-khoa-hoc-cong-nghe-doi-moi-sang-tao-va-chuyen-doi-so-quoc-gia-119241224180048642.htm#:~:text=Ph%C3%A1t%20tri%E1%BB%83n%20h%E1%BA%A1%20t%E1%BA%A7ng%2C%20nh%E1%BA%A5t,li%E1%BB%87u%2C%20kinh%20t%E1%BA%BF%20d%E1%BB%AF%20li%E1%BB%87u",
    },
    {
      id: 2,
      author: "Ministry of Science and Technology",
      year: 2025,
      title: "Speech by Deputy Minister Bùi Hoàng Phương at the ICANN APAC DNS Forum 2025",
      url: "https://mic.gov.vn/icann-apac-dns-forum-2025-ket-noi-cong-dong-chuyen-gia-vi-mot-nen-internet-bao-trum-197250508164722214.htm#:~:text=Ph%C3%A1t%20bi%E1%BB%83u%20khai%20m%E1%BA%A1c%20H%E1%BB%99i,ph%C3%A1t%20tri%E1%BB%83n%2C%20thu%20nh%E1%BA%ADp%20cao",
    },
    {
      id: 3,
      author: "Vietnam Internet Network Information Center (VNNIC)",
      year: 2024,
      title: "Vietnam National Domain '.VN': Digital Brand Identity and Driver for Digital Economy",
      publisher: "Academy VNNIC",
      url: "https://academy.vnnic.vn/blog/ten-mien-vn-thuong-hieu-so-kinh-te-so-xa-hoi-so#:~:text=T%C3%AAn%20mi%E1%BB%81n%20m%C3%A3%20qu%E1%BB%91c%20gia,c%C3%A1c%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20tr%E1%BB%B1c%20tuy%E1%BA%BFn",
    },
  ]

  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 py-12">
        <ReportNavigation currentPage="references" />

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              VI. References
            </h1>

            <div className="bg-card rounded-2xl p-8 shadow-lg mb-12">
              <ul className="space-y-6 text-foreground">
                {references.map((ref) => (
                  <motion.li
                    key={ref.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="pl-8 relative"
                  >
                    <span className="absolute left-0 top-0 font-bold">[{ref.id}]</span>
                    <p>
                      {ref.author} ({ref.year}). <em>{ref.title}</em>. {ref.publisher && `${ref.publisher}.`}
                      {ref.url && (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center ml-2 text-blue-600 dark:text-cyan-400 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Link
                        </a>
                      )}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between mt-12">
              <Link
                href="/report/conclusion"
                className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back: V. Conclusion
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
