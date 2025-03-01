import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgInstagramIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z"
      />
      <path
        fill="currentColor"
        d="M16.625 8.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.528 6.105c.222.572.374 1.226.418 2.184.044.96.054 1.267.054 3.71 0 2.446-.01 2.752-.054 3.712-.044.958-.196 1.613-.418 2.185a4.411 4.411 0 0 1-1.038 1.594c-.501.5-1.003.808-1.595 1.038-.572.222-1.226.375-2.184.419-.96.043-1.267.053-3.711.053s-2.751-.01-3.711-.053c-.958-.044-1.612-.197-2.184-.42a4.411 4.411 0 0 1-1.594-1.037c-.5-.5-.809-1.002-1.039-1.594-.222-.572-.374-1.227-.418-2.185C3.011 14.75 3 14.445 3 12c0-2.444.011-2.751.054-3.711.044-.958.196-1.612.418-2.184A4.414 4.414 0 0 1 4.511 4.51a4.385 4.385 0 0 1 1.594-1.038c.572-.223 1.226-.375 2.184-.42C9.249 3.01 9.556 3 12 3s2.751.01 3.711.054c.958.044 1.612.196 2.184.419A4.397 4.397 0 0 1 19.49 4.51c.5.5.808 1.002 1.038 1.594Zm-1.872 10.931c.116-.3.256-.752.294-1.585.04-.9.05-1.17.05-3.45 0-2.28-.01-2.55-.05-3.45-.038-.833-.178-1.285-.294-1.585-.155-.4-.34-.684-.639-.982a2.644 2.644 0 0 0-.982-.64c-.3-.116-.753-.256-1.585-.294C14.55 5.01 14.28 5 12 5c-2.28 0-2.55.01-3.45.05-.833.038-1.285.178-1.586.294-.399.156-.683.34-.981.64a2.63 2.63 0 0 0-.64.982c-.116.3-.256.752-.294 1.585-.04.9-.049 1.17-.049 3.45 0 2.28.009 2.55.05 3.45.037.833.177 1.284.293 1.585.155.399.341.683.64.982.298.299.582.484.98.639.302.117.754.256 1.586.294.9.04 1.17.049 3.45.049 2.281 0 2.55-.009 3.451-.05.832-.037 1.285-.176 1.585-.293.399-.155.683-.34.982-.639.299-.299.484-.583.639-.982Z"
      />
    </svg>
  )
}

export default createIcon(SvgInstagramIcon)
