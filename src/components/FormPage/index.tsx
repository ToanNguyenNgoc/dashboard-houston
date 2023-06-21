import { ReactNode } from "react"

export const FormPageContainer = ({ children, className = '' }: { children?: ReactNode, className?: string }) => {
  return (
    <div style={{ paddingTop: '20px', paddingBottom: '20px' }} className={`card card_cnt ${className}`}>{children}</div>
  )
}