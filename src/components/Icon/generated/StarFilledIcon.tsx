import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgStarFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m12 17.76 4.785 3.476c1.107.804 2.595-.278 2.173-1.58l-1.828-5.624 4.785-3.476c1.106-.804.538-2.555-.83-2.555h-5.914l-1.828-5.625c-.423-1.301-2.263-1.301-2.686 0L8.83 8H2.915c-1.368 0-1.937 1.75-.83 2.555l4.784 3.476-1.827 5.625c-.423 1.3 1.066 2.383 2.173 1.579L12 17.76Z"
      />
    </svg>
  )
}

export default createIcon(SvgStarFilledIcon)
