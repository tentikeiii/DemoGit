"use client"

import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import ReportNavigation from "@/components/report-navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function IdeaDetailPageClient({ params }: { params: { id: string } }) {
  const ideas = {
    "1": {
      title: "Exploiting DNS data for network security analysis",
      content: `
        <p>Building a system to collect and analyze DNS logs at national servers aims to detect early signs of attacks, such as queries to malicious domains and abnormal DNS traffic. This data provides valuable threat intelligence and supports network infrastructure protection.</p>
        
        <p>When combined with technologies like artificial intelligence, the analysis process can be automated, enhancing the capability to detect and prevent threats on a large scale.</p>
        
        <p>DNS query logs can provide valuable insights into:</p>
        <ul>
          <li>Detection of malicious domain access attempts</li>
          <li>Identification of ransomware communication patterns</li>
          <li>Early warning of potential DDoS attacks</li>
          <li>Anomaly detection in network traffic</li>
        </ul>
        
        <p>By analyzing patterns in DNS queries, security teams can identify compromised systems, detect data exfiltration attempts, and block communication with command and control servers.</p>
        
        <p>The system could also generate real-time alerts and reports for network administrators, helping them respond quickly to emerging threats and protecting critical infrastructure.</p>
      `,
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    "2": {
      title: "Exploiting VNIX for digital content network models",
      content: `
        <p>Placing cache servers for content services (such as CDNs, video platforms, e-government data, and online learning) at the VNIX center helps enhance domestic content distribution. This model reduces latency and international bandwidth costs while improving service quality for local users.</p>
        
        <p>Integrating VNIX with CDNs and national digital platforms will create a cohesive digital ecosystem based on a hub-and-spoke model, similar to how IXPs in Southeast Asia have promoted regional content exchange.</p>
        
        <p>Benefits of this approach include:</p>
        <ul>
          <li>Reduced latency for accessing popular content</li>
          <li>Lower international bandwidth costs</li>
          <li>Improved resilience during international cable outages</li>
          <li>Enhanced content delivery performance for domestic users</li>
          <li>Support for bandwidth-intensive applications like video streaming and cloud gaming</li>
        </ul>
        
        <p>This model would particularly benefit digital government services, online education platforms, and domestic content providers by ensuring faster and more reliable access to their services.</p>
      `,
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
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      ),
    },
    "3": {
      title: "Promoting the use of country code domains in digital identity",
      content: `
        <p>Expand free programs and incentives to encourage individuals and businesses to use the ".vn" and ".id.vn" domains as part of electronic authentication and digital identity. For example, the free issuance program of .id.vn domains for youth has taken an initial step toward building personal digital identities in cyberspace.</p>
        
        <p>Continue to promote local and global businesses to register .vn domains by raising awareness and providing technical support, aiming to increase the online presence rate on the national domain, which is currently much lower compared to the rate in Europe.</p>
        
        <p>Key initiatives could include:</p>
        <ul>
          <li>Integration of .vn domains with national digital identity systems</li>
          <li>Educational campaigns highlighting the benefits of using the national domain</li>
          <li>Technical assistance for small businesses to establish their online presence</li>
          <li>Partnerships with e-commerce platforms to promote .vn domains</li>
          <li>Development of value-added services for .vn domain holders</li>
        </ul>
        
        <p>By increasing the adoption of .vn domains from the current 25% to levels closer to those seen in developed countries (75-95%), Vietnam can strengthen its digital sovereignty and create a more trusted online environment for citizens and businesses.</p>
      `,
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
  }

  const idea = ideas[params.id as keyof typeof ideas]

  if (!idea) {
    notFound()
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 py-12">
        <ReportNavigation currentPage={`ideas-${params.id}`} />

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950">{idea.icon}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">{idea.title}</h1>
            </div>

            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-600/20 to-transparent p-6 flex items-center justify-center h-[200px]">
                <div className="text-center text-lg text-foreground/70">
                  {params.id === "1" && "DNS Security Analysis Framework"}
                  {params.id === "2" && "VNIX Content Distribution Model"}
                  {params.id === "3" && "National Domain Adoption Strategy"}
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8 mb-12 shadow-lg">
              <div
                className="prose prose-lg max-w-none dark:prose-invert text-foreground space-y-4"
                dangerouslySetInnerHTML={{ __html: idea.content }}
              />
            </div>

            <div className="flex justify-between mt-12">
              <Link
                href="/report/ideas"
                className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Innovative Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
