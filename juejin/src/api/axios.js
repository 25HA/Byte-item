import axios from 'axios'

const baseUrl = ''; //公共接口部分

// 封装抛出get方法
export function get(url) {
	return function(params = {}) {
		return axios.get(baseUrl + url, {
			params
		}).then(res => {
            // console.log(res);
			return res.data;
		}).catch(err => {
			console.log(err);
		})

	}
}
