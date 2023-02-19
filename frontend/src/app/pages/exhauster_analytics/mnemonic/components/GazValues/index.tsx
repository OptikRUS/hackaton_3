import { BlackNumber } from '../BlackNumber'
import s from './GazValues.module.scss'
import cn from 'classnames'
import { ExgausterApi } from '@config/types/ws-message'


type Props = {
  className?: string
  exgausterMessage?: ExgausterApi | null
}
export const GazValues = ({ className, exgausterMessage }: Props) => {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.value}>
        <div>Разряжение, мм.в.ст</div>
        <BlackNumber content={`${Math.round(exgausterMessage?.gas_manifold.underpressure_before || 0)}`}/>
      </div>
      <div className={s.value}>
        <div>Уровень пыли, мг/м3</div>
        <BlackNumber content={'15'}/>
      </div>
    </div>
  )
}
