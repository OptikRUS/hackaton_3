import { BlackNumber } from '../BlackNumber'
import s from './MainDrive.module.scss'
import cn from 'classnames'
import { ExgausterApi } from '@config/types/ws-message'


type Props = {
  className?: string
  exMessage?: ExgausterApi | null
}
export const MainDrive = ({ className, exMessage }: Props) => {
  const amper = `${exMessage?.main_drive.rotor_current}` || '000'
  const drive = `${exMessage?.main_drive.stator_current}` || '000'
  const roter = `${exMessage?.main_drive.rotor_voltage}` || '000'
  const stator = `${exMessage?.main_drive.stator_voltage}` || '000'
  return (
    <div className={cn(s.root, className)}>
      <div className={s.value}>
        <div>Ток, А</div>
        <BlackNumber content={amper}/>
      </div>
      <div className={s.value}>
        <div>Ток двигателя, А</div>
        <BlackNumber content={drive}/>
      </div>
      <div className={s.value}>
        <div>Напряжение ротера, кВт</div>
        <BlackNumber content={roter}/>
      </div>
      <div className={s.value}>
        <div>Напряжение статера, кВт</div>
        <BlackNumber content={stator}/>
      </div>
    </div>
  )
}
