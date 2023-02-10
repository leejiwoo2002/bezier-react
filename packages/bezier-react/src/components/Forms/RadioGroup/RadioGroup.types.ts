/* External dependencies */
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { FormComponentProps } from 'Components/Forms'
import { StackProps } from 'Components/Stack'

interface RadioGroupOptions {
  /**
   * The controlled value of the radio item to check.
   * Should be used in conjunction with `onValueChange`.
   */
  value?: string
  /**
   * The value of the radio item that should be checked when initially rendered.
   * Use when you do not need to control the state of the radio items.
   */
  defaultValue?: string
  /**
   * The name of the group.
   * Submitted with its owning form as part of a name/value pair.
   */
  name?: string
  /**
   * Default spacing between Radio, in pixels.
   * @default 0
   */
  spacing?: StackProps['spacing']
  /**
   * Direction of this RadioGroup.
   * @default vertical
   */
  direction?: StackProps['direction']
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void
}

interface RadioOptions {
  /**
   * The value given as data when submitted with a `RadioGroupProps.name`.
   */
  value: string
  /**
   * The unique id of the radio item. It is created automatically by default.
   * It used by the label element in the radio item.
   */
  id?: string
}

type RadioFormComponentProps = Pick<FormComponentProps, 'disabled' | 'required'>

export interface RadioGroupProps extends
  BezierComponentProps,
  ChildrenProps<React.ReactElement[] | React.ReactElement>,
  RadioFormComponentProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof RadioGroupOptions | keyof RadioGroupPrimitive.RadioGroupProps>,
  RadioGroupOptions {}

export interface RadioProps extends
  BezierComponentProps,
  ChildrenProps,
  RadioFormComponentProps,
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof RadioOptions>,
  RadioOptions {}