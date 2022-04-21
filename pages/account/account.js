Page({
	data: {
		account: {
			name: "Anna",
			avatarUrl: '',
			userAccount: {
				'point': 12,
				'price': 100,
				'discount': 3
			}
		},
		option: {
			'point': '积分商城',
			'price': '余额',
			'discount': '优惠券'
		}
	},
	onReady() {
		const {name,avatarUrl} = wx.getStorageSync('userInfo')
		console.log(name,avatarUrl)
		this.setData({
			name,
			avatarUrl
		})
	}
})