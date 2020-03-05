import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(config => {
    if (config.errorRetryTimes === undefined) config.errorRetryTimes = 2;
    return config;
})

instance.interceptors.response.use(res => {
    return res;
}, async err => {
    const { config } = err;
    if (config.errorRetryTimes && config.errorRetryTimes > 0) {
        config.errorRetryTimes--;
        return await instance(config);
    } else {
        return Promise.reject(err);
    }
})

export { instance }