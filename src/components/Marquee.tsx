import React from 'react'

const items = [
  'CADOU GRATUIT LA COMENZI 999 LEI+',
  'LIVRARE GRATUITĂ LA COMENZI 999 LEI+',
  'ABONEAZĂ-TE ȘI ECONOMISEȘTE 10%',
  'CADOU GRATUIT LA COMENZI 999 LEI+',
  'LIVRARE GRATUITĂ LA COMENZI 999 LEI+',
  'ABONEAZĂ-TE ȘI ECONOMISEȘTE 10%',
  'CADOU GRATUIT LA COMENZI 999 LEI+',
  'LIVRARE GRATUITĂ LA COMENZI 999 LEI+',
]

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-white sticky top-0 z-40 ">
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
