import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Функция для установки реальной высоты viewport на мобильных устройствах
export function setViewportHeight() {
  // Получаем реальную высоту viewport
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
}

// Хук для инициализации высоты viewport
export function initViewportHeight() {
  if (typeof window !== 'undefined') {
    // Устанавливаем высоту при загрузке
    setViewportHeight()

    // Обновляем высоту при изменении размера окна
    let timeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeout)
      timeout = setTimeout(setViewportHeight, 100)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    // Специально для iOS Safari
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setViewportHeight()
      }
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }
}
