import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import '@/assets/global.scss'

export default function App() {
  return (
    <div>
        {useRoutes(routes)}
    </div>
  )
}
