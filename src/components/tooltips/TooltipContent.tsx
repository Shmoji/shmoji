import { ReactNode } from 'react'
import classNames from 'classnames'

export default function TooltipContent({
  show,
  children,
}: {
  show: boolean
  children: ReactNode
}) {
  return (
    <div className={classNames(
      show ? 'block' : 'hidden',
      'absolute left-1/2 transform -translate-x-1/2 z-50',
    )}>
      <div
        className="p-3 rounded-lg bg-gray-300 dark:bg-gray-800"
      >
        {children}
      </div>
    </div>
  )
}
