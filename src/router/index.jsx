import React from 'react'
import NotFound from '@/pages/notFound'
import FrontPage from '@/pages/frontPage'
import Admin from '@/pages/admin'
import UserManage from '@/pages/admin/userManage'
import SystemManage from '@/pages/admin/systemManage'
import AdminHome from '@/pages/admin/home'
import AdminNotFound from '@/pages/admin/notFound'
import MovieList from '@/pages/movieList'
import Home from '@/pages/home'

const routes = [
    {
        path: '/',
        element: <FrontPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/movielist',
                element: <MovieList />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: '/admin/',
                element: <AdminHome />
            },
            {
                path: '/admin/usermanage',
                element: <UserManage />
            },
            {
                path: '/admin/systemmanage',
                element: <SystemManage />
            },
            {
                path: '/admin/:rest',
                element: <AdminNotFound />
            }
        ]
    },
]

export default routes