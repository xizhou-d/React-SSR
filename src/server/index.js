import express from 'express'
import path from 'path'
import { createProxyMiddleware } from 'http-proxy-middleware'

import render from './render'

const app = express()
app.use(express.static(path.resolve(__dirname, '../public')))
app.use('/api', createProxyMiddleware({ target: 'http://yuanjin.tech:5005/', changeOrigin: true }))

app.get('*', render)

app.listen(3000, () => {
    console.log('server 已经启动成功。')
})