import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgTriangleLeftCircleFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.808 7.356c.015 0 .028.006.043.008a.3.3 0 0 1 .147.058c.015.01.03.02.041.035a.284.284 0 0 1 .083.195v8.719c0 .08-.036.144-.083.195a.308.308 0 0 1-.188.093c-.015.002-.028.009-.043.008a.291.291 0 0 1-.178-.065l-5.23-4.36a.3.3 0 0 1 0-.461l5.23-4.36a.298.298 0 0 1 .178-.065ZM12 2C6.477 2 2 6.478 2 12c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10Z"
      />
    </svg>
  )
}

export default createIcon(SvgTriangleLeftCircleFilledIcon)
