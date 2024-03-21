import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getMoviesAction } from '@/store/movie/actionCreate'

function MovieList(props) {
    const { movie = [], getMovies } = props
    useEffect(() => {
        // 如果服务器处理了数据，则什么也不做
        // 如果服务器没有处理数据，则需要加载数据 
        if (window.pathName === '/movielist') {
            console.log('不加载数据')
            // 不需要加载数据，服务端处理数据的时候会标记处理的是那个组件的数据
            return
        } else {
            console.log('加载数据')
            getMovies()
        }
    }, [])
  return (
    <div>
        <h1>MovieList page.</h1>
        <ul>
            {
                movie.map(m => {
                    return (
                        <li key={m._id}>
                            {/* <img src={m.} alt="" /> */}
                            <span>{m.name}</span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

// 在组件服务端渲染之前调用的函数，需要在服务端拿到数据
MovieList.loadData = async function(store) {
    await store.dispatch(getMoviesAction())
}

function mapStateToProps(state) {
    return {
        movie: state.movie
    }
}

function mapActionsToProps(dispatch) {
    return {
        getMovies() {
            dispatch(getMoviesAction())
        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(MovieList)
