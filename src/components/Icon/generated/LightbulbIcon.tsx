import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgLightbulbIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11 4h2V1h-2v3Zm-7.707.707 1.414-1.414 2 2-1.414 1.414-2-2Zm14 .586 2-2 1.414 1.414-2 2-1.414-1.414ZM13.006 17c.065-1.13.598-2.184 1.454-2.852A3.97 3.97 0 0 0 16 11c0-1.21-.539-2.342-1.479-3.106-.954-.775-2.159-1.058-3.394-.802-1.537.321-2.797 1.633-3.065 3.192-.25 1.46.276 2.885 1.411 3.81.907.741 1.453 1.789 1.52 2.906h2.013ZM10.718 5.134a6.034 6.034 0 0 1 5.064 1.208A5.98 5.98 0 0 1 18 11a5.959 5.959 0 0 1-2.31 4.725c-.432.337-.69.9-.69 1.506V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3.768c0-.599-.289-1.178-.79-1.588-1.703-1.388-2.494-3.518-2.119-5.699.41-2.385 2.27-4.319 4.627-4.811Z"
      />
    </svg>
  )
}

export default createIcon(SvgLightbulbIcon)
