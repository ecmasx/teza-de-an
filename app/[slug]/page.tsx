import React from 'react'
import texts from '@/data/texts.json'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const pageTitle = slug.replace(/-/g, ' ')

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-semibold capitalize mb-4">{pageTitle}</h1>
      <p className="text-lg text-black/70">{texts.pages.underConstruction}</p>
    </section>
  )
}
