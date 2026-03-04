import Link from 'next/link'
import { DrupalReview } from '@/lib/types'
import { ArrowRight, Star, Quote } from 'lucide-react'

interface ReviewCardProps {
  item: DrupalReview
}

export default function ReviewCard({ item }: ReviewCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-50 flex items-center justify-center">
        <Quote className="w-16 h-16 text-primary-200" />
        {(item as any).rating && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
            <span className="text-sm font-bold text-gray-900">{(item as any).rating}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        {(item as any).reviewerName && (
          <p className="text-sm font-bold text-primary-700 mb-1">{(item as any).reviewerName}</p>
        )}
        <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 italic">
            &ldquo;{(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}&rdquo;
          </p>
        )}

        <div className="flex items-center text-primary-700 font-medium text-sm group-hover:gap-2 transition-all">
          Read Full Review
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
