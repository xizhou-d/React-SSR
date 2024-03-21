import { matchRoutes } from 'react-router-dom'
import routes from '@/router'

/**
 * 负责服务端渲染前的加载
 */
export default function loadData(currentLocation, store) {
    if (currentLocation === '/favicon.ico') return
    const matches = matchRoutes(routes, currentLocation);
    const promises = []
    for (const match of matches) {
        if (match.route.element?.loadData) {
            promises.push(Promise.resolve(match.route.element?.loadData(store)))
        } else if (match.route.element?.type?.WrappedComponent?.loadData) {
            promises.push(Promise.resolve(match.route.element?.type?.WrappedComponent?.loadData(store)))
        }
    }
    return Promise.all(promises)
}