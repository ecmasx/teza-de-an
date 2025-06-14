'use client'

import React, { memo } from 'react'
import dynamic from 'next/dynamic'

const DynamicMV = dynamic(
  () =>
    import('@google/model-viewer').then(() => {
      type MVProps = JSX.IntrinsicElements['model-viewer']
      const MV: React.FC<MVProps> = memo(props => {
        // @ts-expect-error custom element
        return <model-viewer {...props} />
      })
      MV.displayName = 'ModelViewer'
      return { default: MV }
    }),
  { ssr: false, loading: () => <div className="w-full h-full bg-gray-100" /> },
) as React.ComponentType<JSX.IntrinsicElements['model-viewer']>

export default DynamicMV
