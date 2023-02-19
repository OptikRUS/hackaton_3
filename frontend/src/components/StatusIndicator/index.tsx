import s from './StatusIndicator.module.scss'
import cn from 'classnames'


type Props = {
  color?: 'warning' | 'success' | 'dangerous';
  form?: 'round' | 'square',
  className?: string,
}

export const StatusIndicator = (props: Props) => {
  const { color = 'success', form = 'round', className } = props
  return (
    <div
      className={cn(
        s.root,
        className,
        {
          [s.round]: form === 'round',
          [s.square]: form === 'square',
        },
        {
          [s.dangerous]: color === 'dangerous',
          [s.warning]: color === 'warning',
          [s.success]: color === 'success',
        },
      )}
    />
  )
}
