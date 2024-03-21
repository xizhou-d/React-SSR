import React, { createContext } from 'react'
import ReactDOM from 'react-dom/server'
import { Provider } from 'react-redux'
import makeStore from '@/store'
import { StaticRouter  } from 'react-router-dom/server'
import App from './App'
import getHTML from './getHTML'
import loadData from './loadData'

export default async (req, res) => {
    let store = makeStore()
    const context = {}

    // 加载数据到仓库
    // 调用对应组件 (根据路由匹配到的组件) 的 loadData 
    await loadData(req.url, store)
    console.log('req.url', req.url)

    const HomeComponentHtml = ReactDOM.renderToString( 
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App context={context} />
            </StaticRouter> 
        </Provider>
    )
    const html = getHTML(HomeComponentHtml, req.url, store)
    res.send(html)
}