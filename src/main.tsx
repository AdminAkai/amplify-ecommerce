import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client'
import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/api'

import store, { persistor } from 'src/shared/redux/store.ts'

import App from './App.tsx'

import config from './aws-exports'

import './assets/fonts/stylesheet.css'
import './main.css'

Amplify.configure(config)

export const client = generateClient()

// const httpLink = createHttpLink({
//   uri: config.aws_appsync_graphqlEndpoint,
// })

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${config.oauth}`,
//     },
//   }
// })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
