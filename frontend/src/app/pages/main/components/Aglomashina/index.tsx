import { ExhausterCard } from '../ExhausterCard'
import s from './Algomashina.module.scss'
import { Exgauster } from '@config/types'

type Props = {
  name: string
  exgauster: [Exgauster, Exgauster]
}
export const Aglomashina = (props: Props) => {
  const { name, exgauster } = props
  const [exgauster1, exgauster2] = exgauster
  return (
    <div>
      <div className={s.header}>
        <p>{name}</p>
      </div>
      <div className={s.cardsWrapper}>
        <ExhausterCard exgausterID={exgauster1}/>
        <ExhausterCard exgausterID={exgauster2}/>
      </div>

    </div>
  )
}
