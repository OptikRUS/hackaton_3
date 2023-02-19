import { InfoCard, type InfoCardOption } from './components/InfoCard'
import { PKNumber } from './components/PKNumber'
import { ProgressBar } from './components/ProgressBar'
import { Damper } from './components/Damper'
import { BlackNumber } from './components/BlackNumber'
import schema from './schema.png'
import s from './Mnemonic.module.scss'
import { GazValues } from './components/GazValues'
import { MainDrive } from './components/MainDrive'
import cn from 'classnames'
import { useRootStore } from '@config/store/provider'
import { observer } from 'mobx-react-lite'
import { BearingApi, Exgauster } from '@config/types'
import { get, toJS } from 'mobx'
import { ExgausterApi, SettingsApi } from '@config/types/ws-message'
import { Alert } from '../../main/components/ExhausterCard/Dropdown'
import { v4 as uuid4 } from 'uuid'

const mockOptionsInfo4: InfoCardOption[] = [
  { key: 'T, °С', value: '220', color: 'warning' },
  { key: 'В, мм/с', value: '8', color: 'secondary' },
  { key: 'Г, мм/с', value: '00', color: 'dangerous' },
  { key: 'О, мм/с', value: '00', color: 'secondary' },
]

const mockOptionsInfo1: InfoCardOption[] = [
  { key: 'T, °С', value: '220', color: 'dangerous' },
]

type Props = {
  exgausterID: Exgauster
}

const getColor = (value: number, settings: SettingsApi): InfoCardOption['color'] => {
  if (value > settings.warning_max && value < settings.alarm_max) {
    return 'warning'
  } else if (value > settings.alarm_max) {
    return 'dangerous'
  }
  return 'secondary'
}

const roundValue = (num: number) => {
  return Math.round(num)
}

const getBearing = (bearing?: BearingApi): InfoCardOption[] => {
  const options: InfoCardOption[] = []
  if (!bearing) {
    return options
  }
  const tempOption: InfoCardOption = {
    key: 'T, °С',
    value: `${roundValue(bearing.heating_temperature.temperature)}`,
    color: getColor(bearing.heating_temperature.temperature, bearing.heating_temperature.settings)
  }
  options.push(tempOption)
  if (bearing.vibration) {
    const { vertical, horizontal, axial } = bearing.vibration
    const verticalOption: InfoCardOption = {
      key: 'В, мм/с',
      value: `${roundValue(vertical.value)}`,
      color: getColor(vertical.value, vertical.settings)
    }
    options.push(verticalOption)
    const horizontalOption: InfoCardOption = {
      key: 'Г, мм/с',
      value: `${roundValue(horizontal.value)}`,
      color: getColor(horizontal.value, horizontal.settings)
    }
    options.push(horizontalOption)
    const axialOption: InfoCardOption = {
      key: 'О, мм/с',
      value: `${roundValue(axial.value)}`,
      color: getColor(axial.value, axial.settings)
    }
    options.push(axialOption)
  }
  return options
}

const getDiffTimeInSeconds = (moment?: string | null | Date): number => {
  if (!moment) {
    return 0
  }
  const startDate = new Date(moment)
// Do your operations
  const endDate = new Date()
  const seconds = ((endDate.getTime() - startDate.getTime()) / 1000) - 10800
  return Math.round(seconds)
}

export const Mnemonic = observer(({ exgausterID }: Props) => {
  const rootStore = useRootStore()
  const moment = toJS(rootStore.timeStore.moment)
  const exgauster = rootStore.getExgauster(exgausterID)
  const clearMessage = toJS(exgauster.message)

  const oilLevel = roundValue(clearMessage?.oil_system.oil_level || 1)
  const oilPress = roundValue(clearMessage?.oil_system.oil_pressure || 1)
  const stat: 'full' | 'half' | 'empty' = clearMessage && clearMessage.valve_position.gas_valve_position === 0 ? 'empty' : 'half'
  const rightTop = `${Math.round(clearMessage?.cooler.water.temperature_after || 0)} °С`
  const leftTop = `${Math.round(clearMessage?.cooler.water.temperature_before || 0)} °С`
  const left = `${Math.round(clearMessage?.cooler.oil.temperature_after || 0)} °С`
  const bottom = `${Math.round(clearMessage?.cooler.oil.temperature_before || 0)} °С`

  return (
    <div className={s.imageWrapper}>
      <img className={s.image} src={schema} alt={'schema'}/>
      <InfoCard className={s.info_card_1} name={'1 ПС'} options={getBearing(clearMessage?.bearing_1)}/>
      <InfoCard className={s.info_card_2} name={'2 ПС'} options={getBearing(clearMessage?.bearing_2)}/>
      <InfoCard className={s.info_card_3} name={'3 ПС'} options={getBearing(clearMessage?.bearing_3)}/>
      <InfoCard className={s.info_card_4} name={'4 ПС'} options={getBearing(clearMessage?.bearing_4)}/>
      <InfoCard className={s.info_card_5} name={'5 ПС'} options={getBearing(clearMessage?.bearing_5)}/>
      <InfoCard className={s.info_card_6} name={'6 ПС'} options={getBearing(clearMessage?.bearing_6)}/>
      <InfoCard className={s.info_card_7} name={'7 ПС'} options={getBearing(clearMessage?.bearing_7)}/>
      <InfoCard className={s.info_card_8} name={'8 ПС'} options={getBearing(clearMessage?.bearing_8)}/>
      <InfoCard className={s.info_card_9} name={'9 ПС'} options={getBearing(clearMessage?.bearing_9)}/>
      <PKNumber num={9} color={'warning'} className={s.pk_9}/>
      <PKNumber num={8} color={'warning'} className={s.pk_8}/>
      <PKNumber num={7} color={'warning'} className={s.pk_7}/>
      <PKNumber num={5} color={'warning'} className={s.pk_5}/>
      <PKNumber num={4} color={'warning'} className={s.pk_4}/>
      <PKNumber num={6} color={'warning'} className={s.pk_6}/>
      <PKNumber num={3} color={'warning'} className={s.pk_3}/>
      <PKNumber num={2} color={'warning'} className={s.pk_2}/>
      <PKNumber num={1} color={'warning'} className={s.pk_1}/>
      <Damper className={s.damper} state={stat}/>
      <ProgressBar className={s.gaz_progress} value={roundValue(clearMessage?.gas_manifold.temperature_before || 1)}
                   maxValue={220} name={'Температура газа, °C '}/>
      <ProgressBar className={s.soil_progress} value={oilLevel} name={'УРОВЕНЬ МАСЛА, %'} maxValue={100}
                   color={'dangerous'}/>
      <ProgressBar className={s.soil_level} value={oilPress} maxValue={6} name={'Давление масла, кг/см2'}
                   color={'warning'}/>
      <GazValues className={s.gaz_info} exgausterMessage={clearMessage}/>
      <MainDrive className={s.main_drive} exMessage={clearMessage}/>
      <BlackNumber className={cn(s.sensor, s.sensor_from_in)} content={leftTop}/>
      <BlackNumber className={cn(s.sensor, s.sensor_from_out)} content={rightTop}/>
      <BlackNumber className={cn(s.sensor, s.sensor_inside_left)} content={left}/>
      <BlackNumber className={cn(s.sensor, s.sensor_inside_bottom)} content={bottom}/>
      <div className={s.moment_info}>
        Величина отставания отображаемых данных от реального времени: {getDiffTimeInSeconds(moment)} секунд
      </div>
    </div>
  )
})
