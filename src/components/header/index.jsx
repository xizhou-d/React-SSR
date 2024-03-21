import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.scss'

export default function Header() {
  return (
    <div className={styles.header}>
        <Link to='/'>首页</Link>
        <Link to='/movielist'>电影列表</Link>
        <Link to='/admin'>管理</Link>
    </div>
  )
}
