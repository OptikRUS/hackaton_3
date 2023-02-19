import { type DefaultColors } from '@utils/types'
import cn from 'classnames'
import s from './ProgressBar.module.scss'


type Props = {
  value?: number;
  name: string;
  color?: DefaultColors
  className?: string
  maxValue: number
}

export const ProgressBar = (props: Props) => {
  const { value = 1, className, name, maxValue = 1, color = 'secondary' } = props
  const percent = Math.round(1 / maxValue * 100)
  const fillerStyles = {
    width: `${percent}%`,
    zIndex: 1,
  }

  return (
    <div className={className}>
      <div className={cn(s.root)}>
        <div className={s.legend}>
          <div>{value}</div>
          <div className={s.legend_name}>{name}</div>
        </div>
        <div style={fillerStyles} className={cn(s.filter, {
          [s.filter_warn]: color === 'warning',
          [s.filter_secondary]: color === 'secondary',
          [s.filter_dangerous]: color === 'dangerous',
        })}/>
      </div>
    </div>
  )
}
