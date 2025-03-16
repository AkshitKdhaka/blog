"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"

// Define navigation categories
const categories = [
  { name: "All Categories", href: "/" },
  { name: "Workshops", href: "/workshops" },
  { name: "Camps", href: "/camps" },
  { name: "Projects by Genius Kids", href: "/projects" },
  { name: "How To?", href: "/how-to" },
  { name: "Thinking Challenges for Home", href: "/challenges" },
]

export function Navigation() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentCategory = searchParams.get("category")

  const handleCategoryClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    categoryName: string,
    categorySlug: string | null,
  ) => {
    e.preventDefault()

    // Navigate to appropriate URL based on category
    if (categoryName === "All Categories") {
      console.log("All Categories clicked, navigating to /")
      // Use router.push with shallow: false to ensure full navigation
      router.push("/", { scroll: false })
    } else if (categorySlug) {
      console.log(`Category ${categoryName} clicked, navigating to /?category=${categorySlug}`)
      router.push(`/?category=${categorySlug}`, { scroll: false })
    }
  }

  return (
    <nav className="border-b mb-8">
      <div className="container mx-auto overflow-x-auto">
        <div className="flex space-x-8 py-4">
          {categories.map((category) => {
            // Extract category slug from href
            const categorySlug = category.href === "/" ? null : category.href.replace("/", "")

            // Determine if this category is currently active
            const isActive =
              (category.name === "All Categories" && !currentCategory) ||
              (categorySlug && categorySlug === currentCategory)

            return (
              <Link
                key={category.name}
                href={category.href}
                onClick={(e) => handleCategoryClick(e, category.name, categorySlug)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                  isActive ? "text-primary border-b-2 border-primary -mb-[17px] pb-4" : "text-muted-foreground",
                )}
              >
                {category.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

