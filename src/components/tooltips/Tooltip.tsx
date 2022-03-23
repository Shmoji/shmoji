import { ReactNode, useState } from 'react'
import TooltipContent from './TooltipContent'

export default function Tooltip({
  children: tooltipTarget,
  tooltipContent,
}: {
  children: ReactNode
  tooltipContent: any
}) {
  const [show, setShow] = useState(false)

  return (
    <div
      className="inline relative pb-6"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <TooltipContent show={show}>
        {tooltipContent}
      </TooltipContent>
      <div className="inline cursor-pointer">
        {tooltipTarget}
      </div>
    </div>
  )
}
