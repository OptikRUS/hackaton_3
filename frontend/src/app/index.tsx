import React from 'react'
import { CustomProvider } from 'rsuite'
import * as locales from 'rsuite/locales'
import { RootStoreProvider } from '@config/store/provider'
import { AppWS } from './AppWS'

function App() {
  return (
    <CustomProvider locale={locales['ruRU']}>
      <RootStoreProvider>
        <AppWS/>
      </RootStoreProvider>
    </CustomProvider>

  )
}

export default App
