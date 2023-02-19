import { createBrowserRouter } from 'react-router-dom'
import { Main } from './main'
import { ExhausterAnalytics } from './exhauster_analytics'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
    },
    {
      path: 'exhauster/:exhausterID',
      element: <ExhausterAnalytics/>,
    }
  ]
)
