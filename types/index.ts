export interface BlogPost {
  title: string
  excerpt: string
  slug: string
  coverImage: string
  author: string
  date: string
  readTime: string
  category: string
  categorySlug: string
  backgroundColor: string
  content?: BlogPostContent
}

export interface BlogPostContent {
  introduction?: string
  sections?: BlogPostSection[]
  quote?: {
    text: string
    author: string
  }
  conclusion?: string
}

export interface BlogPostSection {
  title: string
  content: string
  image?: {
    src: string
    alt: string
    caption?: string
  }
}

export interface Category {
  name: string
  href: string
  description: string
  slug: string | null
}

