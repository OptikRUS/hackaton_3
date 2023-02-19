import cn from 'classnames'
import s from './SwitchPageButtons.module.scss'
import { useState } from 'react'


type Props = {
  onChange?: (val: AnalyticPage) => void
}

export type AnalyticPage = 'mnemonic' | 'graph'

export const SwitchPageButtons = (props: Props) => {
  const { onChange } = props
  const [currentPage, setCurrentPage] = useState<AnalyticPage>('mnemonic')

  const handleClick = (val: AnalyticPage) => () => {
    if (currentPage !== val) {
      setCurrentPage(val)
      onChange?.(val)
    }
  }

  return (
    <div className={s.root}>
      <button
        onClick={handleClick('mnemonic')}
        className={cn(s.button, {
          [s.active]: currentPage === 'mnemonic',
        })}
      >
        Мнемосхема
      </button>
      <button
        onClick={handleClick('graph')}
        className={cn(s.button, {
          [s.active]: currentPage === 'graph',
        })}
      >
        График
      </button>
    </div>
  )
}
