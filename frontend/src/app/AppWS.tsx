import { RouterProvider } from 'react-router-dom'
import { router } from './pages'
import React, { useEffect } from 'react'
import { WsExgausterMessage } from '@config/types'
import { useRootStore } from '@config/store/provider'

export const AppWS = () => {
  const rootStore = useRootStore()
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/exgausters/zsmk-9433-dev-01')
    console.log('connect')
    ws.onmessage = (ev) => {
      const result = JSON.parse(JSON.parse(ev.data)) as WsExgausterMessage
      console.log(result)
      rootStore.exhauster_1_u_171.setMessage(result.exgauster_1_u_171)
      rootStore.exhauster_2_u_172.setMessage(result.exgauster_2_u_172)
      rootStore.exhauster_3_f_171.setMessage(result.exgauster_3_f_171)
      rootStore.exhauster_4_f_172.setMessage(result.exgauster_4_f_172)
      rootStore.exhauster_5_x_171.setMessage(result.exgauster_5_x_171)
      rootStore.exhauster_6_x_172.setMessage(result.exgauster_6_x_172)
      rootStore.timeStore.setMoment(result.moment)
    }
  }, [])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}
