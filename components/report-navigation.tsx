"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface ReportNavigationProps {
  currentPage: string
}

export default function ReportNavigation({ currentPage }: ReportNavigationProps) {
  const pages = [
    { id: "report", label: "Overview", href: "/report" },
    { id: "intro", label: "I. Introduction", href: "/report/intro" },
    { id: "internet-role", label: "II. Internet Resources", href: "/report/internet-role" },
    { id: "infrastructure", label: "III. Infrastructure", href: "/report/infrastructure" },
    { id: "ideas", label: "IV. Proposals", href: "/report/ideas" },
    { id: "conclusion", label: "V. Conclusion", href: "/report/conclusion" },
    { id: "references", label: "VI. References", href: "/report/references" },
  ]

  return (
    <nav className="flex items-center gap-1 text-sm text-foreground/60 mb-8 overflow-x-auto pb-2 glass-effect p-3 rounded-full">
      <Link href="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />

      {pages.map((page, index) => (
        <div key={page.id} className="flex items-center">
          <Link
            href={page.href}
            className={cn(
              "hover:text-primary transition-colors whitespace-nowrap",
              currentPage.startsWith(page.id) ? "text-primary font-medium" : "",
            )}
          >
            {page.label}
          </Link>

          {index < pages.length - 1 && <ChevronRight className="h-4 w-4 mx-1" />}
        </div>
      ))}
    </nav>
  )
}
