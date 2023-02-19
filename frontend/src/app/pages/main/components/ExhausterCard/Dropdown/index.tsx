import { ReactComponent as Button } from '../control_button.svg'
import { AlertIcon } from '../AlertIcon'
import { useState } from 'react'
import s from './Dropdown.module.scss'
import cn from 'classnames'

export type Alert = {
  id: number | string,
  alertType: 'T' | 'V' | 'L',
  color: 'secondary' | 'warning' | 'dangerous',
}

export type Option = {
  key: number,
  value: string
  alerts: Alert[]
}

type Props = {
  name: string
  options: Option[] | null
}

export const Dropdown = (props: Props) => {
  const { name, options } = props
  const [isClicked, setIsClicked] = useState(true)
  return (
    <div className={s.dropdown}>
      <div className={s.dropdown_title} onClick={() => setIsClicked((prev) => !prev)}>
        <Button className={cn(s.button, {
          [s.is_clicked]: isClicked
        })}/>
        <p>{name}</p>
      </div>
      {isClicked && options && <div>
        {options.map((option) => (
          <div key={option.key} className={s.dropdown_option}>
            {option.value}
            <div className={s.dropdown_alertWrapper}>
              {option.alerts.map(al => (
                <AlertIcon key={al.id} {...al}/>
              ))}
            </div>
          </div>
        ))}
      </div>}
    </div>
  )
}
