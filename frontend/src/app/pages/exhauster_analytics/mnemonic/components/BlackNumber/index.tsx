import cn from 'classnames'
import s from './BlackNumber.module.scss'


type Props = {
  content: string | number;
  className?: string
}

export const BlackNumber = (props: Props) => {
  const {content, className} = props
  return (
    <div className={cn(s.root, className)}>
      {content}
    </div>
  )
}
