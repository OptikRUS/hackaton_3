import { DateRangePicker } from 'rsuite'
import { ExhausterChart } from './components/ExhausterChart'
import s from './Graphic.module.scss'
import { Filter } from './components/Filter'

export const Graphic = () => {
  return (
    <div>
      <DateRangePicker
        onChange={(value) => console.log(value)}
        format="yyyy-MM-dd HH:mm:ss"
        placeholder="Выберите дату"
        defaultCalendarValue={[new Date('2022-02-01 00:00:00'), new Date('2022-05-01 23:59:59')]}
      />
      <div className={s.graph_wrapper}>
        <div className={s.filter_wrapper}>
          <Filter/>
        </div>
        <div className={s.graphic_container}>
          <ExhausterChart/>
        </div>
      </div>

    </div>
  )
}
