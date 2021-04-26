const BASE_URL = 'http://localhost:8989/notepad/'
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url:BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				// if(!res.data) {
				// 	return uni.showToast({
				// 		title: '获取数据失败'
				// 	})
				// }
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '接口请求失败'
				})
				reject(err)
			}
		})
	})
}