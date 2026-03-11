import * as React from "react"

import { cn } from "@/lib/utils"

function VisuallyHidden({ className, ...props }) {
  return (
    <span
      className={cn(
        "sr-only",
        className
      )}
      {...props} />
  )
}

export { VisuallyHidden }
