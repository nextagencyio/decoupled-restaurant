import { getClient } from '@/lib/drupal-client'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'

export const revalidate = 3600
export const dynamic = 'force-dynamic'


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ember & Bloom | Wood-Fired Kitchen',
    description: 'A wood-fired kitchen celebrating the seasons. Locally sourced ingredients from 15+ farm partners, 200+ wine selections, and an unforgettable dining experience.',
  }
}

export default async function Home() {
  const configStatus = checkConfiguration()
  if (!configStatus.isConfigured) return <SetupGuide missingVars={configStatus.missingVars} />

  const client = getClient()
  const homepageContent = await client.getEntryByPath('/') as any

  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer homepageContent={homepageContent} />
}
