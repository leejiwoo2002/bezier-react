/* External dependencies */
import React from 'react'
import { act } from 'react-dom/test-utils'
import { fireEvent } from '@testing-library/dom'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import Tooltip, { TOOLTIP_TEST_ID } from './Tooltip'
import TooltipProps from './Tooltip.types'

const ROOT_TESTID = 'container'

const RootTooltip: React.FC<TooltipProps> = ({ children, ...rests }) => (
  <div id="main" data-testid={ROOT_TESTID}>
    <Tooltip {...rests}>
      { children }
    </Tooltip>
  </div>
)

describe('TooltipContent test >', () => {
  let props: TooltipProps

  const PLAIN_TEXT_CONTENT = 'plain text content'

  const ARRAY_TEXT_CONTENT_PREFIX = 'array text content'
  const ARRAY_TEXT_CONTENT = [
    `${ARRAY_TEXT_CONTENT_PREFIX} 1`,
    `${ARRAY_TEXT_CONTENT_PREFIX} 2`,
    `${ARRAY_TEXT_CONTENT_PREFIX} 3`,
  ]

  const LINEBREAK_TEXT_CONTENT_PREFIX = 'linebreak text content'
  const LINEBREAK_TEXT_CONTENT = 'linebreak text content 1 \n linebreak text content 2 \n linebreak text content 3'

  beforeEach(() => {
    props = {
      children: 'Text',
    }

    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  const renderTooltip = (optionProps?: TooltipProps) => render(
    <RootTooltip {...props} {...optionProps} />,
  )

  it('TooltipContent with plain text content >', () => {
    const { getByTestId, queryByText } = renderTooltip({ content: PLAIN_TEXT_CONTENT })
    const rendered = getByTestId(ROOT_TESTID)

    act(() => {
      fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

      jest.runAllTimers()
    })

    expect(rendered).toContainElement(queryByText(PLAIN_TEXT_CONTENT))
  })

  it('TooltipContent with array of text contents >', () => {
    const { getByTestId, queryAllByText } = renderTooltip({ content: ARRAY_TEXT_CONTENT })

    act(() => {
      fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

      jest.runAllTimers()
    })

    expect(queryAllByText(ARRAY_TEXT_CONTENT_PREFIX, { exact: false }).length).toEqual(ARRAY_TEXT_CONTENT.length)
  })

  it('TooltipContent with linebreak text contents >', () => {
    const { getByTestId, queryAllByText } = renderTooltip({ content: LINEBREAK_TEXT_CONTENT })

    act(() => {
      fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

      jest.runAllTimers()
    })

    const linebreakCount = LINEBREAK_TEXT_CONTENT.match(/\n/g)?.length ?? 0

    expect(queryAllByText(LINEBREAK_TEXT_CONTENT_PREFIX, { exact: false }).length).toEqual(linebreakCount + 1)
  })
})
