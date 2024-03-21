import React from 'react'
import { useRoutes, Routes, Route } from 'react-router-dom'
import routes from '@/router'
import '@/assets/global.scss'

import NotFound from '@/pages/notFound'
import FrontPage from '@/pages/frontPage'
import Admin from '@/pages/admin'
import UserManage from '@/pages/admin/userManage'
import SystemManage from '@/pages/admin/systemManage'
import AdminHome from '@/pages/admin/home'
import AdminNotFound from '@/pages/admin/notFound'
import MovieList from '@/pages/movieList'
import Home from '@/pages/home'

export default function App(props) {
  return (
    <div>
        {useRoutes(routes)}
        {/* <Routes>
            <Route path='/' element={<FrontPage />}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home/movielist' element={<MovieList />}></Route>
                <Route path='*' element={<NotFound context={props.context} />}></Route>
            </Route>
            <Route path='/admin' element={<Admin />}>
                <Route path='/admin' element={<AdminHome />}></Route>
                <Route path='/admin/usermanage' element={<UserManage />}></Route>
                <Route path='/admin/systemmanage' element={<SystemManage />}></Route>
                <Route path='/admin/:rest' element={<AdminNotFound />}></Route>
            </Route>
        </Routes> */}
    </div>
  )
}
