'use client'

import React, { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

interface QRCodeDisplayProps {
  value: string
  size?: number
}

export default function QRCodeDisplay({ value, size = 128 }: QRCodeDisplayProps) {
  const [url, setUrl] = useState(value)

  useEffect(() => {
    if (!value) {
      setUrl(window.location.href)
    } else if (value.startsWith('/')) {
      setUrl(window.location.origin + value)
    } else {
      setUrl(value)
    }
  }, [value])

  return (
    <div className="inline-block p-2 w-fit bg-white shadow rounded">
      <QRCodeSVG value={url} size={size} />
    </div>
  )
}
