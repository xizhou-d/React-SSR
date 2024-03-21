import axios from 'axios'

// 判断是服务端还是客户端
const config = {}
if (typeof window === 'undefined') {
    config.baseURL = 'http://yuanjin.tech:5005/'
}

const instance = axios.create(config)

export default instance