'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import MenuItemsPreview from './MenuItemsPreview'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Flame, Wine, Music, Clock, Leaf, Award, UtensilsCrossed, MapPin, Phone, Mail } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const experiences = [
  { icon: Flame, title: 'Wood-Fired Cooking', description: 'Every dish kissed by flame from our custom-built hearth' },
  { icon: Wine, title: 'Curated Wine List', description: 'Over 200 selections from world-class vineyards' },
  { icon: Music, title: 'Live Music', description: 'Acoustic performances every Friday and Saturday evening' },
  { icon: Clock, title: 'Late Night Menu', description: 'Special plates and cocktails until midnight on weekends' },
  { icon: Leaf, title: 'Farm to Table', description: 'Partnerships with 15+ local farms for seasonal ingredients' },
  { icon: Award, title: 'Award Winning', description: 'Recognized by James Beard and Portland Monthly' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&fit=crop', alt: 'Beautifully plated dish' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&fit=crop', alt: 'Restaurant interior' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80&fit=crop', alt: 'Chef cooking' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&fit=crop', alt: 'Wine service' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <MenuItemsPreview />
      </ErrorBoundary>

      {/* Signature Experiences */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Signature Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              More than a meal &mdash; an experience crafted for every sense
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => {
              const IconComponent = exp.icon
              return (
                <div
                  key={exp.title}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 mb-5 group-hover:from-primary-200 group-hover:to-accent-200 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              A Glimpse Inside
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Step into our world of flame, flavor, and craft
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Rich 4-Column Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-accent-400" />
                </div>
                <span className="font-display text-2xl font-bold text-white">Ember & Bloom</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A wood-fired kitchen celebrating the seasons with locally sourced ingredients and an unwavering commitment to craft.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-accent-500" />
                <span className="text-sm">742 Fireside Way, Portland, OR 97201</span>
              </div>
            </div>

            {/* Explore Column */}
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wide">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/menu" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">Our Menu</Link></li>
                <li><Link href="/events" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">Events & Happenings</Link></li>
                <li><Link href="/reviews" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">Guest Reviews</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">Our Story</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">Contact & Reservations</Link></li>
              </ul>
            </div>

            {/* Dining Column */}
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wide">Dining</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">Private Dining Rooms</li>
                <li className="text-gray-400 text-sm">Chef&apos;s Table Experience</li>
                <li className="text-gray-400 text-sm">Wine Tasting Events</li>
                <li className="text-gray-400 text-sm">Seasonal Tasting Menu</li>
                <li className="text-gray-400 text-sm">Catering Services</li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wide">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-accent-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">(503) 555-0142</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">hello@emberandbloom.com</span>
                </li>
                <li className="flex items-start space-x-2 mt-4">
                  <Clock className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-400 text-sm">
                    <p>Tue - Sat: 5pm - 10pm</p>
                    <p>Brunch: Sat & Sun 10am - 2pm</p>
                    <p>Happy Hour: Tue - Fri 4pm - 6pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Ember & Bloom. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2 md:mt-0">
              Crafted with care in Portland, Oregon
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
