import { ReactComponent as temp } from './outline.svg'
import { ReactComponent as radio }  from './radio.svg'
import { ReactComponent as water }  from './water.svg'
import s from './AlertIcon.module.scss'
import cn from 'classnames'


type Props = {
  alertType: 'T' | 'V' | 'L',
  color: 'secondary' | 'warning' | 'dangerous'
}

const images = {
  T: temp,
  V: radio,
  L: water,
}

export const AlertIcon = (props: Props) => {
  const { alertType, color } = props
  const SvgComp = images[alertType]
  return (
    <div className={cn(s.root, {
      [s.dangerous]: color === 'dangerous',
      [s.warning]: color === 'warning',
      [s.secondary]: color === 'secondary',
    })}>
      <p>{alertType}</p>
      <SvgComp/>
    </div>
  )
}
