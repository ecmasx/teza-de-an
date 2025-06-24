'use client'

import { useEffect } from 'react'
import { initViewportHeight } from '@/lib/utils'

export default function ViewportInitializer() {
  useEffect(() => {
    const cleanup = initViewportHeight()
    return cleanup
  }, [])

  return null
}
