import cn from 'classnames'

interface IDateLineProps {
  content: string
  center?: boolean
}

export const DateLine = ({ content, center = false }: IDateLineProps) => {
  
  return(
  <span className={cn( {'text-center': center},"mb-6", "block","text-base","text-accent","font-semibold","tracking-wide","uppercase")}>
   {content}
  </span>

)};