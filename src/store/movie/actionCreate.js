import { CHANGE_LIST } from './contants'
import { getMovies } from '@/services/movieService.js'

export const changeListAction = (list) => ({type: CHANGE_LIST, payload: list})

export const getMoviesAction = (page = 1, limit = 10) => {
    return async (dispatch, getState) => {
        const res = await getMovies(page, limit)
        // console.log('res', res.data)

        dispatch(changeListAction(res.data))
    }
}