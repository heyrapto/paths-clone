import { useState, useEffect } from "react"

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(true) // Default to mobile for SSR
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // 48rem = 768px
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return { isMobile, isDesktop: !isMobile, isClient }
}