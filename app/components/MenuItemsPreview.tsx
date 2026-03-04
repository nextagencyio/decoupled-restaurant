'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_MENU_ITEMS } from '@/lib/queries'
import { MenuItemData, DrupalMenuItem } from '@/lib/types'
import { ArrowRight, UtensilsCrossed } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

export default function MenuItemsPreview() {
  const { data, loading, error } = useQuery<MenuItemData>(GET_MENU_ITEMS, { variables: { first: 3 } })
  const items = data?.nodeMenuItems?.nodes || []

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">From Our Kitchen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-xl" />
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || items.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">From Our Kitchen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Handcrafted dishes celebrating the art of wood-fired cooking</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item: DrupalMenuItem) => (
            <Link
              key={item.id}
              href={item.path || `/menu/${item.id}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 bg-gray-100">
                {item.image?.url ? (
                  <ResponsiveImage
                    src={item.image.url}
                    alt={item.image.alt || item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    variations={item.image.variations}
                    targetWidth={400}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UtensilsCrossed className="w-12 h-12 text-gray-300" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                {item.price && (
                  <div className="text-lg font-semibold text-primary-700 mb-2">{item.price}</div>
                )}
                <div className="flex items-center text-primary-700 font-medium text-sm mt-3">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center px-8 py-3 bg-primary-800 text-white rounded-xl hover:bg-primary-700 transition-colors font-bold text-sm tracking-wide"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
