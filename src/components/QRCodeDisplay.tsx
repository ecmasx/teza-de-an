'use client'

import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

interface QRCodeDisplayProps {
  value: string
  size?: number
}

export default function QRCodeDisplay({ value, size = 128 }: QRCodeDisplayProps) {
  return (
    <div className="inline-block p-2 w-fit bg-white shadow rounded">
      <QRCodeSVG value={value} size={size} includeMargin />
    </div>
  )
}
