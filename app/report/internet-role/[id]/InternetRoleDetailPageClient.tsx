"use client"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import ReportNavigation from "@/components/report-navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function InternetRoleDetailPageClient({ params }: { params: { id: string } }) {
  const sections = {
    a: {
      title: '1. Vietnam\'s national domain ".vn"',
      content: `
        <p>The national domain .vn is the "official symbol representing national sovereignty in cyberspace" of Vietnam. As VNNIC has emphasized, the .vn domain not only affirms Vietnam's digital identity but also "serves as a driving force to promote digital economy and digital society activities."</p>
        
        <p>The .vn domain helps build the digital brand image of organizations, businesses, and even the government; 630,000 .vn domains mark 30 years of Vietnam's digital brand development. According to surveys, more than 85% of Vietnamese Internet users consider websites using the .vn domain more trustworthy than international domains. This shows that .vn enhances user trust, supports e-commerce transactions, and protects the country's digital sovereignty.</p>
        
        <p>In this context, encouraging businesses and organizations to build an online presence through the .vn domain is crucial: Deputy Minister Nguyễn Huy Dũng affirmed that the .vn domain "is the key to helping domestic enterprises build their brand and develop online business professionally, sustainably, and reliably."</p>
        
        <p>However, the current rate of Vietnamese enterprises using the .vn domain is still very low (about 25%), while in many developed countries this figure reaches 75–95%. This represents a significant potential to further exploit domain resources for digital transformation.</p>
        
        <p>Promoting the widespread use of the .vn domain helps individuals and businesses easily establish a digital presence, contributing to building the national brand on the Internet. At the same time, the .vn domain is also part of digital identification: it helps "convert hard-to-remember IP addresses into easily recognizable names" in the digital environment, thereby supporting services such as digital signatures and electronic authentication.</p>
        
        <p>For example, the introduction of the .id.vn domain (for individuals), which is free to register, helps young people build their digital identity early. Thus, promoting the use of the national domain in digital identification and technology services is a fundamental factor in enhancing credibility and autonomy in cyberspace.</p>
      `,
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-blue-50 dark:bg-blue-950",
      iconColor: "text-blue-600 dark:text-cyan-400",
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
    },
    b: {
      title: "2. IP addresses and Autonomous System Numbers (ASN)",
      content: `
        <p>IP addresses and Autonomous System Numbers (ASN) are fundamental resources for connecting to the Internet. Vietnam currently manages approximately 16.4 million IPv4 addresses (ranking 2nd in ASEAN and 8th in Asia) and nearly 33,000 IPv6 addresses, which are experiencing strong growth.</p>
        
        <p>This rapid development helps enhance network autonomy: to date, Vietnam has more than 1,148 independent ASNs connected to each other, allowing organizations and businesses to perform multi-homing with multiple service providers. This improves redundancy and the ability to select the best transmission routes, contributing to reducing dependence on a single provider.</p>
        
        <p>According to VNNIC's report, organizing networks and independently using IP addresses/ASNs "helps organizations and businesses develop multi-directional connectivity networks, proactively connect with multiple telecommunications service providers, connect to the National Internet Exchange Point (VNIX), contributing to the development of Vietnam's Internet to become 'bigger, faster, safer, flatter'." Thanks to this, the country's Internet connection infrastructure becomes safer, more flexible, and better meets the urgent demands of digital services.</p>
        
        <p>Alongside IPv4, the accelerated deployment of IPv6 has become a national priority. Vietnam is among the world leaders in the rate of IPv6 deployment and the adoption of routing authentication technologies (RPKI) within its network.</p>
        
        <p>Specifically, the VNIX system operated by VNNIC is also the first environment in Vietnam to support both IPv4 and IPv6 simultaneously, enabling organizations to test and transition to IPv6, laying the foundation for the establishment of a "national IPv6 network."</p>
        
        <p>The adoption of IPv6 and RPKI not only expands the address space for IoT and big data but also enhances security by preventing route hijacking attacks. Thus, effective management of IP address and ASN resources not only improves network connectivity capacity but also plays an important role in ensuring sovereignty and security in the national cyberspace.</p>
      `,
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-blue-50 dark:bg-blue-950",
      iconColor: "text-blue-600 dark:text-cyan-400",
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
    },
    c: {
      title: "3. Domain Name System (DNS)",
      content: `
        <p>The Domain Name System (DNS) is a critical layer of identification where all digital connections begin. Deputy Minister Bùi Hoàng Phương affirmed that Internet resources, domain names, and the DNS system serve as the foundational identification layer that plays an essential role in ensuring the trustworthiness and security of cyberspace.</p>
        
        <p>Therefore, managing and operating the national DNS system safely and stably is a key responsibility. Security mechanisms include the implementation of DNSSEC (Domain Name System Security Extensions) and continuous monitoring to prevent attacks on DNS infrastructure.</p>
        
        <p>Beyond that, DNS also holds significant potential for cybersecurity analysis. For instance, DNS query logs can be used to detect malicious domains, ransomware trends, or potential DDoS attack campaigns. Global security companies have recommended utilizing DNS data for internal cybersecurity purposes, transforming information into threat intelligence to block harmful domains.</p>
        
        <p>For digital governments and enterprises, analyzing DNS query patterns can also enhance intrusion detection capabilities, support abnormal behavior monitoring, and improve overall traffic surveillance.</p>
        
        <p>Additionally, the DNS system can support many other essential services. For example, national DNS servers can integrate mechanisms to record access speeds (such as the i-Speed measurement system developed by VNNIC) and provide time synchronization services (NTP) to serve domestic Internet systems.</p>
        
        <p>This enhances proactive network infrastructure management and ensures information security from the ground up. In summary, DNS is not only a critical technical infrastructure but also a valuable data source that helps promote innovation in cybersecurity and the management of Vietnam's Internet network.</p>
      `,
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-blue-50 dark:bg-blue-950",
      iconColor: "text-blue-600 dark:text-cyan-400",
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
    },
  }

  const section = sections[params.id as keyof typeof sections]

  if (!section) {
    notFound()
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 py-12">
        <ReportNavigation currentPage={`internet-role-${params.id}`} />

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 rounded-xl ${section.color}`}>{section.icon}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">{section.title}</h1>
            </div>

            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-600/20 to-transparent p-6 flex items-center justify-center h-[200px]">
                <div className="text-center text-lg text-foreground/70">
                  {params.id === "a" && "Vietnam's National Domain Infrastructure"}
                  {params.id === "b" && "IP Address and ASN Management"}
                  {params.id === "c" && "DNS System Architecture"}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-muted p-8 mb-12 shadow-lg">
              <div
                className="prose prose-lg max-w-none dark:prose-invert text-foreground space-y-4"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>

            <div className="flex justify-between mt-12">
              <Link
                href="/report/internet-role"
                className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Internet Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
