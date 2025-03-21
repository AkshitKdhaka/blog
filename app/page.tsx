"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState, useMemo } from "react"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/nav"
import { BlogCard } from "@/components/blog-card"
import { blogPosts } from "@/data/blog-posts"
import Link from "next/link"

export default function Home() {
  const searchParams = useSearchParams()
  const [categoryParam, setCategoryParam] = useState<string | null>(null)

  // Update category param when URL changes
  useEffect(() => {
    setCategoryParam(searchParams.get("category"))
  }, [searchParams])

  // Listen for custom event from Navigation component
  useEffect(() => {
    const handleCategoryChanged = (event: CustomEvent) => {
      setCategoryParam(event.detail)
    }

    window.addEventListener("category-changed", handleCategoryChanged as EventListener)
    return () => window.removeEventListener("category-changed", handleCategoryChanged as EventListener)
  }, [])

  // Use a memoized function to filter posts based on category
  const filteredPosts = useMemo(() => {
    if (categoryParam) {
      return blogPosts.filter((post) => post.categorySlug === categoryParam)
    }
    return blogPosts
  }, [categoryParam])

  // Get the category title
  const categoryTitle = useMemo(() => {
    if (categoryParam) {
      return categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)
    }
    return "All Categories"
  }, [categoryParam])

  // Generate JSON-LD structured data for the blog
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Blog",
      headline: "Genius Labs Blog - Educational Resources for Young Innovators",
      description:
        "Discover educational resources, workshops, and learning opportunities for children. Genius Labs helps young minds explore STEM, arts, and creative thinking.",
      url: "https://blog.geniuslabs.edu",
      publisher: {
        "@type": "Organization",
        name: "Genius Labs",
        logo: {
          "@type": "ImageObject",
          url: "https://blog.geniuslabs.edu/logo.png",
          width: 600,
          height: 60,
        },
      },
      inLanguage: "en-US",
      copyrightYear: new Date().getFullYear(),
      copyrightHolder: {
        "@type": "Organization",
        name: "Genius Labs",
      },
      blogPost: filteredPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: {
          "@type": "Person",
          name: post.author,
        },
        url: `https://blog.geniuslabs.edu/blog/${post.slug}`,
        image: post.coverImage,
        keywords: `${post.category}, genius labs, ${post.categorySlug}, education, learning`,
        articleSection: post.categorySlug,
      })),
    }),
    [filteredPosts],
  )

  // Generate breadcrumb structured data
  const breadcrumbJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://geniuslabs.edu",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://blog.geniuslabs.edu",
        },
        ...(categoryParam
          ? [
              {
                "@type": "ListItem",
                position: 3,
                name: categoryTitle,
                item: `https://blog.geniuslabs.edu/?category=${categoryParam}`,
              },
            ]
          : []),
      ],
    }),
    [categoryParam, categoryTitle],
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main>
        <Hero />
        <Navigation />
        <div className="container mx-auto px-4">
          <header>
            <h1 className="text-3xl font-bold mb-6">{categoryTitle} Articles</h1>
            {categoryParam && (
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex text-sm text-gray-500">
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Home
                    </Link>
                    <span className="mx-2">/</span>
                  </li>
                  <li className="text-primary font-medium">{categoryTitle}</li>
                </ol>
              </nav>
            )}
          </header>

          {filteredPosts.length > 0 ? (
            <section aria-label={`${categoryTitle} blog posts`}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            </section>
          ) : (
            <section aria-label="No posts found" className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">No posts found in this category</h2>
              <p className="text-gray-600">Try selecting a different category or check back later for new content.</p>
            </section>
          )}

          {/* Rich content for SEO */}
          <section className="my-16 py-12 bg-gray-50 rounded-lg">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6">About Genius Labs Educational Blog</h2>
              <p className="mb-4">
                The Genius Labs Blog is dedicated to providing valuable educational resources, insights, and inspiration
                for parents, educators, and young learners. Our mission is to foster a love of learning and help
                children develop the skills they need to thrive in an ever-changing world.
              </p>
              <p className="mb-4">
                Through our blog, we share expert advice, innovative teaching methods, and creative learning activities
                across various subjects including STEM, arts, language, and more. Our content is created by experienced
                educators and child development specialists who understand how children learn best.
              </p>
              <p>
                Whether you&rsquo;re looking for hands-on science experiments to try at home, tips for nurturing
                creativity, or guidance on supporting your child&rsquo;s educational journey, the Genius Labs Blog is
                your trusted resource for quality educational content.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

