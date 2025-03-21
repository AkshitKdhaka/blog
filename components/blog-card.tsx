import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/types"

type BlogCardProps = BlogPost & {
  compact?: boolean
}

export function BlogCard({
  title,
  excerpt,
  slug,
  coverImage,
  author,
  date,
  readTime,
  backgroundColor,
  compact = false,
}: BlogCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-lg ${backgroundColor} h-full transition-transform hover:scale-[1.02]`}
    >
      <Link href={`/blog/${slug}`} aria-label={title}>
        <div className={`aspect-[16/9] md:aspect-[3/2] w-full relative ${compact ? "max-h-40" : ""}`}>
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={`Featured image for article: ${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        <div className={`p-${compact ? "4" : "6"}`}>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span>{author}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={new Date(date).toISOString()}>{date}</time>
            <span aria-hidden="true">•</span>
            <span>{readTime} read</span>
          </div>
          <h2 className={`${compact ? "text-xl" : "text-2xl"} font-bold mb-2 group-hover:text-primary`}>{title}</h2>
          {!compact && <p className="text-gray-600 mb-4">{excerpt}</p>}
          <div className="inline-block bg-black/10 px-3 py-1 rounded-full text-sm">Learn More</div>
        </div>
      </Link>
    </article>
  )
}

