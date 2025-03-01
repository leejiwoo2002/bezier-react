/* External dependencies */
import React, { forwardRef } from 'react'
import type { Ref } from 'react'

/* Internal dependencies */
import { StackItem } from 'Components/Stack/StackItem'
import type SpacerProps from './Spacer.types'

function Spacer(
  props: SpacerProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (
    <StackItem
      ref={forwardedRef}
      size={0}
      weight={1}
      grow
      shrink
      {...props}
    />
  )
}

export default forwardRef(Spacer)
