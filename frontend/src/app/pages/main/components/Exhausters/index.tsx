import { Aglomashina } from '../Aglomashina'
import s from './Exhausters.module.scss'
export const Exhausters = () => {
  return (
    <section className={s.root}>
      <Aglomashina name={'Агломашина №1'} exgauster={['exgauster_1_u_171', 'exgauster_2_u_172']}/>
      <Aglomashina name={'Агломашина №2'} exgauster={['exgauster_3_f_171', 'exgauster_4_f_172']}/>
      <Aglomashina name={'Агломашина №3'} exgauster={['exgauster_5_x_171', 'exgauster_6_x_172']}/>
    </section>
  )
}
