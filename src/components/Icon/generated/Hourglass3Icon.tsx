import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgHourglass3Icon(props: SVGProps<SVGSVGElement>) {
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
        d="M17 6.553c0 .38-.145.754-.418 1.078l-2.894 3.437a1.442 1.442 0 0 0 0 1.864l2.894 3.437c.273.325.418.698.418 1.079V20H7v-2.552c0-.381.145-.754.418-1.08l2.895-3.437a1.443 1.443 0 0 0 0-1.862L7.418 7.632C7.145 7.307 7 6.934 7 6.552V4h10v2.553Zm2 0V4c0-1.102-.897-2-2-2H7c-1.103 0-2 .898-2 2v2.552c0 .858.307 1.678.888 2.368L8.482 12 5.89 15.08C5.307 15.77 5 16.589 5 17.448V20c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-2.552c0-.847-.315-1.688-.888-2.368L15.518 12l2.594-3.081c.581-.69.888-1.51.888-2.366Zm-7 6.482a.997.997 0 0 0-.767.358c-3.088 3.694-3.226 3.86-3.233 4.03V19h8v-1.577c-.006-.17-.145-.336-3.234-4.03a.998.998 0 0 0-.766-.358ZM9.307 8.322 9.036 8h5.928l-.271.322-1.928 2.289a.994.994 0 0 1-.765.356.996.996 0 0 1-.765-.356L9.307 8.322Z"
      />
    </svg>
  )
}

export default createIcon(SvgHourglass3Icon)
