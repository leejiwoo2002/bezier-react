import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.207 19.707a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 1 1 1.414 1.414L8.914 12l6.293 6.293a1 1 0 0 1 0 1.414Z"
      />
    </svg>
  )
}

export default createIcon(SvgChevronLeftIcon)
