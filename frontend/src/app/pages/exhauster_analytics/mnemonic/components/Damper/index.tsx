import { ReactComponent as DumberSvg } from './damper.svg'
import { ReactComponent as UnionSvg } from './union.svg'
import s from './Damper.module.scss'
import cn from 'classnames'

type Props = {
  state: 'full' | 'half' | 'empty';
  className?: string;
}

const percents: Record<Props['state'], number> = {
  full: 100,
  half: 50,
  empty: 0,
}

export const Damper = ({ state, className }: Props) => {
  const currPercent = percents[state]
  return (
    <div className={cn(s.root, className)}>
      <DumberSvg className={s.damper}/>
      <UnionSvg className={s.union}/>
      <div className={cn(s.line, {
        [s.line_full]: state === 'full',
        [s.line_half]: state === 'half',
        [s.line_empty]: state === 'empty',
      })}/>
      <div className={s.percents}>{currPercent}%</div>
    </div>
  )
}
