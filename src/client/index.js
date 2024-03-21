import React, { Suspense } from 'react'
import reactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import makeStore from '@/store'
import App from './App'

let store = makeStore()

reactDOM.hydrateRoot(document.getElementById('root'), 
    <Provider store={store}>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </Provider>
)