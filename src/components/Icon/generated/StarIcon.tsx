import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgStarIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m12.002 18.438 3.741 2.718c1.786 1.297 4.188-.448 3.505-2.547l-1.428-4.398 3.74-2.718c1.785-1.298.869-4.12-1.338-4.12l-4.625-.001-1.429-4.398c-.68-2.099-3.651-2.099-4.332.001l-1.43 4.397H3.782c-2.207 0-3.123 2.823-1.34 4.12l3.742 2.719-1.428 4.399c-.683 2.098 1.72 3.843 3.505 2.546l3.741-2.718Zm.588-2.045-.588-.427-4.917 3.572a.277.277 0 0 1-.427-.31l1.653-5.09.224-.691L3.62 9.875a.277.277 0 0 1 .163-.502l5.351-.001h.726l1.879-5.78a.277.277 0 0 1 .528 0l1.654 5.089.225.69 6.077.002c.27 0 .38.343.163.502l-4.329 3.145-.588.427 1.878 5.78a.277.277 0 0 1-.427.31l-4.33-3.144Z"
      />
    </svg>
  )
}

export default createIcon(SvgStarIcon)
