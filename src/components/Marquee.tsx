import React from 'react'

const items = [
  'FREE GIFT ON ORDERS $65+',
  'FREE SHIPPING ON ORDERS $50+',
  'SUBSCRIBE & SAVE 15%',
  'FREE GIFT ON ORDERS $65+',
  'FREE SHIPPING ON ORDERS $50+',
]

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-white sticky top-0 z-40">
      <div className="whitespace-nowrap marquee-animate flex items-center text-gray-400 text-sm font-medium h-10">
        {items.map((text, i) => (
          <React.Fragment key={i}>
            {i !== 0 && <span className="mx-16 select-none">—</span>}
            <span className="uppercase tracking-wide">{text}</span>
          </React.Fragment>
        ))}
        {items.map((text, i) => (
          <React.Fragment key={i + items.length}>
            <span className="mx-16 select-none">—</span>
            <span className="uppercase tracking-wide">{text}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
