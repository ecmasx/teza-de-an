import dynamic from 'next/dynamic'
import React from 'react'

const Categories = dynamic(() => import('@/components/Categories'))

export const metadata = { title: 'Categories' }

export default function CategoriesPage() {
  return <Categories />
}
