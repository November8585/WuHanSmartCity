import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const request = axios.create({
    baseURL,
    timeout: 10000,
});

// 请求拦截器（后续可添加 token）
request.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
);

// 响应拦截器
request.interceptors.response.use(
    response => response.data,
    error => {
        console.error('请求失败', error);
        return Promise.reject(error);
    },
);

export default request;