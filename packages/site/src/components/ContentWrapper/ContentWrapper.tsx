import React from "react"

interface IContentWrapperProps {
  children: React.ReactNode
  className?: string
  isWide?: boolean
}
export const ContentWrapper = ({ children, className = '', isWide = false }: IContentWrapperProps) => {
  const maxWidth = isWide ? 'lg:max-w-screen-lg' : 'lg:max-w-screen-md'

  return (
    <div className={`px-4 mx-auto container ${maxWidth} ${className}`}>
      {children}
    </div>
  )
}