import s from './ExhausterCard.module.scss'
import { StatusIndicator } from '@components/StatusIndicator'
import { ReactComponent as ButtonSvg } from './control_button.svg'
import scheme from './Scheme.png'
import { Dropdown, type Option, type Alert } from './Dropdown'
import { Link } from 'react-router-dom'
import { BearingApi, Exgauster, WsExgausterMessage } from '@config/types'
import { useRootStore } from '@config/store/provider'
import { observer } from 'mobx-react-lite'
import { v4 as uuid4 } from 'uuid'
import { toJS } from 'mobx'
import { InfoApi, SettingsApi } from '@config/types/ws-message'

const alerts1: Alert[] = [
  { id: 1, alertType: 'T', color: 'dangerous' },
  { id: 2, alertType: 'V', color: 'warning' },
]

const warningsMock1: Option[] = [
  { key: 1, value: '№7 п-к', alerts: alerts1 },
  { key: 2, value: '№8 п-к', alerts: alerts1 },
]

type Bearings = WsExgausterMessage[Exgauster]


const getAlert = (value: number, settings: SettingsApi, alertType: Alert['alertType']): Alert | null => {
  if (value > settings.warning_max && value < settings.alarm_max) {
    return ({
      id: uuid4(),
      alertType,
      color: 'warning'
    })
  } else if (value > settings.alarm_max) {
    return ({
      id: uuid4(),
      alertType,
      color: 'dangerous'
    })
  }
  return ({
      id: uuid4(),
      alertType,
      color: 'secondary'
    })
}

const generateAlerts = (message: BearingApi): Alert[] => {
  const alerts: Alert[] = []

  const { temperature, settings } = message.heating_temperature

  const alert = getAlert(temperature, settings, 'T')
  alert && alerts.push(alert)

  if (message.vibration) {
    const values = Object.values(message.vibration)
    values.forEach(({ settings, value }: InfoApi) => {
      const newAlert = getAlert(value, settings, 'V')
      if (newAlert) {
        alerts.push(newAlert)
      }
    })
  }

  return alerts
}

const generateOption = (message: WsExgausterMessage[Exgauster]) => {
  const bear1: Option = {
    key: 0,
    value: '№1 п-к',
    alerts: generateAlerts(message.bearing_1)
  }
  const bear2: Option = {
    key: 0,
    value: '№2 п-к',
    alerts: generateAlerts(message.bearing_2)
  }
  const bear3: Option = {
    key: 0,
    value: '№3 п-к',
    alerts: generateAlerts(message.bearing_3)
  }
  const bear4: Option = {
    key: 0,
    value: '№4 п-к',
    alerts: generateAlerts(message.bearing_4)
  }
  const bear5: Option = {
    key: 0,
    value: '№5 п-к',
    alerts: generateAlerts(message.bearing_5)
  }
  const bear6: Option = {
    key: 0,
    value: '№6 п-к',
    alerts: generateAlerts(message.bearing_6)
  }
  const bear7: Option = {
    key: 0,
    value: '№7 п-к',
    alerts: generateAlerts(message.bearing_7)
  }
  const bear8: Option = {
    key: 0,
    value: '№8 п-к',
    alerts: generateAlerts(message.bearing_8)
  }
  const bear9: Option = {
    key: 0,
    value: '№9 п-к',
    alerts: generateAlerts(message.bearing_9)
  }
  const allBears = [bear1, bear2, bear3, bear4, bear5, bear6, bear7, bear8, bear9]
    .map((bear, index) => ({...bear, key: index}))
  const allPC = allBears
    .filter(bear => bear.alerts.filter(al => al.color !== 'secondary').length === 0)
  const warnings = allBears.filter(bear => bear.alerts.filter(al => al.color !== 'secondary').length !== 0)
  return [allPC, warnings]
}

type Props = {
  exgausterID: Exgauster
}

export const ExhausterCard = observer(({ exgausterID }: Props) => {

  const rootStore = useRootStore()
  const exgauster = rootStore.getExgauster(exgausterID)
  const clearExgauster = toJS(exgauster.message)
  const [all, warnings] = clearExgauster !== null ? generateOption(clearExgauster) : [null, null] as const

  let color: 'success' | 'dangerous'  = 'success'
  if (clearExgauster?.exgauster_work) {
    color = clearExgauster.exgauster_work === 0 ? 'dangerous' : 'success'
  }

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.header__description}>
          <StatusIndicator color={color} className={s.indicator}/>
          <p>{exgauster.name}</p>
        </div>
        <Link to={`/exhauster/${exgausterID}`}>
          <ButtonSvg className={s.button}/>
        </Link>
      </div>
      <div>
        <p>Ротор № 35к</p>
        <p>12.02.2022</p>
        <p>Изменить</p>
      </div>
      <div/>
      <div>Последняя замена ротера</div>
      <div>
        <div>6 сут</div>
        <div>
          <p>Прогноз</p>
          <p>12 сут </p>
        </div>
      </div>
      <img src={scheme} alt={'scheme'} className={s.image}/>
      <Dropdown name={'Предупреждение'} options={warnings}/>
      <Dropdown name={'Все подшипники'} options={all}/>
    </div>
  )
})
