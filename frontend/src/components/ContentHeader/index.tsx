import { ReactComponent as Icon } from './Icon.svg'
import s from './ContentHeader.module.scss'
import { Link } from 'react-router-dom'

type Props = {
  text: string
}

export const ContentHeader = ({ text }: Props) => {
  return (
    <div className={s.root}>
      <Link to='/'><Icon/></Link>
      <h2 className={s.text}>{text}</h2>
    </div>
  )
}
