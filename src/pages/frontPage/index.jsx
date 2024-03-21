import React from 'react'
import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

export default function Front() {
  return (
    <div>
        <Header />
        <div>
            {/* 这里进行切换 */}
            <Outlet />
        </div>
    </div>
  )
}
