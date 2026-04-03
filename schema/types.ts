// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeEvent {
  id: string;
  body: { value: string; summary?: string };
  eventDate: { time: string };
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuresItems: any[];
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  title: string;
}

export interface ParagraphFeatureItem {
  id: string;
  description: { value: string };
  icon: string;
  title: string;
}

export interface NodeMenuItem {
  id: string;
  body: { value: string; summary?: string };
  dietaryInfo: string;
  image: { url: string; alt: string; width: number; height: number };
  menuCategory: string;
  path: string;
  price: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeReview {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  rating: number;
  reviewerName: string;
  title: string;
  visitDate: { time: string };
}
