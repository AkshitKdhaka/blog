import Image from "next/image"
import Link from "next/link"
import { blogPosts, getRelatedPosts } from "@/data/blog-posts"
import { BlogCard } from "@/components/blog-card"
import type { Metadata } from "next"
import type { BlogPost } from "@/types"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found - Genius Labs Blog",
      description: "The requested blog post could not be found.",
    }
  }

  // Create a clean excerpt without HTML for meta description
  const cleanExcerpt = post.excerpt.replace(/<[^>]*>?/gm, "")

  return {
    title: post.title,
    description: cleanExcerpt.substring(0, 160),
    keywords: `${post.category}, genius labs, ${post.categorySlug}, education, learning`,
    openGraph: {
      title: post.title,
      description: cleanExcerpt.substring(0, 160),
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: [post.category, post.categorySlug, "education", "learning"],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: cleanExcerpt.substring(0, 160),
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://blog.geniuslabs.edu/blog/${post.slug}`,
    },
  }
}

function NotFoundPage() {
  return (
    <main>
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">🤔 Uh-oh</h1>
          <p className="text-lg text-gray-600 mb-6">We are unable to find the post that you are looking for.</p>
          <Link href="/" className="text-primary hover:underline">
            Click here to view all posts
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Posts you may like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((relatedPost) => (
              <div key={relatedPost.slug} className="rounded-lg overflow-hidden shadow-md">
                <Link href={`/blog/${relatedPost.slug}`}>
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={relatedPost.coverImage || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block bg-primary text-white px-2 py-1 text-xs rounded mb-2">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-bold text-lg mb-2">{relatedPost.title}</h3>
                    <p className="text-sm text-gray-600">
                      {relatedPost.author} • {relatedPost.date}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

function renderPostContent(post: BlogPost) {
  return (
    <>
      {/* Introduction */}
      {post.content?.introduction && <p>{post.content.introduction}</p>}

      {/* Content Sections */}
      {post.content?.sections ? (
        post.content.sections.map((section, index) => (
          <div key={index} className="my-8">
            <h2 id={section.title.toLowerCase().replace(/\s+/g, "-")}>{section.title}</h2>
            <p>{section.content}</p>

            {section.image && (
              <figure className="my-6">
                <Image
                  src={section.image.src || "/placeholder.svg"}
                  alt={section.image.alt}
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
                {section.image.caption && (
                  <figcaption className="text-center text-gray-500 mt-2">{section.image.caption}</figcaption>
                )}
              </figure>
            )}
          </div>
        ))
      ) : (
        // Fallback content if no sections are provided
        <>
          <h2 id="about">About {post.title.split(":")[0]}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam
            nisl, eu aliquam nisl nisl sit amet nisl.
          </p>

          <figure>
            <Image
              src="/placeholder.svg?height=400&width=800&text=Interior"
              alt={`Interior of ${post.title.split(":")[0]}`}
              width={800}
              height={400}
              className="rounded-lg"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Inside view of {post.title.split(":")[0]}
            </figcaption>
          </figure>
        </>
      )}

      {/* Quote */}
      {post.content?.quote ? (
        <blockquote className="my-8">
          &ldquo;{post.content.quote.text}&rdquo;<cite>— {post.content.quote.author}</cite>
        </blockquote>
      ) : (
        // Fallback quote if none is provided
        <blockquote className="my-8">
          &ldquo;Our focus has always been on quality and consistency. We believe that&rsquo;s what keeps customers
          coming back year after year.&rdquo;
          <cite>— Owner, {post.title.split(":")[0]}</cite>
        </blockquote>
      )}

      {/* Conclusion */}
      {post.content?.conclusion ? (
        <div className="mt-8">
          <h2 id="looking-ahead">Looking Ahead</h2>
          <p>{post.content.conclusion}</p>
        </div>
      ) : (
        // Fallback conclusion if none is provided
        <div className="mt-8">
          <h2 id="looking-ahead">Looking Ahead</h2>
          <p>
            As {post.title.split(":")[0]} continues to grow and evolve, the commitment to quality and authentic flavors
            remains at the heart of everything they do. With plans for further expansion and new menu innovations on the
            horizon, the future looks bright for this beloved culinary institution.
          </p>
        </div>
      )}
    </>
  )
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    return <NotFoundPage />
  }

  // Generate table of contents from sections
  const tableOfContents =
    post.content?.sections?.map((section) => ({
      title: section.title,
      id: section.title.toLowerCase().replace(/\s+/g, "-"),
    })) || []

  if (post.content?.conclusion) {
    tableOfContents.push({
      title: "Looking Ahead",
      id: "looking-ahead",
    })
  }

  // Enhanced JSON-LD for the blog post with more SEO-friendly attributes
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
      url: `https://blog.geniuslabs.edu/author/${post.author.toLowerCase().replace(/\s+/g, "-")}`,
    },
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://blog.geniuslabs.edu/blog/${post.slug}`,
    },
    keywords: `${post.category}, genius labs, ${post.categorySlug}, education, learning`,
    articleSection: post.categorySlug,
    wordCount:
      post.content?.introduction?.split(" ").length ||
      0 +
        (post.content?.sections?.reduce((acc, section) => acc + section.content.split(" ").length, 0) || 0) +
        (post.content?.conclusion?.split(" ").length || 0),
    inLanguage: "en-US",
  }

  const relatedPosts = getRelatedPosts(post.slug, post.categorySlug, 4)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <div className="relative h-[50vh] min-h-[400px] bg-black">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={`Featured image for article: ${post.title}`}
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-3xl text-white">
                <div className="mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">{post.category}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center gap-2 text-sm">
                  <span>{post.author}</span>
                  <span>•</span>
                  <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Table of Contents */}
            {tableOfContents.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg mb-8">
                <h2 className="text-lg font-semibold mb-2">Table of Contents</h2>
                <ul className="list-disc pl-5">
                  {tableOfContents.map((item, index) => (
                    <li key={index} className="mb-1">
                      <a href={`#${item.id}`} className="text-primary hover:underline">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium mb-6">{post.excerpt}</p>
              {renderPostContent(post)}
            </div>

            {/* Author bio for E-E-A-T signals */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">About {post.author}</h3>
                  <p className="text-gray-600">
                    {post.author} is an education specialist at Genius Labs with expertise in{" "}
                    {post.category.toLowerCase()}
                    and childhood development. They have been creating educational content for over 5 years.
                  </p>
                </div>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-2 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <BlogCard key={relatedPost.slug} {...relatedPost} compact={true} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Social sharing and engagement */}
            <div className="mt-8 pt-4 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Share this article</h4>
                  <div className="flex gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?url=https://blog.geniuslabs.edu/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-blue-400 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.geniuslabs.edu/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=https://blog.geniuslabs.edu/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-blue-700 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <Link href="/" className="text-primary hover:underline">
                    ← Back to all articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

