import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgTrendingLeftCircleFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2 12C2 6.478 6.477 2 12 2s10 4.478 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12Zm9.317-5.532-5.166 5.166a.518.518 0 0 0 0 .732l5.166 5.166a.4.4 0 0 0 .683-.284V14h4.642c.198 0 .358-.224.358-.5v-3c0-.276-.16-.5-.358-.5H12V6.752a.4.4 0 0 0-.683-.284Z"
      />
    </svg>
  )
}

export default createIcon(SvgTrendingLeftCircleFilledIcon)
