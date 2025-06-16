import Link from 'next/link'
import React from 'react'

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({ href, children, className, ...rest }: NavLinkProps) {
  const hasNoUnderline = className?.includes('no-underline') || className?.includes('!no-underline')
  const base = hasNoUnderline
    ? ''
    : 'relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full'
  return (
    <Link href={href} className={`${base} ${className ?? ''}`} {...rest}>
      {children}
    </Link>
  )
}
