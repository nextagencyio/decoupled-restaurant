
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: { timestamp: number }
  changed: { timestamp: number }
}

export interface DrupalMenuItem extends DrupalNode {
  body?: { processed: string; summary?: string }
  price?: string
  menuCategory?: string
  dietaryInfo?: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{ name: string; url: string; width: number; height: number }>
  }
}

export interface MenuItemData {
  nodeMenuItems: { nodes: DrupalMenuItem[] }
}

export interface DrupalEvent extends DrupalNode {
  body?: { processed: string; summary?: string }
  eventDate?: { timestamp: number; time?: string }
  location?: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{ name: string; url: string; width: number; height: number }>
  }
}

export interface EventData {
  nodeEvents: { nodes: DrupalEvent[] }
}

export interface DrupalReview extends DrupalNode {
  body?: { processed: string }
  reviewerName?: string
  rating?: number
  visitDate?: { timestamp: number; time?: string }
}

export interface ReviewData {
  nodeReviews: { nodes: DrupalReview[] }
}

export interface DrupalPage extends DrupalNode {
  body?: { processed: string }
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string }
  featuresItems?: DrupalFeature[]
  ctaTitle?: string
  ctaDescription?: { processed: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeature {
  id: string
  title: string
  description?: { processed: string }
  icon?: string
}

export interface HomepageData {
  nodeHomepages: { nodes: DrupalHomepage[] }
}

export interface DrupalArticle extends DrupalNode {
  body?: { processed: string; summary?: string }
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{ name: string; url: string; width: number; height: number }>
  }
}

export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
