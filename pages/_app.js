import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, createDarkTheme, createLightTheme } from 'baseui'
import { baseweb } from '../baseweb'


const MyApp = ({ Component, pageProps }) =>
    <StyletronProvider value={baseweb}>
        <BaseProvider theme={createLightTheme()}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>


export default MyApp
