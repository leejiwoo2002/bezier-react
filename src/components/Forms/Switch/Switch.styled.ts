/* Internal dependencies */
import { styled } from 'Foundation'
import { WrapperProps, ContentProps } from './Switch.types'

const PADDING = 4

/* eslint-disable @typescript-eslint/indent */
export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${props => props.size * 2}px;
  height: ${props => props.size + PADDING}px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color:
    ${props => (
      props.checked
        ? props.foundation?.theme?.['bgtxt-green-normal']
        : props.foundation?.theme?.['bg-black-dark']
    )};
  border-radius: ${props => (props.size + PADDING) / 2}px;
  opacity: ${props => (props.disabled ? '.2' : 'initial')};
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'opacity'])};

  &:hover {
    background-color:
      ${props => (
        props.checked
          ? props.foundation?.theme?.['bgtxt-green-dark']
          : props.foundation?.theme?.['bg-black-dark']
      )};
  }
`
/* eslint-enable @typescript-eslint/indent */

export const Content = styled.div<ContentProps>`
  ${({ foundation }) => foundation?.elevation?.ev2()};
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['transform'])};

  position: absolute;
  top: ${PADDING / 2}px;
  left: ${PADDING / 2}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.foundation?.theme?.['bgtxt-absolute-white-dark']};
  border-radius: 50%;
  transform: ${props => (props.checked ? `translateX(${props.size - PADDING}px)` : 'initial')};
`
