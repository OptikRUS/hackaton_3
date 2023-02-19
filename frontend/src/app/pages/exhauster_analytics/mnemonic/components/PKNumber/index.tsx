import { type DefaultColors } from "@utils/types";
import cn from 'classnames'
import s from './PKNumber.module.scss'


type Props = {
  num: number;
  color: DefaultColors
  className?: string
}

export const PKNumber = (props: Props) => {
  const {num, color, className} = props
  return (
    <div className={cn(s.root, className, {
      [s.root_dangerous]: color === 'dangerous',
      [s.root_secondary]: color === 'secondary',
      [s.root_warn]: color === 'warning',
    })}>
      {num}
    </div>
  )
}
