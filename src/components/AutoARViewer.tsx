'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from 'react'
import ModelViewer from '@/components/ModelViewer'
import texts from '@/data/texts.json'

interface AutoARViewerProps {
  glbSrc: string
  iosSrc?: string
  title?: string
}

export default function AutoARViewer({ glbSrc, iosSrc, title = 'AR Model' }: AutoARViewerProps) {
  const mvRef = useRef<HTMLDivElement | null>(null)
  const [isIOS, setIsIOS] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  const addDebugInfo = (info: string) => {
    console.log('AR Debug:', info)
    setDebugInfo(prev => [...prev, info])
  }

  useEffect(() => {
    addDebugInfo('AutoARViewer mounted')
    addDebugInfo(`GLB src: ${glbSrc}`)
    addDebugInfo(`iOS src: ${iosSrc}`)

    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768

    addDebugInfo(`Device detection - iOS: ${isIOSDevice}, Mobile: ${isMobileDevice}`)
    addDebugInfo(`User agent: ${navigator.userAgent}`)

    setIsIOS(isIOSDevice)
    setIsMobile(isMobileDevice)
    setIsLoading(false)

    if (isMobileDevice) {
      addDebugInfo('Setting up auto-AR timer')
      const timer = setTimeout(() => {
        addDebugInfo('Attempting to launch AR automatically')
        const mv = mvRef.current?.querySelector('model-viewer') as any
        if (mv) {
          addDebugInfo('Model viewer found, trying to activate AR')
          if (mv.activateAR) {
            addDebugInfo('Calling activateAR()')
            mv.activateAR()
          } else if (mv.enterAR) {
            addDebugInfo('Calling enterAR()')
            mv.enterAR()
          } else {
            addDebugInfo('No AR activation methods found')
          }
        } else {
          addDebugInfo('Model viewer not found')
        }
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [glbSrc, iosSrc])

  const handleModelLoad = () => {
    addDebugInfo('Model loaded')
    if (isMobile) {
      setTimeout(() => {
        const mv = mvRef.current?.querySelector('model-viewer') as any
        if (mv && mv.activateAR) {
          addDebugInfo('Attempting AR activation after model load')
          mv.activateAR()
        }
      }, 500)
    }
  }

  const manualARLaunch = () => {
    addDebugInfo('Manual AR launch triggered')
    const mv = mvRef.current?.querySelector('model-viewer') as any
    if (mv) {
      if (mv.activateAR) {
        addDebugInfo('Manual activateAR() called')
        mv.activateAR()
      } else if (mv.enterAR) {
        addDebugInfo('Manual enterAR() called')
        mv.enterAR()
      } else {
        addDebugInfo('No AR methods available for manual launch')
      }
    } else {
      addDebugInfo('Model viewer not found for manual launch')
    }
  }

  if (isLoading) {
    return (
      <div className="w-full min-h-[100dvh] bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">{texts.ar.loadingText}</p>
        </div>
      </div>
    )
  }

  const modelSrc = isIOS && iosSrc ? iosSrc : glbSrc

  return (
    <div
      className="w-full min-h-[100dvh] bg-white relative"
      style={{ height: 'var(--app-height, 100vh)' }}
    >
      <div ref={mvRef} className="w-full h-full">
        <ModelViewer
          src={modelSrc}
          alt={title}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          autoplay
          auto-rotate
          loading="eager"
          style={{ width: '100%', height: '100%', background: 'white' }}
          onLoad={handleModelLoad}
        />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 space-y-2">
        <button
          onClick={manualARLaunch}
          className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-colors block mx-auto"
        >
          {texts.ar.launchAR}
        </button>

        {/* Debug panel - только в dev режиме */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-gray-900 text-white text-xs p-2 rounded max-w-xs max-h-32 overflow-y-auto">
            <div className="font-bold mb-1">Debug Info:</div>
            <div>Model: {modelSrc}</div>
            <div>iOS: {isIOS.toString()}</div>
            <div>Mobile: {isMobile.toString()}</div>
            {debugInfo.map((info, i) => (
              <div key={i}>{info}</div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute top-4 left-4 right-4 bg-black/80 text-white p-3 rounded-lg text-sm">
        <p className="text-center">
          {isMobile ? texts.ar.autoLaunchMessage : texts.ar.desktopMessage}
        </p>
      </div>
    </div>
  )
}
