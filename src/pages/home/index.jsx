import React, { useState } from 'react'
import { connect } from 'react-redux'

import styles from './index.scss'
import pngUrl from '@/assets/shihao.jpeg'
import { addAction, subAction } from '@/store/count/actionCreate'


function Home(props) {
    console.log('PROPS', props.context)
  const { count, addNum, subNum } = props

  return (
    <div>
        <h1>首页</h1>
        <button className={styles.beautyButton}>测试样式引入的图片</button>
        <div>slfjsklf</div>
        <img src={pngUrl} alt="" style={{width: '300px'}} />
        <div className={styles.bg}></div>
        <hr />
        <button onClick={() => addNum(1)}> +1 </button>
        <h1>redux: {count}</h1>
        <button onClick={() => subNum(-1)}> -1 </button>
    </div>
  )
}

function mapToState(state) {
    return {
        count: state.count.count
    }
}

function mapToProps(dispatch) {
    return {
        addNum(num) {
            dispatch(addAction(num))
        },
        subNum(num) {
            dispatch(subAction(num))
        }
    }
}

export default  connect(mapToState, mapToProps)(Home)
