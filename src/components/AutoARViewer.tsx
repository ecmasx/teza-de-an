'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from 'react'
import ModelViewer from '@/components/ModelViewer'

interface AutoARViewerProps {
  glbSrc: string
  iosSrc?: string
  title?: string
}

export default function AutoARViewer({ glbSrc, iosSrc, title = 'AR Model' }: AutoARViewerProps) {
  const mvRef = useRef<HTMLDivElement | null>(null)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Detect iOS platform
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    setIsIOS(isIOSDevice)

    const timer = setTimeout(() => {
      const mv = mvRef.current?.querySelector('model-viewer') as any
      if (mv && mv.activateAR) {
        mv.activateAR()
      } else if (mv && mv.enterAR) {
        mv.enterAR()
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={mvRef} className="w-screen h-screen bg-white">
      <ModelViewer
        src={isIOS && iosSrc ? iosSrc : glbSrc}
        alt={title}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        autoplay
        style={{ width: '100%', height: '100%', background: 'white' }}
      />
    </div>
  )
}
