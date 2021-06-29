import Axios from 'axios'

import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
    baseURL,
    timeout: 20000, // 请求超时 20s
})

// 前置拦截器(发起请求之前的拦截)

axios.interceptors.request.use(
    (config) => config,
    /*
            根据你的项目实际情况来对config做处理
            这里对config 不做任何处理，直接返回
        */

    (error) => Promise.reject(error),
)

// 后置拦截器 (获取到响应的拦截器)
axios.interceptors.response.use(
    (response) => response,
    /*
            根据你的项目实际情况来对response 和 error 做处理
            这里对response 和 error 不做任何处理，直接返回
        */
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.message
            ElMessage.error(`Code: ${code}, Message: ${msg}`)
            console.error('[Axios Error]', error.response)
        } else {
            ElMessage.error(`${error}`)
        }
        return Promise.reject(error)
    },
)

export default axios
