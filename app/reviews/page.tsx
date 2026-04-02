import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_REVIEWS } from '@/lib/queries'
import { ReviewData } from '@/lib/types'
import Header from '../components/Header'
import ReviewCard from '../components/ReviewCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Reviews | Ember & Bloom',
  description: 'Read what our guests are saying about their dining experience at Ember & Bloom.',
}

async function getReviews() {
  try {
    const client = getClient()
    const data = await client.raw(GET_REVIEWS, { first: 50 })
    return data?.nodeReviews?.nodes || []
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return []
  }
}

export default async function ReviewsPage() {
  const items = await getReviews()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-accent-400 font-display text-sm tracking-widest uppercase mb-4">Our Guests Speak</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Reviews
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Hear from the people who have shared a meal and a memory with us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="font-display text-2xl font-bold text-gray-700 mb-2">No Reviews Yet</h2>
              <p className="text-gray-500">
                Reviews will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <ReviewCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
