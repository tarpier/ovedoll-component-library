import React from "react"

interface IContentWrapperProps {
  children: React.ReactNode
  className?: string
}
export const ContentWrapper = ({ children, className }: IContentWrapperProps) => {
  return (
    <div className={`px-4 mx-auto container xl:max-w-screen-xl ${className}`}>
      {children}
    </div>
  )
}