import AutoARViewer from '@/components/AutoARViewer'
import chairs from '@/data/chairs'
import { notFound } from 'next/navigation'

interface ARPageProps {
  params: Promise<{ id: string }>
}

export const dynamic = 'force-dynamic'

export default async function ARViewerPage({ params }: ARPageProps) {
  const { id } = await params
  const chair = chairs.find(c => c.id === Number(id))
  if (!chair) return notFound()
  const iosSrc = chair.src.replace('/modelsobj/', '/modelsusdz/').replace(/\.glb$/i, '.usdz')

  return <AutoARViewer glbSrc={chair.src} iosSrc={iosSrc} title={chair.name} />
}
