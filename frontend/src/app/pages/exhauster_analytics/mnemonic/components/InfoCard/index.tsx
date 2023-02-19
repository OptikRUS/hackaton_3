import s from './InfoCard.module.scss'
import cn from 'classnames'

type Option = {
  key: string
  value: string
  color?: 'secondary' | 'warning' | 'dangerous'

}

export type InfoCardProps = {
  name: string
  options: Option[]
  className?: string
}

export const InfoCard = (props: InfoCardProps) => {
  const { name, options, className } = props
  return (
    <div className={cn(s.root, className)}>
      <div className={s.title}>{name}</div>
      <div>
        {options.map(option => (
          <div key={option.key} className={cn(s.option, {
            [s.option_warning]: option.color === 'warning',
            [s.option_dangerous]: option.color === 'dangerous',
          })}>
            <div>{option.key}</div>
            <div>{option.value}</div>
          </div>
        ))}
      </div>

    </div>
  )
}

export type { Option as InfoCardOption }
