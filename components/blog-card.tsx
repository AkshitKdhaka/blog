import Image from "next/image"
import Link from "next/link"

interface BlogPostProps {
  title: string
  excerpt: string
  slug: string
  coverImage: string
  author: string
  date: string
  readTime: string
  category: string
  backgroundColor: string
}

export function BlogCard({
  title,
  excerpt,
  slug,
  coverImage,
  author,
  date,
  readTime,
  category,
  backgroundColor,
}: BlogPostProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article
        className={`group relative overflow-hidden rounded-lg ${backgroundColor} h-full transition-transform hover:scale-[1.02]`}
      >
        <div className="aspect-[16/9] md:aspect-[3/2] w-full relative">
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span>{author}</span>
            <span>•</span>
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <span>{readTime} read</span>
          </div>
          <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">{title}</h2>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="inline-block bg-black/10 px-3 py-1 rounded-full text-sm">{category}</div>
        </div>
      </article>
    </Link>
  )
}

