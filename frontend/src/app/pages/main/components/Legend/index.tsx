import legend from './legend.png'
import s from './Legend.module.scss'

export const Legend = () => {
  return (
    <div className={s.root}>
      <img src={legend} alt={'legend'}/>
    </div>
  )
}
