import React, {useState} from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Admin() {
    const [arr, setArr] = useState([
        { name: 'a', age: 1},
        { name: 'b', age: 2},
        { name: 'c', age: 3}
    ])
  return (
    <div>
        <h1>Admin page.</h1>
        <nav>
            <Link to='/admin'>首页</Link>
            <Link to='/admin/usermanage'>用户管理</Link>
            <Link to='/admin/systemmanage'>系统管理</Link>
        </nav>
        <Outlet />
        {
            arr.map(item => {
                return <div key={item.name}>{item.name}</div>
            })
        }
    </div>
  )
}
