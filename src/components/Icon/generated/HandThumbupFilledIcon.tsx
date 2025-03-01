import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgHandThumbupFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.777 2.564c-.37-.37-.81-.514-1.24-.514-.428 0-.87.145-1.237.512L8.83 8.031l-.202.212A6.215 6.215 0 0 0 7 12.451v.776l.005.256a6.225 6.225 0 0 0 3.924 5.547 7.11 7.11 0 0 0 2.644.51h2.677l.192-.006a3.26 3.26 0 0 0 2.85-2.102l2.25-6 .069-.203a3.22 3.22 0 0 0-.44-2.791l-.128-.172A3.22 3.22 0 0 0 18.5 7.04h-3.73l2.005-2.003.113-.125a1.753 1.753 0 0 0-.11-2.348ZM3.054 9.273C3 9.38 3 9.52 3 9.8v8.4c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C3.38 19 3.52 19 3.8 19h1.4c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C6 18.62 6 18.48 6 18.2V9.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C5.62 9 5.48 9 5.2 9H3.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218Z"
      />
    </svg>
  )
}

export default createIcon(SvgHandThumbupFilledIcon)
