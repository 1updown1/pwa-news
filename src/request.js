import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(config => {
    if (config.errorRetryTimes === undefined) config.errorRetryTimes = 2;
    return config;
})

instance.interceptors.response.use(({status, data}) => {
	if(status !== 200){
		return Promise.reject('http error');
	}
	if(data.code !== 200){
		return Promise.reject(data.resMsg);
	}
    return data.res;
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