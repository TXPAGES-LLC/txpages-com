import localData from './posts.json'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  contentHtml: string
  heroImageUrl?: string
  author: string
  tags: string[]
  categories: string[]
  publishAt: string
  updatedAt?: string
  readingTimeMinutes: number
  wordCount?: number
  seo: {
    metaTitle?: string
    metaDescription?: string
    canonicalUrl?: string
    ogImageUrl?: string
  }
}

export interface BlogCollection {
  title: string
  navLabel: string
  basePath: string
}

export interface BlogData {
  collection: BlogCollection
  posts: BlogPost[]
}

export async function fetchBlogData(): Promise<BlogData> {
  return localData as BlogData
}

/** Returns only posts whose publishAt is <= now, sorted newest first */
export function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  const now = new Date()
  return posts
    .filter((p) => new Date(p.publishAt) <= now)
    .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime())
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
