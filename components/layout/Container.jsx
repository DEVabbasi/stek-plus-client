import { cn } from "@/lib/utils"

export function Container({ children, className, ...props }) {
  return (
    <div 
      className={cn("container-custom", className)} 
      {...props}
    >
      {children}
    </div>
  )
}