import AutoARViewer from '@/components/AutoARViewer'
import chairs from '@/data/chairs'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface ARPageProps {
  params: Promise<{ id: string }>
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: ARPageProps): Promise<Metadata> {
  const { id } = await params
  const chair = chairs.find(c => c.id === Number(id))

  if (!chair) {
    return {
      title: 'Chair not found',
    }
  }

  return {
    title: `${chair.name} - AR View`,
    description: `View ${chair.name} in Augmented Reality`,
    viewport: 'width=device-width, initial-scale=1, user-scalable=no',
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'mobile-web-app-capable': 'yes',
    },
  }
}

export default async function ARViewerPage({ params }: ARPageProps) {
  const { id } = await params
  const chair = chairs.find(c => c.id === Number(id))
  if (!chair) return notFound()

  const iosSrc = chair.src.replace('/modelsglb/', '/modelsusdz/').replace(/\.glb$/i, '.usdz')

  console.log('AR Page - Chair:', chair.name)
  console.log('AR Page - GLB src:', chair.src)
  console.log('AR Page - iOS src:', iosSrc)

  return <AutoARViewer glbSrc={chair.src} iosSrc={iosSrc} title={chair.name} />
}
