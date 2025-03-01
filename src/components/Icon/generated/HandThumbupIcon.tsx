import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgHandThumbupIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.25 5.967a4.001 4.001 0 0 1 3.745 5.405l-2.25 6A4.018 4.018 0 0 1 16 19.967h-2.677a7.854 7.854 0 0 1-2.923-.563 6.967 6.967 0 0 1-4.4-6.5v-.776c0-1.87.728-3.628 2.05-4.95l5.47-5.47c.944-.944 2.591-.944 3.535 0 .974.976.974 2.56 0 3.536l-.723.723h1.918Zm1.872 4.732-2.25 6A2.01 2.01 0 0 1 16 17.998h-2.677c-.75 0-1.483-.142-2.18-.42A4.977 4.977 0 0 1 8 12.934v-.776c0-1.336.52-2.592 1.464-3.536l5.47-5.47a.498.498 0 0 1 .707 0 .502.502 0 0 1 0 .708L13.38 6.122a1.098 1.098 0 0 0 .78 1.875h4.091c.665 0 1.265.313 1.643.86.38.548.463 1.219.23 1.842ZM2 9.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C2.38 9 2.52 9 2.8 9h1.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .219.218C5 9.38 5 9.52 5 9.8v8.4c0 .28 0 .42-.054.527a.5.5 0 0 1-.219.218C4.62 19 4.48 19 4.2 19H2.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C2 18.62 2 18.48 2 18.2V9.8Z"
      />
    </svg>
  )
}

export default createIcon(SvgHandThumbupIcon)
