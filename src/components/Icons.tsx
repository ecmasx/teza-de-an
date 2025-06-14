import React from 'react'

interface IconProps {
  name: 'tiktok' | 'instagram' | 'search' | 'cart' | 'burger' | 'logo' | 'close' | 'arrow'
  className?: string
  size?: number
}

export function Icon({ name, className = '', size = 28 }: IconProps) {
  switch (name) {
    case 'tiktok':
      return (
        <svg
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className={className}
        >
          <path d="M9 8v7a3 3 0 1 0 3-3h-1" />
          <path d="M16 8V3h-2v5h2z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className={className}
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" />
        </svg>
      )
    case 'search':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5Z"
            stroke="currentColor"
            strokeWidth="0.999065"
          />
          <path d="M13.3535 13.6464L20.3535 20.6464" stroke="currentColor" strokeWidth="0.999065" />
        </svg>
      )
    case 'cart':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path d="M18.5 9.5H5.5V20.5H18.5V9.5Z" stroke="currentColor" strokeWidth="0.999065" />
          <mask
            id="mask0_4_15"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="5"
            y="3"
            width="14"
            height="5"
          >
            <path d="M19 3H5V8H19V3Z" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_4_15)">
            <path
              d="M12 12.5C14.4853 12.5 16.5 10.4853 16.5 8C16.5 5.51472 14.4853 3.5 12 3.5C9.51472 3.5 7.5 5.51472 7.5 8C7.5 10.4853 9.51472 12.5 12 12.5Z"
              stroke="currentColor"
              strokeWidth="0.999065"
            />
          </g>
          <path d="M7.5 8V9" stroke="currentColor" strokeWidth="0.999065" />
          <path d="M16.5 8V9" stroke="currentColor" strokeWidth="0.999065" />
        </svg>
      )
    case 'burger':
      return (
        <svg
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className={className}
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      )
    case 'logo':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 39 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M1.98764 2.832C1.98764 5.136 6.99164 3.348 6.99164 6.696C6.99164 8.268 5.71964 9.144 3.97964 9.144C2.22764 9.144 1.02764 8.34 0.667641 6.696H1.81964C2.08364 7.668 2.81564 8.196 3.99164 8.196C5.21564 8.196 5.86364 7.656 5.86364 6.84C5.86364 4.344 0.859641 6.204 0.859641 2.904C0.859641 1.728 1.84364 0.696 3.64364 0.696C5.21564 0.696 6.47564 1.452 6.77564 3.192H5.61164C5.35964 2.112 4.66364 1.644 3.61964 1.644C2.58764 1.644 1.98764 2.112 1.98764 2.832ZM10.5482 9V1.776H7.75224V0.84H14.4482V1.776H11.6522V9H10.5482ZM22.5376 5.892C22.5376 7.908 21.2896 9.144 19.2856 9.144C17.2696 9.144 16.0216 7.908 16.0216 5.892V0.84H17.1376V5.892C17.1376 7.368 17.9416 8.256 19.2856 8.256C20.6296 8.256 21.4336 7.356 21.4336 5.892V0.84H22.5376V5.892ZM24.669 9V0.84H25.773V8.1H29.877V9H24.669ZM37.4004 9L36.6324 7.044H32.7204L31.9524 9H30.8604L34.0644 0.84H35.3364L38.5524 9H37.4004ZM34.4364 2.628L33.0564 6.156H36.2964L34.9164 2.628L34.6764 1.908L34.4364 2.628Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'close':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <g clipPath="url(#clip0_6_27)">
            <path
              d="M4.67646 3.76494L3.5 4.94141L18.5588 20.0002L19.7352 18.8237L4.67646 3.76494Z"
              fill="currentColor"
            />
            <path
              d="M19.736 5.17646L18.5596 4L3.50081 19.0588L4.67727 20.2352L19.736 5.17646Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_27">
              <rect width="17" height="18" fill="currentColor" transform="translate(3.5 3)" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'arrow':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <g clipPath="url(#clip0_8_31)">
            <path
              d="M13.4351 4L21 12.0258L13.4351 20L11.9513 18.4L17.0351 13.1097H3V10.9161H17.0351L11.9513 5.6L13.4351 4Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_31">
              <rect width="18" height="16" fill="currentColor" transform="translate(3 4)" />
            </clipPath>
          </defs>
        </svg>
      )

    default:
      return null
  }
}
