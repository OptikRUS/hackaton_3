import { ContentHeader } from '@components/ContentHeader'
import { AnalyticPage, SwitchPageButtons } from '@components/SwitchPageButtons'
import { useState } from 'react'
import { Mnemonic } from './mnemonic'
import { Graphic } from './graphic'
import { useParams } from 'react-router-dom'
import { Exgauster } from '@config/types'

export const ExhausterAnalytics = () => {
  const [page, setPage] = useState<AnalyticPage>('mnemonic')
  const { exhausterID } = useParams<{ exhausterID: Exgauster }>()

  if (!exhausterID) {
    return null
  }

  return (
    <div className={'container'}>
      <ContentHeader text={'Эксгаустер Х-172'}/>
      <SwitchPageButtons onChange={(page) => setPage(page)}/>
      {page === 'mnemonic' ? <Mnemonic exgausterID={exhausterID}/> : <Graphic/>}
    </div>
  )
}
