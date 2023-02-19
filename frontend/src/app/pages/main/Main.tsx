import { ContentHeader } from '@components/ContentHeader'
import { Legend } from './components/Legend'
import { Exhausters } from './components/Exhausters'

export const Main = () => {
  return (
    <div className={'container'}>
      <ContentHeader text={'Главный экран'}/>
      <Legend/>
      <Exhausters/>
    </div>
  )
}
