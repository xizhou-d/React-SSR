import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
        <h1>Admin page.</h1>
        <nav>
            <Link to='/admin'>首页</Link>
            <Link to='/admin/usermanage'>用户管理</Link>
            <Link to='/admin/systemmanage'>系统管理</Link>
        </nav>
        <Outlet />
    </div>
  )
}
