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
          fill="currentColor"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          id="tiktok"
          data-name="Flat Color"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            id="primary"
            d="M21,7V9a1,1,0,0,1-1,1,8,8,0,0,1-4-1.08V15.5A6.5,6.5,0,1,1,6.53,9.72a1,1,0,0,1,1.47.9v2.52a.92.92,0,0,1-.28.62,2.49,2.49,0,0,0,2,4.23A2.61,2.61,0,0,0,12,15.35V3a1,1,0,0,1,1-1h2.11a1,1,0,0,1,1,.83A4,4,0,0,0,20,6,1,1,0,0,1,21,7Z"
            style={{ fill: 'rgb(0, 0, 0)' }}
          ></path>
        </svg>
      )
    case 'instagram':
      return (
        <svg
          fill="currentColor"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
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
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
            fill="currentColor"
          />
          <path
            d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
            fill="#000000"
          />
          <path
            d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
            fill="#000000"
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
